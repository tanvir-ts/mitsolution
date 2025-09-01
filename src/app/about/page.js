import About from "@/components/about";
import Experience from "@/components/experience";
import Stats from "@/components/stats";
import Prominet from "@/components/prominet";
import Infrastructure from "@/components/Infrastructure";
import Director from "@/components/director";
import Instructor from "@/components/instructor";

export default function AboutPage() {
    return (
        <main>
            <About />
            <Experience />
            <Stats />
            <Prominet />
            <Infrastructure />
            <Director />
            <Instructor />
        </main>
    )
}