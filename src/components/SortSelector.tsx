import { Button, Menu, Portal } from "@chakra-ui/react";
import { LuChevronDown } from "react-icons/lu";

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Order by: Relevance <LuChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="relevance">Relevance</Menu.Item>
            <Menu.Item value="date">Date Added</Menu.Item>
            <Menu.Item value="name">Name</Menu.Item>
            <Menu.Item value="release">Release date</Menu.Item>
            <Menu.Item value="poplarity">Popularity</Menu.Item>
            <Menu.Item value="average">Average Rating</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
