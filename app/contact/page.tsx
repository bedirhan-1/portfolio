"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import GradientOrbs from "@/components/ui/GradientOrbs";
import MagneticButton from "@/components/ui/MagneticButton";
import { AnimatedCharacters } from "@/components/ui/AnimatedText";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to send message",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/bedirhan" },
    { name: "GitHub", href: "https://github.com/bedirhan-1" },
    { name: "Twitter", href: "https://twitter.com" },
    { name: "Instagram", href: "https://instagram.com" },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-background text-foreground pt-32 pb-20">
      <GradientOrbs />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Side - Info */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-4">
                Get in touch
              </h2>
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display mb-8 leading-tight">
                <AnimatedCharacters text="Let's create" />
                <br />
                <AnimatedCharacters text="something" delay={0.2} />
                <div className="flex items-center gap-4">
                  <AnimatedCharacters
                    text="unique"
                    delay={0.4}
                    className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400"
                  />
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.6, type: "spring" }}
                    className="text-4xl"
                  >
                    ✨
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.p
              className="text-lg text-muted-foreground max-w-md mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Have a project in mind or just want to say hi? I'm always open to
              discussing new projects, creative ideas or opportunities to be
              part of your visions.
            </motion.p>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
                  Contact Details
                </h3>
                <a
                  href="mailto:bedirhangiden.info@gmail.com"
                  className="text-2xl hover:text-blue-400 transition-colors"
                >
                  bedirhangiden.info@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
                  Socials
                </h3>
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative text-lg"
                    >
                      <span className="relative transition-colors group-hover:text-white">
                        {social.name}
                      </span>
                      <span className="absolute left-0 bottom-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-8 bg-zinc-900/30 backdrop-blur-sm p-8 sm:p-12 rounded-3xl border border-white/10"
            >
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl outline-none transition-colors focus:border-blue-400 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 top-4 text-muted-foreground transition-all duration-300 pointer-events-none peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-400 peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm"
                >
                  What's your name?
                </label>
              </div>

              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl outline-none transition-colors focus:border-blue-400 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-4 text-muted-foreground transition-all duration-300 pointer-events-none peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-400 peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm"
                >
                  What's your email?
                </label>
              </div>

              <div className="relative group">
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl outline-none transition-colors focus:border-blue-400 peer resize-none"
                  placeholder=" "
                />
                <label
                  htmlFor="message"
                  className="absolute left-0 top-4 text-muted-foreground transition-all duration-300 pointer-events-none peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-400 peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm"
                >
                  Tell me about your project...
                </label>
              </div>

              <div className="pt-4 flex justify-end">
                <MagneticButton
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </MagneticButton>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
