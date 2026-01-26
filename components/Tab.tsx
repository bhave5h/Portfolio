"use client";

import Board from "./board";
import { ContainerScroll } from "./ui/container-scroll-animation";


export function Tab() {
  return (
    <div className="flex flex-col overflow-hidden">
         
      <ContainerScroll titleComponent={<h1 className="text-7xl font-bold text-center">Scroll Animation</h1>}>
          <Board/>
          <img
          src={`/images/a.png`}
          alt="hero"
          width={1000}
          className="mx-auto rounded-2xl object-cover"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}