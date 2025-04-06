"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { fadeInOut } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { PiHandshakeLight } from "react-icons/pi";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { sendEmail } from "@/lib/actions/sendEmail.action";
import { toast } from "../ui/use-toast";

export default function JoinUs() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const validateEmail = (email: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!e.target.value) {
      setError("Email is required");
    } else if (!validateEmail(e.target.value)) {
      setError("Invalid email format");
    } else {
      setError("");
    }
  };

  const handleBtn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) return setError("Email is required");
    else setOpen(true);
  };
  const handlePopupClose = () => {
    setOpen(false);
  };
  return (
    <section
      ref={ref}
      className="w-full h-[50vh] lg:h-[70vh] flex-center bg-[url(/assets/images/joinUs.jpg)] bg-cover bg-center bg-no-repeat"
    >
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 bg-black/60 p-4 md:px-10 lg:px-32 ">
        <div className="space-y-4">
          <motion.p
            variants={fadeInOut("right", "tween", 0.2, 0.5)}
            initial="hidden"
            animate={isInView ? "show" : "exit"}
            className="w-fit flex-center rounded-full bg-white/80 text-sm md:text-lg font-light shadow-lg line-clamp-1 px-5 py-3 overflow-hidden"
          >
            <PiHandshakeLight size={20} className="mr-1" /> We Are Here For Your
            Tax Relief.
          </motion.p>
          <motion.h2
            variants={fadeInOut("right", "tween", 0.2, 0.8)}
            initial="hidden"
            animate={isInView ? "show" : "exit"}
            className="text-xl md:text-3xl lg:text-4xl font-bold tracking-wider text-[#fff] relative"
          >
            Join Us today and let us help{" "}
            <span className="underline underline-offset-8">you</span> to grow
            your business.
          </motion.h2>
        </div>
        <motion.div
          variants={fadeInOut("left", "tween", 0.2, 0.5)}
          initial="hidden"
          animate={isInView ? "show" : "exit"}
          className="flex flex-col items-end gap-4"
        >
          <form
            onSubmit={handleBtn}
            className="flex flex-wrap w-full items-center bg-white space-x-2 rounded-lg p-1 overflow-hidden"
          >
            <div className="flex flex-wrap w-full items-center bg-white space-x-2 rounded-lg p-2 overflow-hidden">
              <input
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email Address"
                className="flex-1 p-2 outline-none focus:border-b border-b-gray-400 ease-in-out duration-300"
              />
              <Button
                size="sm"
                className="bg-[#FDC24C] hover:bg-[#fdc24cd8] text-black fill-black space-x-1 flex-1"
              >
                <span className="text-md md:text-lg font-light">
                  Contact Us
                </span>
                <FaArrowUp
                  size={20}
                  className="scale-90 md:scale-100 rotate-45"
                />
              </Button>
            </div>
            {error && <span className="text-red-500 text-sm">{error}</span>}
          </form>
        </motion.div>
      </div>
      {isOpen && (
        <Popup
          isOpen={isOpen}
          handleClose={handlePopupClose}
          email={email}
          setEmail={setEmail}
        />
      )}
    </section>
  );
}

interface PopupProps {
  isOpen: boolean;
  handleClose: () => void;
  email: string;
  setEmail: (email: string) => void;
}

const Popup: React.FC<PopupProps> = ({
  isOpen,
  handleClose,
  email,
  setEmail,
}) => (
  <>
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="w-[90%] md:w-[652px] md:h-[80%] flex-center flex-col gap-0 mx-auto p-0 bg-black/10 backdrop-blur-md border-none shadow-md shadow-slate-600 hover:shadow-md hover:shadow-teal-500 rounded-xl scroll-div overflow-x-hidden overflow-y-scroll">
        <DialogTitle className=""></DialogTitle>
        <Form email={email} setEmail={setEmail} handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  </>
);

interface FormProps {
  email: string;
  setEmail: (email: string) => void;
  handleClose: () => void;
}

interface FormErrors {
  name?: string;
  phone?: string;
  message?: string;
}

const Form: React.FC<FormProps> = ({ email, setEmail, handleClose }) => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

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

    if (!name) formErrors.name = "Name is required";
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
          handleClose();
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
    <form onSubmit={handleSubmit} className="w-full p-2 text-white space-y-4">
      <div className="space-y-3 mt-2">
        <p className="w-full text-center text-lg md:text-2xl">Get in touch</p>
        <p className="text-md md:text-lg">
          Email:{" "}
          <span className="underline underline-offset-4 text-[#7977C6]">
            {email}
          </span>
        </p>
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
          className="w-full bg-transparent border-b border-b-gray-600 outline-none rounded px-3 py-2"
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name}</span>
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
          className="w-full bg-transparent border-b border-b-gray-600 outline-none rounded px-3 py-2"
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
          className="w-full bg-transparent border-b border-b-gray-600 outline-none rounded px-3 py-2"
          rows={4}
        />
        {errors.message && (
          <span className="text-red-500 text-sm">{errors.message}</span>
        )}
      </div>

      <Button
        type="submit"
        className={`w-full bg-blue-600 font-bold text-white rounded py-2 ${
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
