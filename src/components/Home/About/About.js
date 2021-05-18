import { Container, Grid } from "@material-ui/core";
import img from "../../../images/static.jpg";
import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const About = () => {
  return (
    <section>
      <Container>
        <Grid container>
          <Grid item lg={8} md={8} sm={6} xs={12}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/wf3WqjSBqXM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <img src={img} style={{ width: "100%", height: "auto" }} alt="" />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default About;
