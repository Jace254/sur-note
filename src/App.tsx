import { Flex, Heading } from "@radix-ui/themes";
import { useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import Nav from "./components/Nav";
import GlowMouse from "./components/GlowMouse";

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
      className="group relative flex bg-grayA-12 h-screen w-screen text-bronze-3 font-light font-sans line-clamp-none text-4 -tracking-9 leading-6"
      onMouseMove={handleMouseMove}
    >
      <Flex className="flex-row w-full">
        <Nav />
        <div className=" py-5 px-4 sm: max-w-[460px] col m-auto mt-0">
          <GlowMouse mx={mouseX} my={mouseY}/>
          <div className="flex items-center gap-x-2">
            <Heading className="font-bold tracking-tight text-bronze-3">
              Hello
            </Heading>
          </div>
          <p className="mt-4">
            This is a minimal, browser-based text editor for people who are looking
            for a minimalistic place to write their thoughts on the internet, uninterrupted.
          </p>
        </div>
      </Flex>
    </div>
  );
}
