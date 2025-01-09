import Banner from "./sections/Banner/Banner";
import ChooseUs from "./sections/ChooseUs/ChooseUs";
import Featured from "./sections/Featured/Featured";
import Services from "./sections/Services/Services";
import Testimonial from "./sections/Testimonial/Testimonial";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <ChooseUs></ChooseUs>
      <Services></Services>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  );
}
