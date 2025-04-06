import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import { LinkValues, ServiceValues } from "./types";
import { FiPhoneOutgoing } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

export const links: LinkValues[] = [
  { id: 0, head: "Home", href: "/" },
  { id: 3, head: "About Us", href: "/about-us" },
  { id: 2, head: "Service", href: "/service" },
  {
    id: 3,
    head: "Blog",
    href: "/blog/post",
    pages: [
      { id: 0, head: "Post", href: "/blog/post" },
      { id: 1, head: "What We Do", href: "/blog/what-we-do" },
    ],
  },
  { id: 4, head: "Contact", href: "/contact" },
];

export const services: ServiceValues[] = [
  {
    id: 0,
    title: "Audit and Assurance Services",
    description:
      "Historically Patel & Gupta (“P&G”) strength was in accounting, auditing and related services. The audit clients of P&G today include corporates, banks, medium & small enterprises including family-owned businesses.",
    icon: "https://consultia-nextjs.vercel.app/assets/img/icons/tax-business1.png",
    link: "/service/audit-and-assurance-services",
    slug: "audit-and-assurance-services",
    isDetail: true,
    detail: [
      {
        id: 1,
        para: "At P&G, we use a constructive approach in auditing. As a result of understanding the clients’ systems, procedures and practices, we often recommend an improvement for more efficient operation, stronger financial structure and improved accounting and administrative controls. Our philosophy and practice are to blend the technical, the practical and the business approach in each audit engagement.",
      },
      {
        id: 2,
        para: "P&G’s assignments also include investigations and financial reviews particularly of companies for mergers, takeovers and acquisitions.",
      },
      {
        id: 3,
        para: "P&G has considerable experience in auditing accounts of large private companies in manufacturing and service industries, Commercial Banks, Co-operative Sectors etc.",
      },
      {
        id: 4,
        para: "P&G also has vast and varied experience in concurrent audits and internal audits. Some of the sectors serviced are Bank Branches, Banking, Multilevel Marketing, Auto Distributor, Retail Stores, etc.",
      },
      {
        id: 5,
        para: "P&G Endeavour’s continuously to improve the quality of its audits. The mandatory two-tier review is one of the important features of P&G’s quality control procedures.",
      },
      {
        id: 6,
        para: "P&G has also conducted due diligence reviews for Indian clients proposing to acquire domestic businesses.",
      },
      {
        id: 7,
        para: "P&G undertakes the Tax audit of a significant number of clients along with the statutory audit. This offers a great synergy in the audit service and is a great value addition to the client during the completion of tax assessments and concerning tax advisory services in general.",
      },
      {
        id: 8,
        para: " P&G also undertakes compliance of various statutory requirements of clients under the company law (including company secretarial services), direct and indirect tax laws.",
      },
    ],
  },
  {
    id: 1,
    title: "Advisory Services",
    description:
      "“P&G” provides advisory services relating to capital issues, financing options and helps draft financing proposals. We advise on a variety of corporate problems such as corporate recovery, investment evaluations, dealer network building, capital restructuring and spin-offs. We undertake management audits with a remedial approach to corporate problems. The management consulting services rendered by P&G deal with a wide range of problems within privately owned businesses, public sector corporations and banks.",
    icon: "https://consultia-nextjs.vercel.app/assets/img/icons/tax-business4.png",
    link: "/service/advisory-services",
    slug: "advisory-services",
    isDetail: true,
    servicesIinclude: "Services include: ",
    detail: [
      {
        id: 1,
        para: "To develop accounting, budgeting, forecasting and other information systems and evaluation of alternative financial strategies.",
      },
      {
        id: 2,
        para: "To develop accounting, budgeting, forecasting and other information systems and evaluation of alternative financial strategies.",
      },
      {
        id: 3,
        para: "Systems development and systems audit.",
      },
      {
        id: 4,
        para: "Techno-economic studies, viability studies, project reports and project appraisals.",
      },
      {
        id: 5,
        para: "Recruitment of accounting and finance personnel.",
      },
      {
        id: 6,
        para: "Techno-Economic Viability Studies for small, medium and large-scale businesses.",
      },
      {
        id: 7,
        para: "Consultancy on nursing programmes and rehabilitation of sick units.",
      },
      {
        id: 8,
        para: "Working Capital Management.",
      },
      {
        id: 9,
        para: "Preparation of Project Reports, Project Appraisal.",
      },
      {
        id: 10,
        para: "Monitoring sick and difficult accounts of borrowers on behalf of Banks.",
      },
      {
        id: 11,
        para: "Negotiation for the acquisition of companies and this purpose preparation of reports and financial analysis.",
      },
      {
        id: 12,
        para: "Reports on amalgamation and mergers.",
      },
      {
        id: 13,
        para: "Management Audits, Stock Audits, including advice on improving systems, stocks levels etc.",
      },
      {
        id: 14,
        para: "Development and Installation of Management Information Systems Study, Systems Development, Installation and Evaluation of Controls.",
      },
      {
        id: 15,
        para: " While P&G’s role in the growth of a client’s commercial interest begins before the entity/organization comes into being, P&G plays an important role in setting up the operations by providing professional services in setting up the appropriate entity and getting the same ready for giving shape to the vision of the promoters.",
      },
    ],
  },
  {
    id: 2,
    title: "Taxation Services",
    description:
      "“P&G” offer comprehensive taxation services to both corporate and individual clients. Our direct tax services include tax representation, return preparation, and strategic tax planning, as well as advisory on reorganizations, mergers, and unique business scenarios. In the realm of indirect taxes, we provide expert guidance on Goods and Service Tax (GST), ensuring compliance and addressing daily operational needs. Additionally, we conduct thorough GST audits to align with regulatory requirements.",
    icon: "https://consultia-nextjs.vercel.app/assets/img/icons/tax-business3.png",
    link: "/service/taxation-services",
    slug: "taxation-services",
    taxes: [
      {
        id: 1,
        head: "Direct Taxes",
        para: "Patel & Gupta (“P&G”) provides comprehensive taxation services both corporate and individual which include tax representations, preparing tax returns and tax planning. P&G renders tax advisory services relating to reorganizations, mergers and special business situations.",
      },
      {
        id: 2,
        head: "Indirect Taxes",
        para: "Goods and Service Tax (GST) is now a significant part of the day to day operations of Indian business. P&G has recognized the need to offer the service and synergize the commercial requirements of the client.  Apart from offering professional advice on day to day matters, P&G also undertakes GST audit in compliance with the GST Act.",
      },
    ],
    isDetail: false,
  },
  {
    id: 3,
    title: "Other Services",
    description:
      "Patel & Gupta offers a range of additional services to enhance client value. Our Recruitment cell specializes in executive search and placement for finance and accounting roles, as well as providing expert advice on HR policies and implementation. We also deliver periodic training to help clients stay updated with changes in accounting and legal regulations, ensuring timely and efficient compliance. Additionally, our Payroll Processing service handles all aspects of employee payments, from salary calculations and disbursements to maintaining records and meeting statutory requirements.",
    icon: "https://consultia-nextjs.vercel.app/assets/img/icons/tax-business2.png",
    link: "/service/other-services",
    slug: "other-services",
    taxes: [
      {
        id: 1,
        head: "Recruitment",
        para: "In continuation of the process of adding value to the professional services to clients, P&G now has its Recruitment cell which has been set up to meet the HR and Personnel requirements of clients. This includes not only an executive search and placement of finance and accounts professionals and executives at every level of the organization through a structured and organized process but also advising clients on meeting their requirements in matters relating to HR policy and its implementation.",
      },
      {
        id: 2,
        head: "Training",
        para: "We at Patel & Gupta offer periodical training pertaining to change in accounting and legal laws to our esteemed clients so that they can adhere to the law of land timely and efficiently.",
      },
      {
        id: 3,
        head: "Payroll Processing",
        para: "P&G also provides payroll services relating to client’s employee payments. The service covers every aspect of the payroll function from calculating salaries and the payments to concerned employees and consequently maintaining requisite records, to complying with every statutory requirement.",
      },
    ],
    isDetail: false,
  },
];

