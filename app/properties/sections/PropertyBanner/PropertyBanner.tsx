import React from 'react';
import PropertyBannerImage from "@/public/images/propertyBanner.webp";
const PropertyBanner = () => {
    return (
        <div  className="relative bg-cover bg-center h-[900px]  flex items-start justify-center  transition-opacity duration-300"
        style={{
          backgroundImage: `url(${PropertyBannerImage.src})`,
          
          
          backgroundPosition: "center 40%", // 20% from the top, adjust as needed
        }}>
            
        </div>
    );
};

export default PropertyBanner;
 
