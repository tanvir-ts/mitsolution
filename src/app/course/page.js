import Course from "@/components/course";
import Admission from "@/components/admission";
import CourseCard from "@/components/coursecard";
import OfficeCourse from "@/components/officecourse";
import GraphicDesign from "@/components/graphicdesign";
import WebDevelopment from "@/components/webdevelopment";
import DigitalMarketing from "@/components/digitalmarketing";
import ComputerHardware from "@/components/computerhardware";
import Animation from "@/components/animation";
import SpokeEnglish from "@/components/spokeenglish";
import VideoEditing from "@/components/videoediting";
import AutoCAD from "@/components/autocad";
import ComputerSellsService from "@/components/computersellsservice"; 

export default function CoursePage() {
  return (
    <main>
      <Course />
      <Admission />
      <CourseCard />
      <OfficeCourse />
      <GraphicDesign />
      <WebDevelopment />
      <DigitalMarketing />
      <ComputerHardware />
      <Animation />
      <SpokeEnglish />
      <VideoEditing />
      <AutoCAD />
      <ComputerSellsService />
    </main>
  );
}
