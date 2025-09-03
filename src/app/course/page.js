import Course from "@/components/course";
import Admission from "@/components/admission";
import CourseGrid from "@/components/coursegrid";
import OfficeCourse from "@/components/officecourse";
import GraphicMultimedia from "@/components/graphicmultimedia";
import WebSoftware from "@/components/websoftware";
import DigitalMarketing from "@/components/digitalmarketing";
import ComputerHardware from "@/components/computerhardware";
import Animation3D from "@/components/animation3d";
import SpokenEnglish from "@/components/spokenenglish";
import VideoEditing from "@/components/videoediting";
import AutoCAD from "@/components/autocad";
import ComputerSellService from "@/components/computersellservice";


export default function CoursePage() {
  return (
    <>
      <Course />
      <Admission />
      <CourseGrid />
      <OfficeCourse />
      <GraphicMultimedia />
      <WebSoftware /> 
      <DigitalMarketing />
      <ComputerHardware />
      <Animation3D />
      <SpokenEnglish />
      <VideoEditing />
      <AutoCAD />
      <ComputerSellService />
    </>
  );
}
