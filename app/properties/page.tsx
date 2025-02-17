import SocialSidebar from "../shared/SocialSidebar";
import GoogleMapEmbed from "./sections/GoogleMapEmbedd/GoogleMapEmbed";
import NexaViews from "./sections/NexaViews/NexaViews";
import ProjectOverview from "./sections/ProjectOverview/ProjectOverview";
import PropertyBanner from "./sections/PropertyBanner/PropertyBanner";
import Specs from "./sections/Specs/Specs";
import SpecsMobileVersion from "./sections/SpecsMobileVersion/SpecsMobileVersion";

import TermsConditions from './sections/TermsConditions/TermsConditions';

export default function Property() {
  
  return (
    <div>
      <SocialSidebar></SocialSidebar>
     <PropertyBanner></PropertyBanner>
     <ProjectOverview></ProjectOverview>
     <Specs></Specs>
     <SpecsMobileVersion></SpecsMobileVersion>
     <NexaViews></NexaViews>
     <GoogleMapEmbed></GoogleMapEmbed>
     <TermsConditions></TermsConditions>
     
    </div>
  );
}
