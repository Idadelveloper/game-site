import { HStack, Switch, Text } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";

const ColorModeSwitch = () => {
  return (
    <HStack>
      <Switch.Root
        size={"md"}
        colorPalette="green"
        checked={useColorMode().colorMode === "dark"}
        onChange={useColorMode().toggleColorMode}
      >
        <Switch.HiddenInput />
        <Switch.Control />
        <Switch.Label />
      </Switch.Root>
      <Text whiteSpace="nowrap">
        {useColorMode().colorMode === "dark" ? "Dark Mode" : "Light Mode"}
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
