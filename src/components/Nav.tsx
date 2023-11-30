import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Flex, IconButton, Link } from "@radix-ui/themes";
import { CSSProperties } from "react";


export default function Nav() {
  return (
    <Flex style={
        {
          "--background": "var(--gray-12)",
          "--highlight": "255 255 255",

          "--bg-color":
            "linear-gradient(var(--background), var(--background))",
          "--border-color": `linear-gradient(90deg,
            rgb(var(--highlight) / 0.001) 0%,
            rgb(var(--highlight) / 0.5) 33.33%,
            rgb(var(--highlight) / 0.6) 66.67%,
            rgb(var(--highlight) / 0.001) 100%)
          `,
        } as CSSProperties
      }
      className=" py-4 px-3 items-center row justify-between w-full border-b-2 border-transparent [background:padding-box_var(--bg-color),border-box_var(--border-color)]">
      <Link className="font-mono text-brown-1 text-xl" href="/">Sur Editor</Link>
      <IconButton variant="soft" color="orange">
        <GitHubLogoIcon width="18" height="18" />
      </IconButton>
    </Flex>
  );
}
