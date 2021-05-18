import React from "react";
import { Container, Grid } from "@material-ui/core";
import { cardData } from "../../../Data";
import SingleFruit from "./SingleFruit";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Shop = () => {
  return (
    <section id="shop">
      <Container>
        <SectionTitle text="SHOP" />
        <Grid container spacing={5} justify="center">
          {cardData.map((foodItem) => (
            <Grid item key={foodItem.id} lg={4} md={4} sm={6} xs={12}>
              <SingleFruit foodItem={foodItem} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Shop;
