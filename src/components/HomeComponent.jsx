import React, { useEffect, useState } from "react";
import CustomButton from "./generals/CustomButton";
import Image from "next/image";
import {
  blurimage,
  elipses,
  homemobile01,
  homemobile02,
  homemobile03,
  player,
  star,
} from "@/assets";
import Ribbon from "./Ribbon";

const HomeComponent = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [moveDistance, setMoveDistance] = useState(800);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMoveDistance(window.innerWidth <= 640 ? 150 : 600);
      setMaxScroll(document.body.clientHeight - window.innerHeight);
    }
  }, []);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const scrollPercentage = (scrollY / maxScroll) * 100;

  const isSmallScreen = typeof window !== 'undefined' && window.innerWidth <= 640;

  const translateY = scrollPercentage >= 15 
    ? isSmallScreen 
      ? Math.min(moveDistance, scrollPercentage * 10)
      : Math.min(-moveDistance, scrollPercentage * 10) 
    : 0;

  const mobileImageStyle = {
    transform: `translateY(${translateY}px)`,
    transition: 'transform 1s ease-in-out',
  };

  return (
    <div className='text-black w-full px-3 sm:px-0 h-full sm:h-screen flex flex-wrap sm:pt-[5%] md:flex-nowrap justify-between items-center container sm:max-w-[80%] mx-auto ' id='home'>

      <Image
        className="absolute animate-spin right-[7%] sm:right-[10%] sm:top-[13%] top-[9%]"
        src={star}
        width={100}
        height={100}
        alt="star"
      />
      <Image
        className="absolute animate-spin top-[10%]"
        src={star}
        width={60}
        height={60}
        alt="star"
      />

      <div className="flex flex-col text-center sm:text-start w-full gap-5 justify-center items-center h-screen">

        <div className=" hidden lg:block -z-[10]">
          <Image
            src={blurimage}
            alt="homemobile01"
            width={500}
            height={500}
            className={`absolute animate-scaling2 top-40 left-0 bottom-0 right-0 sm:top-20 sm:left-[15%]`}
          />
        </div>
        <h1 className="capitalize font-extrabold">
          make the best financial decisions
        </h1>
        <p>
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
        <div className="w-full flex justify-center  scale-75 sm:scale-100  items-center gap-5">
          <CustomButton text={"Get Started"} to={"/"} />
          <div className="cursor-pointer w-full flex justify-start items-center gap-5 max-w-[160px]">
            <Image src={player} alt="player_icon" width={30} height={30} />
            <p className="whitespace-nowrap text-black opacity-100 font-bold">Watch Video</p>
          </div>
        </div>

        <Ribbon/>

      </div>

      <div className="w-full mr-10 responsive -mt-[90%] 2xl:-mt-[0%] sm:-mt-[20%]  sm:mb-[50%] sm:max-w-[40%] relative">
        <Image
          className="absolute   top-[500px] animate-spin "
          src={star}
          width={70}
          height={70}
          alt="star"
        />
        <div className="relative ">
          <Image
            src={elipses}
            alt="homemobile01"
            width={500}
            height={500}
            className={`absolute  top-20 left-[15%] ${isHovered ? "transform skew-x-12 transition-all ease-in-out" : ""}`}
          />
        </div>
        <div className="relative">
          <Image
            src={blurimage}
            alt="homemobile01"
            width={1000}
            height={500}
            className={`max-w-[500px] animate-scaling w-full absolute top-[200px] sm:top-[300px] left-[15%]`}
          />
        </div>

        <div className="w-full" style={mobileImageStyle}>

        <div className="mobileAnimation" >
          <Image
            src={homemobile01}
            alt="homemobile01"
            className="absolute top-0 left-0 !z-30 "
            style={{ transform: 'translateX(100%)', animation: 'slideFromRight 1s forwards ' }}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          />
        </div>
        <div className="mobileAnimation" >
          <Image
            src={homemobile02}
            alt="homemobile02"
            className="absolute top-20 left-[20%] z-20"
            style={{ transform: 'translateX(100%)', animation: 'slideFromRight 1s forwards 0.5s' }}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          />
        </div>
        <div className="mobileAnimation" >
          <Image
            src={homemobile03}
            alt="homemobile03"
            className="absolute top-24 left-[30%] z-10"
            style={{ transform: 'translateX(100%)', animation: 'slideFromRight 1s forwards 0.8s' }}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          />
        </div>
        </div>

      </div>
    </div>
  );
};

export default HomeComponent;
