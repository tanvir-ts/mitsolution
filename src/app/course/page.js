import Course from "@/components/course";
import Admission from "@/components/addmisstion";
import CourseCard from "@/components/coursecard";
import OfficeCourse from "@/components/officecourse";
import GraphicDesign from "@/components/graphicdesign";
import WebDevelopment from "@/components/webdevelopment";
import DigitalMarketing from "@/components/digitalmarketing";
import ComputerHardware from "@/components/computerhardware";
import Animation from "@/components/Animation";
import SpokeEnglish from "@/components/spokeEnglish";
import VideoEditing from "@/components/videoediting";
import AutoCAD from "@/components/autocad";
import ComputerSells from "@/components/computersells&service";

export default function CoursePage  () {
    return(
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
        <ComputerSells />
       </main> 
    )
}