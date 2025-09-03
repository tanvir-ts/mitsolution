import Course from "@/components/course";
import Admission from "@/components/addmisstion";
import CourseCard from "@/components/coursecard";
import OfficeCourse from "@/components/officecourse";
import GraphicDesign from "@/components/graphicdesign";
import WebDevelopment from "@/components/webdevelopment";
import DigitalMarketing from "@/components/digitalmarketing";
import ComputerHardware from "@/components/computerhardware";
import Animation from "@/components/Animation";
import SpokeEnglish from "@/components/SpokeEnglish";
import VideoEditing from "@/components/VideoEditing";
import AutoCAD from "@/components/AutoCAD";
import ComputerSellsService from "@/components/ComputerSellsService";

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
        <ComputerSellsService />
       </main> 
    )
}