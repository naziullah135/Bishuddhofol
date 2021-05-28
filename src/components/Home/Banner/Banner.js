import React from 'react';
import BannerCarousel from './BannerCarousel';
import useStyles from './BannerStyle';
import banner1 from '../../../images/banner/banner-1.jpg'
import banner2 from '../../../images/banner/banner-2.jpg'
import bgVideo from '../../../images/banner/moja.mkv'
import { Container } from '@material-ui/core';
const bannerItems = [
    { img: banner1, },
    { img: banner2, },
]
const Banner = () => {
    const { root } = useStyles();
    return (
        <Container>
            <div style={{ height: '45vh', objectFit: 'cover', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {/* <video
                    autoPlay
                    loop
                    muted
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: -1
                    }}
                >
                    <source src={bgVideo} type="video/mp4" />
                </video> */}
                <BannerCarousel bannerItems={bannerItems} />
            </div>
        </Container>
    );
};

export default Banner;