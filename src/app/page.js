import Banner from "@/components/Banner";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; 
config.autoAddCss = false;

export default function Home() {
  return (
    <>
      <Banner />
    </>
  );
}


