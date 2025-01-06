"use client";

import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import ColoredText from "@/components/ColoredText";

export default function About() {
  const heroText = "Hello, I’m Bedirhan A creative frontend developer.";
  const heroDesc =
    "Passionate about interactive design and dynamic user experiences.";
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <motion.section
        className="flex flex-col items-center space-y-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Başlık */}
        <ColoredText
          text={heroText}
          className="flex text-4xl font-bold flex-wrap justify-center gap-2 text-center cursor-pointer"
        />

        <ColoredText
          text={heroDesc}
          className="flex flex-wrap justify-center gap-2 text-center text-lg font-medium cursor-pointer"
        />
      </motion.section>
      <motion.div
        className="mt-8 flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="lg">
              Follow Me
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="p-4 space-y-4 text-center">
              <h2 className="text-xl font-bold">Follow Me</h2>
              <p>Find me on these platforms:</p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:text-teal-400"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:text-blue-400"
                >
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:text-cyan-400"
                >
                  Twitter
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <ContactForm />
      </motion.div>

      {/* Bottom Drawer: İletişim Formu */}
    </div>
  );
}