export const faqs = [
  {
    id: 1,
    value: "item-1",
    question: "What should entrepreneurs never do?",
    answer:
      "I’m a serial entrepreneur and have started/ran/sold approximately 20 businesses over the past 45 years. Some of my businesses made millions, some of them broke even. But - I never lost a dime on a single one.",
  },
  {
    id: 2,
    value: "item-2",
    question: "Why do I need a Chartered Accountant?",
    answer:
      "A Chartered Accountant provides expert advice on financial planning, tax strategies, and compliance with financial regulations, ensuring that your business is financially sound and legally compliant.",
  },
  {
    id: 3,
    value: "item-3",
    question: "What services do Chartered Accountants offer?",
    answer:
      "Chartered Accountants offer a wide range of services including tax planning, auditing, financial reporting, business advisory, and risk management, tailored to meet the unique needs of each client.",
  },
  {
    id: 4,
    value: "item-4",
    question: "How can I reduce my tax liability?",
    answer:
      "Reducing tax liability involves strategic planning, taking advantage of tax deductions, credits, and efficient tax structures. A Chartered Accountant can guide you through legal avenues to minimize your tax burden.",
  },
  {
    id: 5,
    value: "item-5",
    question: "What is the difference between bookkeeping and accounting?",
    answer:
      "Bookkeeping involves the daily recording of financial transactions, while accounting encompasses interpreting, classifying, analyzing, reporting, and summarizing financial data to inform business decisions.",
  },
  {
    id: 6,
    value: "item-6",
    question: "How often should I meet with my Chartered Accountant?",
    answer:
      "It’s recommended to meet with your Chartered Accountant at least quarterly to review financial performance, discuss tax planning strategies, and ensure your business remains on track with its financial goals.",
  },
  {
    id: 7,
    value: "item-7",
    question: "What should I prepare before meeting my Chartered Accountant?",
    answer:
      "Before meeting your Chartered Accountant, gather all relevant financial documents, including income statements, balance sheets, tax returns, and any other records that reflect your business’s financial activities.",
  },
];

