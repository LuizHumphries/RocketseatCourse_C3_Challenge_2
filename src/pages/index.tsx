import { Flex, Heading } from "@chakra-ui/react";
import Banner from "../components/Banner";
import CountryCaracteristics from "../components/CountryCaracteristics";
import Header from "../components/Header";
import Separator from "../components/Separator";
import SliderContinent from "../components/SliderContinent";

export default function Home() {
  return (
    <Flex flexDir="column">
      <Header />
      <Banner />
      <CountryCaracteristics />
      <Separator />
      <Heading
        color="gray.600"
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>
      <SliderContinent />
    </Flex>
  );
}
