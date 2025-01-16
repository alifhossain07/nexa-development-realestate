import NexaViews1 from "@/public/images/NexaView3.webp";

const NexaViews = () => {
  return (
    <div>
      <div
        className="w-full md:h-[700px] lg:h-[800px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${NexaViews1.src})`,
          backgroundRepeat: "no-repeat", // Ensures the background doesn't repeat
          backgroundPosition: "center",  // Keeps the image centered
        }}
      ></div>
    </div>
  );
};

export default NexaViews;
