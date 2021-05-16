import React from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { cardData } from "../../Data";

const Shop = () => {
  return (
    <section>
      <Container>
        <Grid container spacing={3}>
          {cardData.map(({ img, name, price, des }) => (
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Paper>
                <div>
                  <img
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    src={img}
                    alt=""
                  />
                </div>
                <div>
                  <h3>{name}</h3>
                  <p>{des}</p>
                  <h3>{price}</h3>
                </div>
                <Button variant="contained" color="secondary">
                  Add to cart
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Shop;
