import Image from 'next/image';
import CustomRadio from "@/app/components/CustomRadio";
import SearchFilter from "@/app/components/SearchFilter";

const HomePage = () => (
    <div className="relative h-[500px]">
      <Image
          src="/bg.svg"
          alt="Background Image"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          className="absolute inset-0"
      />
      <CustomRadio />
      <SearchFilter />
    </div>
);

export default HomePage;
