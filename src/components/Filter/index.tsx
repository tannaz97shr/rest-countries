"use client";

import { IDropdownOption } from "@/types/general";
import { useState } from "react";
import Dropdown from "../Dropdown";
import { IconSearch } from "../Icons";

const Filter = () => {
  const [region, setRegion] = useState<string>();
  return (
    <div className=" flex flex-col md:flex-row">
      <div className="relative">
        <IconSearch className="absolute top-[16px] left-[40px]" />
        <input
          className="w-full rounded py-4 text-sm pl-20 dark:bg-dark-secondary md:w-[340px]"
          placeholder="Search for a country..."
        />
      </div>
      <Dropdown
        selected={region}
        onSelect={(option: IDropdownOption) =>
          setRegion((prev) =>
            option.value === prev ? undefined : option.value
          )
        }
        className="mt-10 md:mt-0 md:ml-auto"
        options={[
          {
            value: "africa",
            name: "africa",
          },
          {
            value: "america",
            name: "america",
          },
          {
            value: "asia",
            name: "asia",
          },
          {
            value: "europe",
            name: "europe",
          },
          {
            value: "oceania",
            name: "oceania",
          },
        ]}
      />
      <div className="mt-10 md:mt-0 gap-2 flex ml-auto md:ml-6">
        <button className="rounded-lg border border-dark-secondary px-4 py-3 text-sm">
          Clear
        </button>
        <button className="rounded-lg box-border bg-white dark:bg-dark-secondary px-4 py-3 text-sm">
          Search
        </button>
      </div>
    </div>
  );
};

export default Filter;
