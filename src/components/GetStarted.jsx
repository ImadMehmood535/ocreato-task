import { apple, blurimage, elipses, homeabout1, homeabout2, homeabout3, homeeliipseleft, homeelipseleft, homeelipseright, star } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const GetStarted = () => {


  return (

    <div className="w-full  relative">
      <Image
        className="absolute lg:block hidden bottom-2 right-0 animate-spin "
        src={star}
        width={100}
        height={100}
        alt="star"
      />
    <div className="container  sm:py-20 w-[80%]  mb-10 mx-auto flex lg:flex-row flex-col-reverse items-center justify-stretch gap-10 relative bg-black rounded-lg py-[150px] " id="aboutUs">

      <Image
        src={homeelipseright}
        alt="homemobile01"
        width={500}
        height={500}
        className={`absolute bottom-0 `}
      />
      <Image
        src={homeeliipseleft}
        alt="homemobile01"
        width={500}
        height={500}
        className={`absolute top-0 right-0 `}
      />

      <div className="w-full  z-50 pl-10 flex flex-col gap-8 bg-webRed-0 sm:bg-transparent  px-3 py-5 rounded-md text-white lg:mt-0 mt-[250px]">
        <Fade direction="left" cascade >

          <h2 className="capitalize font-bold ">read to get started?</h2>
          <p className="opacity-100">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, nisi?
          </p>

          <Link href={"/"} className="w-full flex justify-center items-center gap-3 group bg-white cursor-pointer text-black  hover:bg-webRed-0 transition-all hover:text-white max-w-[230px]  text-center  py-2 rounded-lg ">
            Download Now
            <Image src={apple} alt="apple" width={25} height={25} className="group-hover:invert" />
          </Link>
        </Fade>
      </div>
      <div className="w-full h-full text-end">
        <div className="relative">
          <Image
            src={blurimage}
            alt="homemobile01"
            width={400}
            height={500}
            className={`max-w-[482px] hidden lg:block animate-scaling w-full absolute top-[150px] sm:top-[150px] left-[10%]`}
          />
        </div>
        <Fade direction="right" triggerOnce cascade>


          <Image
            src={homeabout3}
            alt="about"
            width={500}
            height={300}
            className="max-w-[140px] hidden sm:block md:max-w-[200px] h-auto float-end"
          />
          <Image
            src={homeabout2}
            alt="about"
            width={500}
            height={300}
            className="absolute hidden sm:block right-[1%] top-[10%] max-w-[300px] md:max-w-[400px] h-auto"
          />

        </Fade>
        <Image
          src={homeabout1}
          alt="about"
          width={500}
          height={300}
          className="absolute  animation-skew md:right-[18%]  right-[5%] sm:right-[25%] sm:top-[24%] max-w-[300px] md:max-w-[400px] h-auto"
        />
      </div>
      <Image
        className="absolute invert top-[70%] sm:top-[10%] right-[10%] sm:right-[40%]  animate-spin"
        src={star}
        width={100}
        height={100}
        alt="star"
      />
      <Image
        className="absolute invert top-[100%] sm:top-[70%] right-[10%] sm:right-[50%]  animate-spin"
        src={star}
        width={60}
        height={100}
        alt="star"
      />


    </div>

    </div>
  );
};

export default GetStarted;
