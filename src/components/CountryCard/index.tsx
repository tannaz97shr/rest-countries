import Image from "next/image";

interface CountryCardProps {
  flag: string;
  alt: string;
  name: string;
  population: number;
  capital: string;
  region: string;
}

const CountryCard = ({
  flag,
  alt,
  name,
  population,
  capital,
  region,
}: CountryCardProps) => {
  return (
    <div className="w-64 rounded flex-col overflow-hidden bg-white mx-auto mt-10 pb-11">
      <div className="w-full aspect-video mb-6 relative">
        <Image src={flag} layout="fill" alt={alt} />
      </div>
      <div className="flex flex-col w-full px-6">
        <span className=" font-extrabold text-lg mb-6">{name}</span>
        <div>
          <span className=" font-bold">Population:</span>
          {population}
        </div>
        <div>
          <span className=" font-bold">Region:</span>
          {region}
        </div>
        <div>
          <span className=" font-bold">Capital:</span>
          {capital}
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
