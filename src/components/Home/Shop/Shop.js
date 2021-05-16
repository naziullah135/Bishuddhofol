import React from "react";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { cardData } from "../../../Data";
import Counter from "./Counter";

const Shop = () => {
  return (
    <section id="shop">
      <Container>
        <Grid container spacing={3}>
          {cardData.map(({ img, name, price, des }) => (
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Paper>
                <div>
                  <img
                    style={{ width: "100%", height: "350px", objectFit: 'cover' }}
                    src={img}
                    alt=""
                  />
                </div>
                <div style={{ padding: 15, textAlign: 'center' }}>
                  <Typography variant="h4"> {name}</Typography>
                  <p>{des}</p>

                  <Counter price={price} />

                  <Button variant="contained" style={{ background: '#58BC34', color: '#fff', fontWeight: 700 }}>
                    Add to cart
                </Button>
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Shop;
