import { IconSearch } from "../Icons";

const Filter = () => {
  return (
    <div>
      <div className="relative">
        <IconSearch className="absolute top-[16px] left-[40px]" />
        <input
          className="w-full rounded py-4 text-sm pl-20"
          placeholder="Search for a country..."
        />
      </div>
    </div>
  );
};

export default Filter;
