import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Flex, IconButton, Link } from "@radix-ui/themes";
import { CSSProperties } from "react";

export default function Nav() {
  return (
    <Flex
      style={
        {
          "--background": "var(--gray-12)",
          "--highlight": "255 255 255",

          "--bg-color": "linear-gradient(var(--background), var(--background))",
          "--border-color": `linear-gradient(180deg,
            rgb(var(--highlight) / 0.001) 0%,
            rgb(var(--highlight) / 0.5) 33.33%,
            rgb(var(--highlight) / 0.6) 66.67%,
            rgb(var(--highlight) / 0.001) 100%)
          `,
        } as CSSProperties
      }
      className=" py-4 px-3 items-center flex-col justify-between sm:border-r-1 sm:border-transparent sm:[background:padding-box_var(--bg-color),border-box_var(--border-color)] border-gray-11 border-r w-auto"
    >
      <Link className="font-mono text-brown-1 text-xl" href="/">
        Sur
      </Link>

      <IconButton variant="soft" color="orange" asChild>
        <a href="https://github.com/Jace254/sur-note" target="_blank">
          <GitHubLogoIcon width="18" height="18" />
        </a>
      </IconButton>
    </Flex>
  );
}
