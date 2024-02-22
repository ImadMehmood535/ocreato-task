import { ribbonicon1, ribbonicon2, star } from "@/assets";
import Image from "next/image";
import React, { useEffect } from "react";
import { Fade } from "react-awesome-reveal";

export const Ribbon = () => {

  useEffect(() => {


    const timer = setTimeout(() => {
      const ribbon = document.querySelector('.ribbon');
      if (ribbon) {
        ribbon.classList.add('active');
      }
    }, 500);



    return () => clearTimeout(timer);
  }, []);



  return (
    <>
      <div className="ribbon hidden md:block mr-auto  " >
        <div className="medallion"></div>
        <div className="ribbon-2">
          <span className="inner">
            <span className="fadeRight">
              <div className="row">
                <div className="col-6">
                  <div className="icon-box">
                    <div className="img-area">
                      <Image
                        src={ribbonicon1}
                        alt="homemobile02"
                        width={500}
                        height={500}
                        className="w-full"

                      />
                    </div>
                    <div className="content-area ">
                      <p className=" opacity-100 capitalize text-[10px] whitespace-nowrap">achievements</p>
                      <p className="second-text opacity-100 capitalize text-[10px] whitespace-nowrap">best finance app on playstore</p>
                    </div>
                  </div>
                </div>
                <div className="px-3 col-6">
                  <div className="icon-box">
                    <div className="img-area">
                      <Image
                        src={ribbonicon2}
                        alt="homemobile02"
                        width={500}
                        height={500}
                        className="w-full"

                      />
                    </div>
                    <div className="content-area opacity-100">
                      <p className="first-text capitalize text-[10px] whitespace-nowrap opacity-100">finance</p>
                      <p className="second-text capitalize text-[10px] whitespace-nowrap opacity-100">most popular accounting app</p>
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </span>
        </div>

        <div className="ribbon-3 ">
          <span className="inner curve">
            <span className="fadeRight"> <div className="row">
              <div className="col-12">
                <div className="icon-box">
                  <div className="img-area flex justify-end">
                    <Image
                      src={star}
                      alt="homemobile02"
                      width={500}
                      height={500}
                      className="w-full "
                    />
                  </div>
                  <div className="content-area">
                    <p className="first-text opacity-100">Uifry Premium</p>
                    <p className="second-text opacity-100">free trial</p>
                  </div>
                </div>
              </div>

            </div></span>
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2  md:hidden">
        <Fade direction="left" >
      <div className="bg-black p-6 rounded-3xl">
        <div className="flex justify-center items-center gap-4">

          <div className="flex justify-center items-center gap-2">

            <Image
              src={ribbonicon1}
              alt="homemobile02"
              width={50}
              height={20}

            />
            <div className="flex flex-col text-white  justify-start items-start">
              <p className=" opacity-100 capitalize text-[10px] text-start">achievements</p>
              <p className="opacity-100 capitalize text-[10px] text-start">best finance app on playstore</p>

            </div>

          </div>
          <div className="flex justify-center items-center gap-2">

            <Image
              src={ribbonicon2}
              alt="homemobile02"
              width={50}
              height={20}

            />
            <div className="flex flex-col text-white  justify-start items-start">
              <p className=" opacity-100 capitalize text-[10px] text-start">Finance</p>
              <p className="opacity-100 capitalize text-[10px] text-start">Most Popular Accounting App</p>

            </div>

          </div>

        </div>
        <div className="content-area ">
        </div>
      </div>
      </Fade>
      <Fade direction="left" delay={300} >

      <div className=" bg-[#e54a4a] p-4 rounded-3xl ">
        <p className="text-center opacity-100 capitalize">make the best financial decisions</p>

      </div>
      </Fade>
      <Fade direction="left" delay={500} >

      <div className="bg-webRed-0 p-2 flex justify-center rounded-3xl  items-center gap-5">
        <Image src={star} alt="star" width={50} height={50} />
        <p className="text-center opacity-100 capitalize">Uifry Premium free trial</p>

      </div>
</Fade>

      </div>



    </>
  );
};
export default Ribbon;
