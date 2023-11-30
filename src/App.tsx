import { Flex, Heading } from "@radix-ui/themes";
import Nav from "./components/Nav";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

export default function App() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

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
      <Flex className="flex-col w-full sm:max-w-[460px]">
        <motion.div
          className="hidden sm:block pointer-events-none absolute max-w-full max-h-full -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 70%
            )
          `,
          }}
        />
        <Nav />
        <div className=" py-3 px-4">
          <div className="mt-2 flex items-center gap-x-2">
            <Heading className="font-bold tracking-tight text-bronze-6">
              Hello
            </Heading>
          </div>
          <p className="mt-6 text-base leading-7 font-sans line-clamp-none">
            This is a minimal, browser-based text editor for people who are looking
            for a minimalistic place to write their thouights on the internet, uninterrupted.
          </p>
        </div>
      </Flex>
    </div>
  );
}
