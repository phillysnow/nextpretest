import React from "react";
import {
  Navbar,
  Hero,
  Cta,
  Faq,
  Features,
  Footer,
  Generic,
  Signup,
  SocialIcons,
} from ".";

const SliceZone = ({ sliceZone }) => (
  <div>
    {sliceZone.map((slice, index) => {
      // console.log("slice type", slice.slice_type);
      switch (slice.slice_type) {
        // case "nav_elements":
        //   return <Navbar slice={slice} key={`slice-${index}`} />;
        case "hero_slice":
          return <Hero slice={slice} key={`slice-${index}`} />;
        case "cta_slice":
          return <Cta slice={slice} key={`slice-${index}`} />;
        case "faq_slice":
          return <Faq slice={slice} key={`slice-${index}`} />;
        case "features_slice":
          return <Features slice={slice} key={`slice-${index}`} />;
        case "footer_slice":
          return <Footer slice={slice} key={`slice-${index}`} />;
        case "footer_social_icons":
          return <SocialIcons slice={slice} key={`slice-${index}`} />;
        case "generic_slice":
          return <Generic slice={slice} key={`slice-${index}`} />;
        case "signup":
          return <Signup slice={slice} key={`slice-${index}`} />;
        default:
          return null;
      }
    })}
  </div>
);

export default SliceZone;
