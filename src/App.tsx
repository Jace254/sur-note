import { Flex } from "@radix-ui/themes";
import Nav from "./components/Nav";

export default function App() {
  return (
    <div className="bg-gray-12 w-screen h-screen">
      <Flex className="flex-col w-full">
        <Nav/>
        <section className="py-6 px-12">
          <textarea className="text-brown-1 w-full bg-transparent caret-accent-5 h-auto border-none outline-none resize-none"></textarea>
        </section>
      </Flex>
    </div>
  );
}
