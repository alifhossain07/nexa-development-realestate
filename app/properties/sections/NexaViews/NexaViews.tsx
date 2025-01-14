import NexaViews1 from "@/public/images/NexaViews2.webp";

const NexaViews = () => {
  return (
    <div>
      <div
        className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] xl:h-[700px] bg-cover bg-center"
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
