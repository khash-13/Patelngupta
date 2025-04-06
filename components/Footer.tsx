"use client";
// const ref = useRef(null);
// const isInView = useInView(ref, { amount: 0.3 });

// ref={ref}

// motion.p
//           variants={fadeInOut("down", "tween", 0.2, 0.5)}
//           initial="hidden"
//           animate={isInView ? "show" : "exit"}
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { footerData } from "@/lib/data";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  if (pathname.includes("/studio")) return;
  return (
    <div ref={ref} className="flex-between flex-col bg-muted  border-t">
      <div className="container max-w-7xl grid grid-cols-1 md:grid-cols-5 gap-8 px-4 py-6 md:px-16 md:py-10 lg:px-24 lg:py-16">
        <div className="space-y-4">
          <Link href="/" className="w-fit h-fit overflow-hidden">
            <Image
              src="/logo.png"
              alt="logo"
              // width={200}
              // height={200}
              width={1920}
              height={1080}
              loading="eager"
              className="w-fit h-fit"
            />
          </Link>
          <p className="text-muted-foreground text-sm md:text-md text-balance text-justify">
            {footerData.companyDescription}
          </p>
        </div>
        {footerData.columns.map((column, index) => (
          <div
            key={index}
            className="w-fit h-fit flex flex-col gap-2 md:gap-4 lg:gap-6 md:px-4"
          >
            <h4 className="text-lg md:text-xl font-semibold">{column.title}</h4>
            {column.links.map((link, linkIndex) => (
              <Link
                key={linkIndex}
                href={link.href}
                className="w-fit text-muted-foreground text-sm md:text-md lg:text-lg hover-underline-lr hover:translate-x-2 ease-in-out duration-300"
                prefetch={false}
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
        <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
          <h4 className="text-lg md:text-xl font-semibold">Contact</h4>
          {footerData.contactInfo.map((info, index) => (
            <Link
              href={info.href}
              key={index}
              className="w-fit h-fit flex items-center gap-2 hover:translate-x-1.5 ease-in-out duration-300"
            >
              {/* {info.icon} */}
              <info.icon size={20} className="text-muted-foreground" />

              <span className="hover-underline-lr text-muted-foreground text-sm md:text-md lg:text-lg">
                {info.value}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="container max-w-7xl flex-between flex-col-reverse md:flex-row gap-4 border-t border-t-slate-300 py-4 md:py-8">
        <p className="text-muted-foreground text-sm hover:text-foreground ease-in-out duration-300">
          © {new Date().getFullYear()} {footerData.copyright}
        </p>
        <div className="flex items-center gap-4 md:mr-10">
          {footerData.socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              title={link.lable}
              target="_blank"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <link.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
