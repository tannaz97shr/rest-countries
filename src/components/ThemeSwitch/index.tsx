"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IconMoonDark, IconMoonLight } from "../Icons";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="ml-auto">loading</div>;

  if (resolvedTheme === "dark")
    return (
      <div
        className="flex items-center gap-2 cursor-pointer ml-auto"
        onClick={() => setTheme("light")}
      >
        <IconMoonLight /> <span>Light Mode</span>
      </div>
    );

  if (resolvedTheme === "light")
    return (
      <div
        onClick={() => setTheme("dark")}
        className="flex items-center gap-2 cursor-pointer ml-auto"
      >
        <IconMoonDark /> <span>Dark Mode</span>
      </div>
    );
};

export default ThemeSwitch;
