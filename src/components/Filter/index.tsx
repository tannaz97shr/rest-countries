"use client";

import { IDropdownOption } from "@/types/general";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import Dropdown from "../Dropdown";
import { IconSearch } from "../Icons";

const Filter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [region, setRegion] = useState<string>();
  const [searchName, setSearchName] = useState<string>();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams("");
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const deleteQueryString = useCallback(
    (name: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(name);

      return params.toString();
    },
    [searchParams]
  );
  return (
    <div className=" flex flex-col md:flex-row">
      <div className="relative">
        <IconSearch className="absolute top-[16px] left-[40px]" />
        <input
          className="w-full rounded py-4 text-sm pl-20 dark:bg-dark-secondary md:w-[340px]"
          placeholder="Search for a country..."
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setSearchName(e.currentTarget.value);
          }}
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
        <button
          onClick={() => {
            router.push(
              `${pathname}?${
                region ? createQueryString("region", region) : ""
              }${searchName ? "&" + createQueryString("name", searchName) : ""}`
            );

            // if (region) {
            //   router.push(pathname + "?" + createQueryString("region", region));
            // } else {
            //   console.log("else");
            //   router.push(pathname + "?" + deleteQueryString("region"));
            // }
            // if (searchName) {
            //   router.push(
            //     pathname + "?" + createQueryString("name", searchName)
            //   );
            // } else {
            //   console.log("else");
            //   router.push(pathname + "?" + deleteQueryString("name"));
            // }
          }}
          className="rounded-lg box-border bg-white dark:bg-dark-secondary px-4 py-3 text-sm"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Filter;
