
import Ad from "./sections/Ad/Ad";
import Banner from "./sections/Banner/Banner";
import ChooseUs from "./sections/ChooseUs/ChooseUs";
import Featured from "./sections/Featured/Featured";
import Services from "./sections/Services/Services";
import Testimonial from "./sections/Testimonial/Testimonial";
import SocialSidebar from "./shared/SocialSidebar";


export default function Home() {
  
  return (
    <div>
      <SocialSidebar></SocialSidebar>
      <Banner></Banner>
      <ChooseUs></ChooseUs>
      <Services></Services>
      <Featured></Featured>
      <Testimonial></Testimonial>
      <Ad></Ad>
      {/* <ContactForm></ContactForm> */}
    </div>
  );
}
