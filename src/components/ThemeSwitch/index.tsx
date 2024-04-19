import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div>loading</div>;

  if (resolvedTheme === "dark")
    return <div onClick={() => setTheme("light")}>dark</div>;

  if (resolvedTheme === "light")
    return <div onClick={() => setTheme("dark")}>light</div>;
};

export default ThemeSwitch;
