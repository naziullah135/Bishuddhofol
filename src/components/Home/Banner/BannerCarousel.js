import { Typography } from '@material-ui/core';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const BannerCarousel = ({ bannerItems }) => {
    return (
        <Carousel
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
        >
            {
                bannerItems.map(({ img }) =>
                    <div>
                        <img src={img} alt="" />
                        {/* <Typography color="primary" style={{ paddingTop: 10, fontWeight: 600 }} variant="h5">{pageName}</Typography> */}
                    </div>)
            }
        </Carousel>
    );
};

export default BannerCarousel;