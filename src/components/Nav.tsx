import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Flex, Text, IconButton } from "@radix-ui/themes";

export default function Nav() {
  return (
    <Flex className=" py-4 px-3 items-center row justify-between w-full border-b border-gray-11 border-opacity-50">
      <Text className="font-medium text-brown-1 text-xl">Sur Editor</Text>
      <IconButton variant="soft" color="orange">
        <GitHubLogoIcon width="18" height="18" />
      </IconButton>
    </Flex>
  );
}
