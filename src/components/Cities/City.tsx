import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface CityProps {
  cityname: string;
  countryname: string;
  cityphoto: string;
  countryflag: string;
}

export default function City({
  cityname,
  countryname,
  cityphoto,
  countryflag,
}: CityProps) {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image src={cityphoto} h="170px" w="100%" />
      <Flex
        p="6"
        align="center"
        bg="white"
        justify="space-between"
        border="1px"
        borderColor="yellow.300"
        borderTop="0"
      >
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">
            {cityname}
          </Heading>
          <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">
            {countryname}
          </Text>
        </Flex>
        <Image src={countryflag} />
      </Flex>
    </Box>
  );
}
