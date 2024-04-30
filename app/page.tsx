import Advertising from "./components/Advertising";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import IconContactFinish from "./components/IconContactFinish";
import Landscape from "./components/Landscape";
import Panel from "./components/Panel";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner/>
      <Landscape/>
      <Advertising/>
      <Panel />
      <Gallery />
      <Contact />
      <IconContactFinish/>
    </div>
 
  )
}