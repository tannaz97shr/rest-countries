"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IconMoonDark, IconMoonLight } from "../Icons";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div>loading</div>;

  if (resolvedTheme === "dark")
    return (
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setTheme("light")}
      >
        <IconMoonLight /> <span>Dark Mode</span>
      </div>
    );

  if (resolvedTheme === "light")
    return (
      <div
        onClick={() => setTheme("dark")}
        className="flex items-center gap-2 cursor-pointer"
      >
        <IconMoonDark /> <span>Light Mode</span>
      </div>
    );
};

export default ThemeSwitch;
