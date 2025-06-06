import Image from "next/image";
import Header from "./components/Header";
import Homepage from "./components/Homepage";

export default function Home() {
  return (
  <div id="homepage" className="flex flex-col min-h-screen">
    <Header />
    <Homepage />
   
  </div>
  );
}
