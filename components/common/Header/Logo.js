"use client";
import darkLogo from "@/public/darkLogo.png";
import lightLogo from "@/public/lightLogo.png";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Logo = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <Link href="/">
        {theme === "system" || theme === "dark" ? (
          <Image
            src={darkLogo}
            width={190}
            height={150}
            alt="logo"
            className="h-[45px] object-cover"
          />
        ) : (
          <Image
            src={lightLogo}
            width={190}
            height={150}
            alt="logo"
            className="h-[45px] object-cover"
          />
        )}
      </Link>
    )
  );
};

export default Logo;
