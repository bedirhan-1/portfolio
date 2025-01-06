"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="lg">
            Contact Me
          </Button>
        </SheetTrigger>

        {/* Sheet Content */}
        <SheetContent side="bottom">
          {/* Form İçeriği */}
          <form className="p-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-semibold text-center">Contact Me</h2>
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-2 bg-zinc-900 text-white rounded-md outline-none focus:ring-2 focus:ring-teal-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 bg-zinc-900 text-white rounded-md outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="px-4 py-2 bg-zinc-900 text-white rounded-md outline-none focus:ring-2 focus:ring-pink-400"
              />
              <div className="flex gap-4 mt-4">
                <Button
                  variant="default"
                  className="bg-gray-500 hover:bg-gray-600 text-white"
                  type="button"
                >
                  Close Without Sending
                </Button>
                <Button
                  variant="default"
                  className="bg-teal-500 hover:bg-teal-600 text-white"
                  type="submit"
                >
                  Send Message
                </Button>
              </div>
            </div>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
}
