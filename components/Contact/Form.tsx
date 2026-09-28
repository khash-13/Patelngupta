"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { IconType } from "react-icons";
import {
  MdOutlineEmail,
  MdOutlinePhone,
  MdOutlineLocationOn,
} from "react-icons/md";
import { motion, useInView } from "framer-motion";
import { fadeInOut } from "@/lib/utils";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";
import { FaWhatsapp } from "react-icons/fa";

/* -------------------------------------------------------------------------- */
/*  Layout                                                                    */
/* -------------------------------------------------------------------------- */

const linkClass =
  "block break-words text-base text-white underline-offset-4 hover:underline";

const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });

  return (
    // If the parent page already adds padding, remove the px/py classes here.
    <section ref={ref} className="w-full px-4 py-8 lg:px-[120px] lg:py-16">
      <div className="mx-auto grid max-w-screen-xl overflow-hidden rounded-3xl shadow-2xl lg:grid-cols-[2fr_3fr]">
        {/* Info panel */}
        <motion.div
          variants={fadeInOut("right", "tween", 0.2, 0.8)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="flex flex-col gap-8 bg-[#161540] p-6 text-white md:p-10"
        >
          <div className="space-y-3">
            <h2 className="text-3xl font-black md:text-4xl">Get in touch</h2>
            <p className="max-w-md text-base text-white/75">
              Email, call, or complete the form and we{"’"}ll get back to you.
            </p>
          </div>

          <div className="space-y-6">
            <ContactRow icon={MdOutlineEmail} title="Email">
              <a href="mailto:patelnguptaweb@gmail.com" className={linkClass}>
                patelnguptaweb@gmail.com
              </a>
            </ContactRow>
            {/* For calls 
0731-2405500 , 0731-2405511
For whatsapp 
7647867870,  8959155000 */}
            <ContactRow icon={MdOutlinePhone} title="Call">
              {" "}
              <a href="tel:+917312405500" className={linkClass}>
                {" "}
                0731-2405500{" "}
              </a>{" "}
              <a href="tel:+917312405511" className={linkClass}>
                {" "}
                0731-2405511{" "}
              </a>{" "}
            </ContactRow>{" "}
            {/* WhatsApp */}{" "}
            <ContactRow icon={FaWhatsapp} title="WhatsApp">
              {" "}
              <a
                href="https://wa.me/917647867870"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                {" "}
                7647867870{" "}
              </a>{" "}
              <a
                href="https://wa.me/918959155000"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                {" "}
                8959155000{" "}
              </a>{" "}
            </ContactRow>
            <ContactRow icon={MdOutlineLocationOn} title="Visit us">
              <a
                href="https://maps.app.goo.gl/mJr5ybaDxnLhup6g8"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                543-544, 4th Floor, Vikram Tower, Sapna Sangeeta Road, Indore
                (M.P) 452001
              </a>
            </ContactRow>
          </div>

          {/*
            Image fix: the old <Image className="w-fit h-full"> let the 1920px
            image overflow its 380px box and get clipped by overflow-hidden.
            A fixed-ratio frame + `fill` + object-contain always shows the
            whole image at any width.
          */}
          <div className="relative mt-auto aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#E7E8F4]">
            <Image
              src="/assets/images/hero.jpg"
              alt="Contact PATEL & GUPTA"
              fill
              priority
              sizes="(min-width: 1280px) 460px, (min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Form panel */}
        <motion.div
          variants={fadeInOut("left", "tween", 0.2, 0.8)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="bg-white p-6 md:p-10"
        >
          <Form />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;

const ContactRow = ({
  icon: Icon,
  title,
  children,
}: {
  icon: IconType;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="flex items-start gap-4">
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#B9B8E8]">
      <Icon size={22} aria-hidden="true" />
    </span>
    <div className="min-w-0 space-y-0.5">
      <p className="text-sm text-white/60">{title}</p>
      {children}
    </div>
  </div>
);

/* -------------------------------------------------------------------------- */
/*  Form                                                                      */
/* -------------------------------------------------------------------------- */

type Values = { name: string; email: string; phone: string; message: string };
type Field = keyof Values;
type Errors = Partial<Record<Field, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9]{10}$/;

const emptyValues: Values = { name: "", email: "", phone: "", message: "" };

const validate = (v: Values): Errors => {
  const e: Errors = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  if (!v.email.trim()) e.email = "Please enter your email.";
  else if (!EMAIL_RE.test(v.email.trim()))
    e.email = "Enter a valid email address.";
  if (!v.phone) e.phone = "Please enter your phone number.";
  else if (!PHONE_RE.test(v.phone)) e.phone = "Enter a 10-digit phone number.";
  if (!v.message.trim()) e.message = "Please tell us how we can help.";
  return e;
};

const inputClass = (hasError: boolean) =>
  `w-full rounded-lg border bg-white px-4 py-3 text-base text-[#161540] outline-none transition placeholder:text-zinc-400 focus:border-[#7977C6] focus:ring-2 focus:ring-[#7977C6]/30 ${
    hasError ? "border-red-500" : "border-zinc-300"
  }`;

const FieldWrap = ({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-1.5">
    <label htmlFor={id} className="block text-sm font-medium text-[#161540]">
      {label}
    </label>
    {children}
    {error && (
      <p id={`${id}-error`} role="alert" className="text-sm text-red-600">
        {error}
      </p>
    )}
  </div>
);

const Form: React.FC = () => {
  const [values, setValues] = useState<Values>(emptyValues);
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const errors = validate(values);
  // Show an error only after the field was left once, or after a submit attempt.
  const errorFor = (f: Field) => (touched[f] ? errors[f] : undefined);

  const handleChange =
    (field: Field) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const raw = e.target.value;
      const value =
        field === "phone" ? raw.replace(/\D/g, "").slice(0, 10) : raw;
      setValues((prev) => ({ ...prev, [field]: value }));
    };

  const handleBlur = (field: Field) => () =>
    setTouched((prev) => ({ ...prev, [field]: true }));


const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setTouched({ name: true, email: true, phone: true, message: true });
  if (Object.keys(errors).length > 0) return;

  setIsSubmitting(true);
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        message: values.message.trim(),
      }),
    });

    // Non-JSON responses (e.g. a 500 HTML page) shouldn't crash the handler
    const data = await response.json().catch(() => null);

    if (response.ok && data?.success) {
      toast({
        title: "Email sent successfully!",
        description: "We'll reach out to you very soon.",
      });
      setValues(emptyValues);
      setTouched({});
    } else {
      toast({
        title: "Failed to send email.",
        description: data?.message || "Please try again later.",
        variant: "destructive",
      });
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    toast({
      title: "An unexpected error occurred.",
      description: "Please try again later.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  const describe = (f: Field) => (errorFor(f) ? `${f}-error` : undefined);

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="space-y-1">
        <h3 className="text-2xl font-bold text-[#161540] md:text-3xl">
          Send us a message
        </h3>
        <p className="text-sm text-zinc-600 md:text-base">
          Fill in the form and we{"’"}ll reach out to you. Fields marked * are
          required.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <FieldWrap id="name" label="Name*" error={errorFor("name")}>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            value={values.name}
            onChange={handleChange("name")}
            onBlur={handleBlur("name")}
            aria-invalid={!!errorFor("name")}
            aria-describedby={describe("name")}
            className={inputClass(!!errorFor("name"))}
          />
        </FieldWrap>

        <FieldWrap id="phone" label="Phone number*" error={errorFor("phone")}>
          <input
            id="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            placeholder="10-digit mobile number"
            value={values.phone}
            onChange={handleChange("phone")}
            onBlur={handleBlur("phone")}
            aria-invalid={!!errorFor("phone")}
            aria-describedby={describe("phone")}
            className={inputClass(!!errorFor("phone"))}
          />
        </FieldWrap>
      </div>

      <FieldWrap id="email" label="Email*" error={errorFor("email")}>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={values.email}
          onChange={handleChange("email")}
          onBlur={handleBlur("email")}
          aria-invalid={!!errorFor("email")}
          aria-describedby={describe("email")}
          className={inputClass(!!errorFor("email"))}
        />
      </FieldWrap>

      <FieldWrap id="message" label="Message*" error={errorFor("message")}>
        <textarea
          id="message"
          rows={5}
          placeholder="How can we help you?"
          value={values.message}
          onChange={handleChange("message")}
          onBlur={handleBlur("message")}
          aria-invalid={!!errorFor("message")}
          aria-describedby={describe("message")}
          className={`${inputClass(!!errorFor("message"))} resize-y`}
        />
      </FieldWrap>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="h-12 w-full rounded-lg bg-[#7977C6] text-base font-bold text-white transition duration-300 hover:bg-[#6866B5] active:translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
};
