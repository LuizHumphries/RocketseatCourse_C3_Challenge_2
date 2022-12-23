import { Grid, GridItem } from "@chakra-ui/react";
import Caracteristic from "./Caracteristic";

export default function CountryCaracteristics() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160px"
      gap={[1, 5]}
    >
      <GridItem>
        <Caracteristic icon="/cocktail.svg" text="vida noturna"></Caracteristic>
      </GridItem>
      <GridItem>
        <Caracteristic icon="/surf.svg" text="praia"></Caracteristic>
      </GridItem>
      <GridItem>
        <Caracteristic icon="/building.svg" text="moderno"></Caracteristic>
      </GridItem>
      <GridItem>
        <Caracteristic icon="/museum.svg" text="clássico"></Caracteristic>
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Caracteristic icon="/earth.svg" text="e mais..."></Caracteristic>
      </GridItem>
    </Grid>
  );
}
