"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

const Contact = () => {
  const { t } = useLanguage();
  const info = [
    {
      icon: <FaPhoneAlt />,
      title: t.contact.info[0].title,
      description: t.contact.info[0].description,
    },
    {
      icon: <FaEnvelope />,
      title: t.contact.info[1].title,
      description: t.contact.info[1].description,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0, duration: 0.2, ease: "easeInOut" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={(event) => event.preventDefault()}
            >
              <h3 className="text-4xl text-accent">{t.contact.title}</h3>
              <p className="text-white/60">{t.contact.intro}</p>
              <p className="text-white/40 text-sm">{t.contact.notice}</p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder={t.contact.form.firstName} />
                <Input type="text" placeholder={t.contact.form.lastName} />
                <Input type="email" placeholder={t.contact.form.email} />
                <Input type="tel" placeholder={t.contact.form.phone} />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={t.contact.form.servicePlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>{t.contact.form.servicePlaceholder}</SelectLabel>
                    {t.contact.form.services.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        {service.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder={t.contact.form.message}
              />
              {/* btn */}
              <Button size="md" className="max-w-40" type="submit">
                {t.contact.form.submit}
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
