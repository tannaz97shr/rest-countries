"use client";

import { IDropdownOption } from "@/types/general";
import { useState } from "react";
import { IconArrowDown, IconCheck } from "../Icons";

interface DropdownProps {
  options: IDropdownOption[];
  className?: string;
  onSelect: (option: IDropdownOption) => void;
  selected?: string;
}

const Dropdown = ({
  options,
  className,
  onSelect,
  selected,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className={` relative w-52 ${className}`}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className=" w-full bg-white dark:bg-dark-secondary text-sm py-3.5 px-6 rounded flex justify-between"
      >
        <span>Filter by Region</span>
        <IconArrowDown />
      </button>
      {isOpen && (
        <div className="z-10 absolute rounded bg-dark-secondary w-full mt-4 px-5 py-6 capitalize text-sm">
          <ul>
            {options.map((option, i) => (
              <li
                className={`${
                  i !== 0 && "mt-2"
                } cursor-pointer flex justify-between`}
                onClick={() => {
                  onSelect(option);
                  setIsOpen(false);
                }}
              >
                <span>{option.name}</span>
                {selected === option.value && <IconCheck />}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
