"use client";

import { fadeInOut } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Button } from "../ui/button";
import { sendEmail } from "@/lib/actions/sendEmail.action";
import { toast } from "../ui/use-toast";

const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });

  return (
    <section
      ref={ref}
      className="relative w-full h-fit flex flex-col md:flex-row gap-2"
    >
      <div className="h-fit w-full md:w-[380px] space-y-4 p-2">
        <motion.div
          variants={fadeInOut("right", "tween", 0.2, 0.8)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="w-full h-fit flex-center overflow-hidden"
        >
          <Image
            src="/assets/images/contactUs.png"
            alt="Contact Us"
            width={1920}
            height={1080}
            loading="eager"
            className="w-fit h-full object-contain"
          />
        </motion.div>
        <motion.p
          variants={fadeInOut("right", "tween", 0.2, 0.8)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="w-full text-sm md:text-md text-balance font-thin"
        >
          Email, call, or complete the form to get in touch with us.
        </motion.p>
        <div className="space-y-1">
          <motion.p
            variants={fadeInOut("right", "tween", 0.2, 1.2)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="text-md md:text-lg lg:text-xl text-balance font-semibold"
          >
            Email
          </motion.p>
          <Link target="_blank" href="mailto:audit@patelngupta.com">
            <motion.p
              variants={fadeInOut("right", "tween", 0.2, 1.5)}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="w-fit text-sm md:text-md text-balance font-thin text-[#7977C6] hover-link"
            >
              audit@patelngupta.com
            </motion.p>
          </Link>
        </div>
        <div className="space-y-1">
          <motion.p
            variants={fadeInOut("right", "tween", 0.2, 1.8)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="text-md md:text-lg lg:text-xl text-balance font-semibold"
          >
            Call
          </motion.p>
          <motion.p
            variants={fadeInOut("right", "tween", 0.2, 2.2)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="w-full text-sm md:text-md text-balance font-thin"
          >
            <Link
              target="_blank"
              href="tel:7647867870"
              className="w-fit text-[#7977C6] hover-link"
            >
              +91 7647867870
            </Link>
          </motion.p>
          <motion.p
            variants={fadeInOut("right", "tween", 0.2, 2.5)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="w-full text-sm md:text-md text-balance font-thin"
          >
            <Link
              target="_blank"
              href="tel:7312405500"
              className="w-fit text-[#7977C6] hover-link"
            >
              +91 7312405500
            </Link>
          </motion.p>
        </div>
        <div className="space-y-1">
          <motion.p
            variants={fadeInOut("right", "tween", 0.2, 2.8)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="text-md md:text-lg lg:text-xl text-balance font-semibold"
          >
            Address
          </motion.p>
          <Link
            target="_blank"
            href="https://maps.app.goo.gl/mJr5ybaDxnLhup6g8"
          >
            <motion.p
              variants={fadeInOut("right", "tween", 0.2, 3)}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="w-fit text-sm md:text-md text-balance font-thin text-[#7977C6] hover-link"
            >
              543-544, 4th Floor: Vikram Tower, Sapna Sangeeta Road. Indore
              (M.P) 452001
            </motion.p>
          </Link>
        </div>
      </div>
      <motion.div
        variants={fadeInOut("left", "tween", 0.2, 0.8)}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="h-fit w-full lg:h-full flex flex-1 flex-col gap-2 bg-white/70 backdrop-blur-md rounded-2xl shadow-2xl p-2 lg:p-4"
      >
        <Form />
      </motion.div>
    </section>
  );
};

export default ContactForm;

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const Form: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const validateEmail = (email: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(phone);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (!e.target.value) {
      setErrors((prev) => ({ ...prev, name: "Name is required" }));
    } else {
      setErrors((prev) => ({ ...prev, name: "" }));
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!e.target.value) {
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
    } else if (!validateEmail(e.target.value)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email format" }));
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputPhone = e.target.value.replace(/[^\d]/g, "").slice(0, 10);
    setPhone(inputPhone);
    if (!inputPhone) {
      setErrors((prev) => ({ ...prev, phone: "Phone number is required" }));
    } else if (!validatePhone(inputPhone)) {
      setErrors((prev) => ({
        ...prev,
        phone: "Minimum phone number should be 10",
      }));
    } else {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    if (!e.target.value) {
      setErrors((prev) => ({ ...prev, message: "Message is required" }));
    } else {
      setErrors((prev) => ({ ...prev, message: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let formErrors: FormErrors = {};

    // Validate form fields
    if (!name) formErrors.name = "Name is required";
    if (!email) formErrors.email = "Email is required";
    else if (!validateEmail(email)) formErrors.email = "Invalid email format";

    if (!phone) formErrors.phone = "Phone number is required";
    else if (!validatePhone(phone))
      formErrors.phone = "Invalid phone number format";

    if (!message) formErrors.message = "Message is required";

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);

      try {
        const response = await sendEmail(name, email, phone, message);

        if (response.success) {
          toast({
            title: "Email sent successfully!",
            description: "We'll reach out to you very soon.",
          });
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
        } else {
          toast({
            title: "Failed to send email.",
            description: "Please try again later.",
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
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1 mb-0">
        <p className="text-md md:text-lg lg:text-xl font-bold">Get in touch</p>
        <p className="text-sm md:text-md">You Can Reach Us Anytime.</p>
      </div>

      <div>
        <label htmlFor="name" className="block font-medium">
          Name*
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={handleNameChange}
          className="w-full border rounded px-3 py-2"
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name}</span>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block font-medium">
          Email*
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="w-full border rounded px-3 py-2"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email}</span>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block font-medium">
          Phone Number*
        </label>
        <input
          id="phone"
          type="text"
          value={phone}
          onChange={handlePhoneChange}
          className="w-full border rounded px-3 py-2"
        />
        {errors.phone && (
          <span className="text-red-500 text-sm">{errors.phone}</span>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block font-medium">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={handleMessageChange}
          className="w-full border rounded px-3 py-2"
          rows={4}
        />
        {errors.message && (
          <span className="text-red-500 text-sm">{errors.message}</span>
        )}
      </div>

      <Button
        type="submit"
        className={`w-full bg-[#7977C6] font-bold text-white rounded py-2 ${
          isSubmitting || Object.values(errors).some(Boolean)
            ? "opacity-50 cursor-not-allowed"
            : "active:translate-y-0.5 ease-in-out duration-300"
        }`}
        disabled={isSubmitting || Object.values(errors).some(Boolean)}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
};
