import Image from "next/image";
import Header from "./components/Header";
import Homepage from "./components/Homepage";

import Aboutpage from "./components/Aboutpage";

export default function Home() {
  return (
  <div id="homepage" className="flex flex-col">
    <Header />
    <Homepage />
   
  </div>
  );
}
