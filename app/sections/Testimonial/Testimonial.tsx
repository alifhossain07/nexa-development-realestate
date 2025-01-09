import React from "react";
import Marquee from "react-fast-marquee";
import { Card } from "flowbite-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Ethan Mitchell",
    position: "Real Estate Agent",
    testimony:
      "Nexa Development's properties offer exceptional value. The attention to detail and quality are unmatched.",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Sophia Taylor",
    position: "Interior Designer",
    testimony:
      "The apartments at Nexa Skyline are a dream! Perfect blend of modern design and functionality.",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Liam Johnson",
    position: "Property Investor",
    testimony:
      "Nexa's developments offer great investment opportunities. The properties are well-located and built to last.",
    image: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "Olivia Brown",
    position: "Homebuyer",
    testimony:
      "I am so happy with my new home at Nexa Skyline! The community amenities are just perfect for my family.",
    image: "https://i.pravatar.cc/100?img=4",
  },
  {
    name: "Michael Wilson",
    position: "Architect",
    testimony:
      "The design of Nexa Skyline is top-notch. They really focus on creating a livable, sustainable environment.",
    image: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Emma Thompson",
    position: "CEO of Urban Development Inc.",
    testimony:
      "Working with Nexa Development has been an absolute pleasure. Their professionalism and expertise are evident in every project.",
    image: "https://i.pravatar.cc/100?img=6",
  },
];

const Testimonial = () => {
  return (
    <div className="w-11/12 mx-auto py-20">
      <h1 className="lg:text-3xl text-xl font-title text-center  uppercase tracking-wider font-bold  ">
      Success Stories: <span className="text-green-400">Our Clients’ Journeys
      </span></h1> 
      <p className="text-xl text-center font-text mt-8 mb-20">Our clients share how Nexa Developments expertise and care made a lasting impact on their living experience.</p>

      {/* Marquee Slider */}
      <Marquee speed={60} pauseOnHover={false} gradient={true} gradientWidth={100}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex-shrink-0 w-96 mx-2"> {/* Reduced horizontal margin */}
            <Card className="shadow-lg p-10 h-80 flex flex-col justify-between border border-green-600"> {/* Set fixed height with green border */}
              <div className="flex flex-col flex-grow "> {/* Center alignment */}
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}  // Image width
                  height={80} // Image height
                  className="rounded-full mb-4 shadow-md"
                />
                <p className="font-para mb-4 text-gray-700 flex-grow"> {/* Added flex-grow for even spacing */}
                  {testimonial.testimony}
                </p>
              </div>
              <div className="">
                <h3 className="font-title font-bold text-lg text-green-600">{testimonial.name}</h3>
                <span className="font-para text-green-700">{testimonial.position}</span>
              </div>
            </Card>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Testimonial;
