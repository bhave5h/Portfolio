"use client";

import Board from "./board";
import { ContainerScroll } from "./ui/container-scroll-animation";


export function Tab() {
  return (
    <div className="flex flex-col overflow-hidden">
         
      <ContainerScroll titleComponent={<h1 className="text-6xl font-bold text-center">Heyyyyy, Whatsupppp ??</h1>}>
          <Board/>
      </ContainerScroll>
    </div>
  );
}