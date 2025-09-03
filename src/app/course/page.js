import Course from "@/components/Course";
import Admission from "@/components/Admission";
import CourseCard from "@/components/CourseCard";
import OfficeCourse from "@/components/OfficeCourse";
import GraphicDesign from "@/components/GraphicDesign";
import WebDevelopment from "@/components/WebDevelopment";
import DigitalMarketing from "@/components/DigitalMarketing";
import ComputerHardware from "@/components/ComputerHardware";
import Animation from "@/components/Animation";
import SpokeEnglish from "@/components/SpokeEnglish";
import VideoEditing from "@/components/VideoEditing";
import AutoCAD from "@/components/AutoCAD";
import ComputerSellService from "@/components/ComputerSellService";

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
      <ComputerSellService />
    </main>
  );
}
