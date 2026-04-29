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
        <div className="min-h-screen bg-transparent text-foreground">
            <Header />
            <main className="pt-32 pb-20 relative overflow-hidden">
                {/* Intense glowing gradient blob inspired by Dark Contact Section */}
                <div className='absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px] pointer-events-none' style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
                <div className="container mx-auto px-6 relative z-10">
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
                        <div className="bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-8 md:p-10 shadow-xl dark:shadow-[0_0_50px_rgba(14,165,233,0.15)] relative overflow-hidden group">
                            {/* Decorative element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-bl-full blur-xl -z-10 group-hover:scale-150 transition-transform duration-700" />

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
                                        className="bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 focus:border-cyan-500/50 focus:ring-cyan-500/50 transition-all font-medium text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-white/30"
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
                                        className="bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 focus:border-cyan-500/50 focus:ring-cyan-500/50 transition-all font-medium text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-white/30"
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
                                            className="bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 focus:border-cyan-500/50 focus:ring-cyan-500/50 transition-all font-medium text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-white/30"
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
                                            className="bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 focus:border-cyan-500/50 focus:ring-cyan-500/50 transition-all font-medium text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-white/30"
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
                                        className="bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 focus:border-cyan-500/50 focus:ring-cyan-500/50 transition-all resize-none font-medium text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-white/30"
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
                                    size="lg"
                                    className="w-full mt-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all rounded-full"
                                    disabled={submitting}
                                >
                                    {submitting ? (
                                        <>
                                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            Submit Inquiry
                                            <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
