import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Flex, IconButton, Link } from "@radix-ui/themes";

export default function Nav() {
  return (
    <Flex
      className=" py-4 px-3 items-center flex-col justify-between  border-gray-11 border-r w-auto"
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
