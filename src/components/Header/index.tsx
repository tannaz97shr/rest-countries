import ThemeSwitch from "../ThemeSwitch";

const Header = () => {
  return (
    <div className="flex w-full h-20 items-center shadow-lg px-4 dark:bg-dark-secondary">
      <div className=" font-extrabold text-lg">Where in the world ?</div>
      <ThemeSwitch />
    </div>
  );
};

export default Header;
