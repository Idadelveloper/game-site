import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box width="100%" borderRadius={10} overflow="hidden" boxShadow="md">
      {children}
    </Box>
  );
};

export default GameCardContainer;
