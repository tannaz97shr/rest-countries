import { IconArrowDown } from "../Icons";

interface DropdownProps {
  options: {
    value: string;
    name: string;
  }[];
  className?: string;
}

const Dropdown = ({ options, className }: DropdownProps) => {
  return (
    <div className={` relative w-52 ${className}`}>
      <button className=" w-full bg-white dark:bg-dark-secondary text-sm py-3.5 px-6 rounded flex justify-between">
        <span>Filter by Region</span>
        <IconArrowDown />
      </button>
    </div>
  );
};

export default Dropdown;
