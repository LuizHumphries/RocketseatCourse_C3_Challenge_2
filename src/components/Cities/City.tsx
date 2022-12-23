import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function City() {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image />
      <Flex>
        <Heading>Londres</Heading>
        <Text>Reino Unido</Text>
      </Flex>
      <Image />
    </Box>
  );
}
