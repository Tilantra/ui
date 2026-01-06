import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        designation: "",
        email: "",
        phone: "",
        message: "",
    });
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setSuccess(null);
        setError(null);
        try {
            const response = await fetch("https://backend.tilantra.com/inquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (response.ok) {
                setSuccess("Thank you for your inquiry!");
                setForm({ name: "", designation: "", email: "", phone: "", message: "" });
            } else {
                const err = await response.json();
                setError("Error: " + (err.detail || "Could not submit inquiry."));
            }
        } catch (error) {
            setError("Network error. Please try again later.");
        }
        setSubmitting(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main className="pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Left Column: Lore Ipsum Content */}
                        <div className="space-y-6">
                            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                                Get in touch
                            </h1>
                            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    We're here to help you scale your AI operations. Whether you have questions
                                    about our solutions, need technical support, or want to discuss a custom
                                    integration, our team is ready to assist.
                                </p>
                                <p>
                                    Reach out to us and discover how Tilantra can streamline your workflows,
                                    optimize your performance, and accelerate your path to innovation.
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Contact Form */}
                        <div className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-sm relative overflow-hidden">
                            {/* Decorative element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10" />

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="text-sm font-medium">Full Name <span className="text-red-500">*</span></Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="John Doe"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        className="bg-background"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="designation" className="text-sm font-medium">Designation <span className="text-red-500">*</span></Label>
                                    <Input
                                        id="designation"
                                        name="designation"
                                        placeholder="Product Manager"
                                        value={form.designation}
                                        onChange={handleChange}
                                        required
                                        className="bg-background"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-sm font-medium">Email <span className="text-red-500">*</span></Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="john@company.com"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                            className="bg-background"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="+1 (555) 000-0000"
                                            value={form.phone}
                                            onChange={handleChange}
                                            className="bg-background"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-sm font-medium">How can we help? <span className="text-red-500">*</span></Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Tell us about your project or inquiry..."
                                        rows={4}
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        className="bg-background resize-none"
                                    />
                                </div>

                                {success && (
                                    <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-500 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                                        <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                                        <p className="text-sm font-medium">{success}</p>
                                    </div>
                                )}

                                {error && (
                                    <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                        <p className="text-sm font-medium">{error}</p>
                                    </div>
                                )}

                                <Button
                                    type="submit"
                                    variant="hero"
                                    size="lg"
                                    className="w-full mt-2"
                                    disabled={submitting}
                                >
                                    {submitting ? (
                                        <>
                                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            Send Inquiry
                                            <Send className="w-4 h-4 ml-2" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
