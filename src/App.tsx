import { Flex } from "@radix-ui/themes";
import { useMotionValue } from "framer-motion";
import { MouseEvent, useEffect, useRef, useState } from "react";
import Nav from "./components/Nav";
import GlowMouse from "./components/GlowMouse";
import {basicSetup, EditorView} from "codemirror"


export default function App() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0)
  const [editor,setEditor] = useState<EditorView>(null)

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  const el = useRef<HTMLDivElement>(null)

  const theme = EditorView.theme({
    "&": {
      color: "white",
      backgroundColor: "#000",
      height: "100dvh"
    },
    ".cm-content": {
      caretColor: "#0e9"
    },
    "&.cm-focused .cm-cursor": {
      borderLeftColor: "#0e9"
    },
    "&.cm-focused .cm-selectionBackground, ::selection": {
      backgroundColor: "#000"
    },
    ".cm-gutters": {
      backgroundColor: "#444",
      color: "#ddd",
      border: "none"
    },
    ".cm-scroller": {overflow: "auto"}
  }, {dark: true})

  useEffect(() => {
    if(editor === null) {
      const view = new EditorView({
        doc: "Welcome to Sur Editor",
        parent: el.current!,
        extensions: [
          basicSetup,
          theme,
        ]
      })
      setEditor(view)
    }
  },[editor])
  


  return (
    <div
      className="group relative flex bg-grayA-12 h-screen w-screen text-bronze-3 font-light font-sans line-clamp-none text-4 -tracking-9 leading-6"
      onMouseMove={handleMouseMove}
    >
      <Flex className="flex-row w-full">
        <Nav />
        <div className="w-full h-full bg-black col m-0" ref={el}>
          <GlowMouse mx={mouseX} my={mouseY}/>
          {/* <div className="flex items-center gap-x-2">
            <Heading className="font-bold tracking-tight text-bronze-3">
              Hello
            </Heading>
          </div>
          <p className="mt-4">
            This is a minimal, browser-based text editor for people who are looking
            for a minimalistic place to write their thoughts on the internet, uninterrupted.
          </p> */}
        </div>
      </Flex>
    </div>
  );
}
