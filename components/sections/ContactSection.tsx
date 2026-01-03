"use client";

import FloatingContactButton from "@/components/common/FloatingContactButton";

export default function ContactSection() {
  // This section is now just a placeholder for the contact ID
  // The actual contact form is now a floating button
  return (
    <>
      <section id="contact" className="scroll-mt-20" aria-hidden="true" />
      <FloatingContactButton />
    </>
  );
}

