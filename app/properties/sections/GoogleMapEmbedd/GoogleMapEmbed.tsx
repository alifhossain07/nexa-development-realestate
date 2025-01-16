import React from "react";

const GoogleMapEmbed = () => {
  return (
    <section className="py-24 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-center font-title mb-20 tracking-wider uppercase text-3xl font-bold  ">
          Find Us on <span className='text-green-500'>Google Map</span> 
        </h2>
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.2327024138397!2d90.34611741742688!3d23.75724682092849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf007f823b91%3A0x3a477de43d0221d6!2sNEXA%20SKYLINE!5e0!3m2!1sen!2sbd!4v1737013797014!5m2!1sen!2sbd"
            width="100%" // Adjust the width to be a medium portion
            height="550"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
        <p className="text-center font-text text-xl text-gray-700 mt-4">
          House: 95, Road: 13, Nabinagar Housing, Mohammadpur, Dhaka- 1207
        </p>
      </div>
    </section>
  );
};

export default GoogleMapEmbed;
