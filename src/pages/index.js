import Image from "next/image";
import HomeComponent from "@/components/HomeComponent";
import FeaturesComponent from "@/components/FeaturesComponent";
import GetStarted from "@/components/GetStarted";
import { blurimage, star } from "@/assets";


export default function Home() {
  return (
    <>
      <HomeComponent />
      <FeaturesComponent />
      <div className="relative w-full">
        <Image
          src={blurimage}
          alt="blurimage"
          width={1000}
          height={500}
          className="max-w-[800px] animate-scaling2 w-full -z-[1000]    absolute  hidden lg:block -top-[200px] -left-[180px]"
        />
      </div>
      <Image
        className="absolute lg:block hidden right-8 animate-spin "
        src={star}
        width={100}
        height={100}
        alt="star"
      />

      <GetStarted />
    </>
  );
}
