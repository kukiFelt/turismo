import Advertising from "./components/Advertising";
import Banner from "./components/Banner";
import Header from "./components/Header";
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
    </div>
 
  )
}