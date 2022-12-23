import { Grid, Heading } from "@chakra-ui/react";
import City from "./City";

export default function Cities() {
  return (
    <>
      <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10">
        Cidades +100
      </Heading>
      <Grid
        templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4,1fr)"]}
        gap={["20px", "45px"]}
        alignItems="center"
        justifyContent="center"
        px={["30px", "0"]}
      >
        <City
          cityname="Londres"
          countryname="Reino Unido"
          cityphoto="/londoncard.jpg"
          countryflag="/londonflag.png"
        />
        <City
          cityname="Paris"
          countryname="França"
          cityphoto="/paris.jpg"
          countryflag="/franceflag.png"
        />
        <City
          cityname="Roma"
          countryname="Itália"
          cityphoto="/rome.jpg"
          countryflag="/italyflag.png"
        />
        <City
          cityname="Praga"
          countryname="República Tcheca"
          cityphoto="/prague.jpg"
          countryflag="/tcheck.png"
        />
        <City
          cityname="Amsterdã"
          countryname="Holanda"
          cityphoto="/amsterdan.jpg"
          countryflag="/holandflag.png"
        />
      </Grid>
    </>
  );
}
