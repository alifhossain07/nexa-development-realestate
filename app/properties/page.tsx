import GoogleMapEmbed from "./sections/GoogleMapEmbedd/GoogleMapEmbed";
import NexaViews from "./sections/NexaViews/NexaViews";
import ProjectOverview from "./sections/ProjectOverview/ProjectOverview";
import PropertyBanner from "./sections/PropertyBanner/PropertyBanner";
import Specs from "./sections/Specs/Specs";
import TermsConditions from './sections/TermsConditions/TermsConditions';

export default function Property() {
  
  return (
    <div>
     <PropertyBanner></PropertyBanner>
     <ProjectOverview></ProjectOverview>
     <Specs></Specs>
     <NexaViews></NexaViews>
     <GoogleMapEmbed></GoogleMapEmbed>
     <TermsConditions></TermsConditions>
     
    </div>
  );
}
