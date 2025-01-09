"use client"
import BannerImage from '@/public/images/banner3.webp';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    return (
        <div
            className="relative bg-cover bg-center h-[1200px] flex items-start justify-center"
            style={{
                backgroundImage: `url(${BannerImage.src})`,
                clipPath: "ellipse(70% 50% at 50% 24%)",
                backgroundAttachment: "fixed",
                backgroundPosition: "center 20%", // 20% from the top, adjust as needed
            }}
        >
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Content positioned at the top */}
            <div className="absolute top-80 w-9/12 mx-auto text-white z-10 text-center px-6">
                {/* Typewriter container with fixed height */}
                <div className='text-6xl tracking-wider mx-auto font-bold font-title h-[100px]'>
                    <Typewriter
                        words={['Your Dream Home, Our Commitment to Quality']}
                        loop={Infinity} // Infinite loop
                        cursor
                        cursorStyle="_"
                        typeSpeed={80} // Speed of typing
                        deleteSpeed={0} // No delete effect, only typing
                        delaySpeed={3000} // Delay before typing starts again
                    />
                </div>

                <p className="mt-10 text-2xl tracking-wide font-text animate-fade-in-up">
                    From land acquisition to sales, we guide you through every step, ensuring  <br />you get the best quality and service in your new home.
                </p>
            </div>
        </div>
    );
};

export default Banner;
