"use client";
import { Tab } from "@/components/Tab";
import Noise from "@/components/Noise"
import ClickSpark from "@/components/ClickSpark";
import { SparkControls } from "@/components/SparkControls";
import { useState } from "react";
import HandDrawnNav from "@/components/Navbar";
import Notepad from "@/components/Notepad";
import AnimatedMail from "@/components/AnimatedMail";



export default function Home() {

  const [color] = useState("ffffff");

  return (
     <main className="gochi-hand-regular">
      <div className="bg-[#515151]">

      <HandDrawnNav/>



      <Tab/>

      <ClickSpark color={color} />


      </div>

    </main>
  );
}
