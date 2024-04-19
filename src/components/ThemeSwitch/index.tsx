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
      <div onClick={() => setTheme("light")}>
        <IconMoonDark /> dark
      </div>
    );

  if (resolvedTheme === "light")
    return (
      <div onClick={() => setTheme("dark")}>
        <IconMoonLight />
      </div>
    );
};

export default ThemeSwitch;
