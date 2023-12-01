import { Flex, Heading } from "@radix-ui/themes";
import { useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import Nav from "./components/Nav";
import GlowMouse from "./components/GlowMouse";
import Plum from "./components/Plum";

export default function App() {

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  
  return (
    <div
      className="group relative flex bg-gray-12  justify-center h-screen w-screen text-bronze-7"
      onMouseMove={handleMouseMove}
    >
      <Plum/>
      <GlowMouse mx={mouseX} my={mouseY}/>
      <Flex className="flex-col w-full sm:max-w-[460px]">
        <Nav />
        <div className=" py-3 px-4">
          <div className="mt-2 flex items-center gap-x-2">
            <Heading className="font-bold tracking-tight text-bronze-6">
              Hello
            </Heading>
          </div>
          <p className="mt-6 text-base leading-7 font-sans line-clamp-none text-4">
            This is a minimal, browser-based text editor for people who are looking
            for a minimalistic place to write their thoughts on the internet, uninterrupted.
          </p>
        </div>
      </Flex>
    </div>
  );
}
