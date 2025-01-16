import NexaViews from "./sections/NexaViews/NexaViews";
import ProjectOverview from "./sections/ProjectOverview/ProjectOverview";
import PropertyBanner from "./sections/PropertyBanner/PropertyBanner";
import Specs from "./sections/Specs/Specs";

export default function Property() {
  
  return (
    <div>
     <PropertyBanner></PropertyBanner>
     <ProjectOverview></ProjectOverview>
     <Specs></Specs>
     <NexaViews></NexaViews>
     
    </div>
  );
}
