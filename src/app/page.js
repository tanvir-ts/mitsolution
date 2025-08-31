import Hello from "@/components/hello";
import Banner from "@/components/Banner";
import Feature from "@/components/feature";
import Stats from "@/components/stats";
import Developer from "@/components/developer";
import Community from "@/components/Community";
import Student from "@/components/student";
import Experience from "@/components/experience";
import FreeSeminar from "@/components/freeseminar";
import Faq from "@/components/faq";
import SkillDevelopment from "@/components/skilldevelopment";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; 
config.autoAddCss = false;

export default function Home() {
  return (
    <>
      <Hello />
      <Banner />
      <Feature />
      <Stats />
      <Developer />
      <Community />
      <Student />
      <Experience />
      <FreeSeminar />
      <Faq />
      <SkillDevelopment />
    </>
  );
}


