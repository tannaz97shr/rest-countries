import Dropdown from "../Dropdown";
import { IconSearch } from "../Icons";

const Filter = () => {
  return (
    <div className=" flex flex-col">
      <div className="relative">
        <IconSearch className="absolute top-[16px] left-[40px]" />
        <input
          className="w-full rounded py-4 text-sm pl-20 dark:bg-dark-secondary"
          placeholder="Search for a country..."
        />
      </div>
      <Dropdown
        className="mt-10"
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
    </div>
  );
};

export default Filter;
