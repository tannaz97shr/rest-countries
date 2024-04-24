import Filter from "@/components/Filter";
import { ICountry } from "@/types/general";

async function getData(region?: string, name?: string) {
  if (region) {
    const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }
  if (name) {
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }
  const res = await fetch("https://restcountries.com/v3.1/all");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const data: ICountry[] = await getData(
    searchParams?.region as string,
    searchParams?.name as string
  );
  console.log("data :", data[0]);
  return (
    <>
      <Filter />
      <div className="flex flex-wrap">
        {data.map((country: ICountry) => (
          <div>{country.name.common}</div>
        ))}
      </div>
    </>
  );
}
