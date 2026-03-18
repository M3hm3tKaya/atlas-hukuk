"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "./Icons";
import clsx from "clsx";

interface AccordionItem {
  title: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-light rounded-lg overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-light/50 transition-colors duration-300"
          >
            <div className="flex-1">
              <h3 className="font-serif text-xl font-semibold text-navy">
                {item.title}
              </h3>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">
                  {item.type}
                </span>
                <span className="text-sm text-steel">{item.experience}</span>
              </div>
            </div>
            <ChevronDownIcon
              className={clsx(
                "text-steel shrink-0 transition-transform duration-500",
                openIndex === index ? "rotate-180" : ""
              )}
              size={20}
            />
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 border-t border-light pt-4">
                  <p className="text-steel text-base leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <h4 className="text-sm font-semibold text-navy mb-3">
                    Aranan Nitelikler:
                  </h4>
                  <ul className="space-y-2">
                    {item.requirements.map((req, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-steel">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
