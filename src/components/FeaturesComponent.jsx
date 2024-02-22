import { useEffect, useState } from 'react';
import { blurimage, elipses, featuremobile, star } from '@/assets';
import { featuresData } from '@/data/features';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

const FeaturesComponent = () => {
    const [scrollY, setScrollY] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const moveDistance = windowWidth > 640 ? 400 : 200;

    const maxScroll = typeof document !== 'undefined' ? document.body.clientHeight - window.innerHeight : 0;
    const scrollPercentage = (scrollY / maxScroll) * 100;

    const translateY = scrollPercentage >= 45 && windowWidth > 640 ? Math.min(moveDistance, scrollPercentage * 8) : 0;

    const mobileImageStyle = {
        transform: `translateY(${translateY}px)`,
        transition: 'transform 1s ease-in-out',
    };

    return (
        <div id='features' className="text-black  py-20 w-full px-3 sm:px-0 mt-[100%] sm:mt-[0%]  flex  sm:flex flex-wrap-reverse sm:flex-nowrap justify-between items-center relative container z-50 sm:max-w-[80%] mx-auto" >
            <Image
                className="absolute lg:block hidden top-20 -left-20 animate-spin "
                src={star}
                width={100}
                height={100}
                alt="star"
            />

            <div className="relative w-full ml-[80px] sm:ml-0 ">
                <div className="relative">
                    <Image src={elipses} alt="featuremobile" width={500} height={500} className="absolute max-w-[600px] circleAnimation  w-full top-0 -left-[17%]  bottom-0 right-0 -z-10" />
                </div>
                <div className="relative">
                    <Image src={blurimage} alt="blurimage" width={1000} height={500} className="max-w-[800px] animate-scaling2 w-full -z-[40] absolute top-[200px] sm:top-[50px] -left-[15%] sm:-left-[20%]" />
                </div>
                <Image src={featuremobile} alt="featuremobile" height={500} width={500} style={mobileImageStyle} />
            </div>

            <div className="flex relative flex-col text-center sm:text-start justify-start items-center sm:items-start gap-10">
                <Image
                    src={blurimage}
                    alt="homemobile01"
                    width={500}
                    height={500}
                    className={`absolute animate-scaling2 left-[60%]`}
                />
                <Fade direction="right">
                    <div className="flex flex-col justify-center items-center sm:items-start   w-full">
                        <p className="text-webRed-0 opacity-100">FEATURES</p>
                        <h2 className="capitalize font-bold">uifry premium</h2>
                    </div>
                </Fade>
                <Fade direction="right" cascade>
                    {featuresData?.map((item, index) => (
                        <div key={index} className="flex flex-col justify-center items-center sm:items-start w-full">
                            <div className="flex justify-start items-center gap-4">
                                <Image src={item.icon} alt="featuresicon" width={20} height={20} />
                                <p className="capitalize font-bold opacity-100">{item.title}</p>
                            </div>
                            <p >{item.description}</p>
                        </div>
                    ))}
                </Fade>
            </div>
        </div>
    );
};

export default FeaturesComponent;