export const footerData = {
  companyDescription:
    "Offering tailored financial solutions, including term loans, working capital loans, mortgage and unsecured loans, heavy equipment financing, export credit, LC, and bank guarantee facilities to meet your unique needs.",
  socialLinks: [
    {
      href: "https://www.linkedin.com/company/patel-&-gupta-chartered-accountants/about/",
      lable: "LinkedIn",
      icon: LinkedinIcon,
    },
    {
      href: "#",
      lable: "Facebook",
      icon: FacebookIcon,
    },
    {
      href: "#",
      lable: "Instagram",
      icon: InstagramIcon,
    },
    { href: "#", lable: "Twitter", icon: TwitterIcon },
  ],
  columns: [
    {
      title: "Our Company",
      links: [
        { label: "Service", href: "/service" },
        { label: "About us", href: "/about-us" },
        { label: "Contact us", href: "/contact" },
      ],
    },
    {
      title: "Learn",
      links: [{ label: "Our Blog", href: "/blog" }],
    },
    {
      title: "Resources",
      links: [{ label: "FAQs", href: "/#faqs" }],
    },
  ],
  contactInfo: [
    {
      type: "phone",
      label: "India",
      value: "+91 7647867870",
      href: "tel:+91 7647867870",
      icon: FiPhoneOutgoing,
    },
    {
      type: "phone",
      label: "India",
      value: "+91 7312405500",
      href: "tel:+91 7312405500",
      icon: FiPhoneOutgoing,
    },
    {
      type: "email",
      label: "General Info",
      value: "audit@patelngupta.com",
      href: "mailto:audit@patelngupta.com",
      icon: MdOutlineEmail,
    },
  ],
  copyright: "All Rights Reserved by Patel & Gupta CA's.",
};
