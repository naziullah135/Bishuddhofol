import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import SingleFruit from "./SingleFruit";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import axios from "axios";

const Shop = () => {
  const [fruits, setFruits] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/fruits')
      .then(res => {
        setFruits(res.data)
      })
  }, [])
  return (
    <section id="shop" style={{ marginBottom: 50 }}>
      <Container>
        <SectionTitle title="SHOP" slogan="Best Organic Fruits" />
        <Grid container spacing={2} justify="center">
          {fruits.map((foodItem) => (
            <Grid item key={foodItem.id} lg={3} md={4} sm={6} xs={6}>
              <SingleFruit foodItem={foodItem} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Shop;
