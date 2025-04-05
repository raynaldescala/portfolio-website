"use client";

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, SendHorizonal } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface Errors {
    name?: string;
    email?: string;
    message?: string;
}

const Contact = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState<Errors>({});
    const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const { toast } = useToast();

    const validateField = (
        field: keyof FormData,
        value: string,
    ): string | undefined => {
        switch (field) {
            case "name":
                if (!value.trim()) return "Name is required";
                break;
            case "email":
                if (!value.trim()) return "Email is required";
                else if (!value.match(/^[^@]+@[^@]+\.[^@]+$/))
                    return "Invalid email";
                break;
            case "message":
                if (!value.trim()) return "Message is required";
                break;
        }
        return undefined;
    };

    const validateForm = (): Errors => {
        const newErrors: Errors = {};
        newErrors.name = validateField("name", formData.name);
        newErrors.email = validateField("email", formData.email);
        newErrors.message = validateField("message", formData.message);

        Object.keys(newErrors).forEach((key) => {
            if (!newErrors[key as keyof Errors]) {
                delete newErrors[key as keyof Errors];
            }
        });

        return newErrors;
    };

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (hasSubmitted) {
            const fieldError = validateField(name as keyof FormData, value);
            setErrors((prev) => ({ ...prev, [name]: fieldError }));
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setHasSubmitted(true);
            return;
        }

        setLoading(true);
        setErrors({});

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            toast({
                description: data.message,
            });
            setFormData({ name: "", email: "", message: "" });
            setHasSubmitted(false);
            setErrors({});
        } catch (error) {
            console.error(error);
            toast({
                description: "Failed to send message",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="grid gap-8" id="contact">
            <h2 className="font-serif text-2xl tracking-[0.6px] transition-colors duration-200 sm:text-3xl">
                contact me
            </h2>
            <form noValidate onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <div>
                        <Input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            onChange={handleChange}
                            value={formData.name}
                            className="w-full border p-2 pl-3 text-sm transition-colors duration-200 placeholder:text-foreground/25"
                        />
                        {errors.name && (
                            <p className="mt-1 text-sm text-destructive">
                                {errors.name}
                            </p>
                        )}
                    </div>
                    <div>
                        <Input
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            onChange={handleChange}
                            value={formData.email}
                            title=""
                            className="w-full border p-2 pl-3 text-sm transition-colors duration-200 placeholder:text-foreground/25"
                        />{" "}
                        {errors.email && (
                            <p className="mt-1 text-sm text-destructive">
                                {" "}
                                {errors.email}
                            </p>
                        )}
                    </div>
                </div>
                <div>
                    <Textarea
                        name="message"
                        placeholder="Type your message here…"
                        onChange={handleChange}
                        value={formData.message}
                        className="min-h-24 w-full resize-none border p-2 pl-3 text-sm transition-colors duration-200 placeholder:text-foreground/25"
                    />
                    {errors.message && (
                        <p className="mt-1 text-sm text-destructive">
                            {errors.message}
                        </p>
                    )}
                </div>
                <Button
                    type="submit"
                    disabled={loading}
                    className="rounded bg-primary px-4 py-2 text-primary-foreground transition-colors duration-200 hover:bg-accent hover:text-accent-foreground"
                >
                    {loading ? (
                        <div className="flex items-center justify-center gap-2">
                            <span>Sending...</span>
                            <Loader2
                                className="animate-spin"
                                width={15}
                                height={15}
                            />
                        </div>
                    ) : (
                        <div className="flex items-center justify-center gap-2">
                            <span>Send Message</span>
                            <SendHorizonal width={15} height={15} />
                        </div>
                    )}
                </Button>
            </form>
        </section>
    );
};

export default Contact;
