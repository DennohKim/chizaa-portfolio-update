"use client";
import { navigation } from "@/utils/data";
import { textContainer, textVariant2 } from "@/utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";
export default function NavTextContainer() {
  return (
    <motion.div variants={textContainer} className='hidden sm:ml-6 sm:block'>
      <div className='flex space-x-4 '>
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className='color_animation rounded-md px-3 py-2 text-sm font-semibold text-slate-color-light hover:bg-secondary-color hover:text-primary-color'
          >
            {item.name}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
