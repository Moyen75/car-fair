import { Box } from '@mui/system';
import React from 'react';
import Cars from '../../../shared/Cars/Cars';
import Reviews from '../Reviews/Reviews';
import TopBanner from '../TopBanner/TopBanner';
import TopNavigation from '../TopNavigation/TopNavigation';

const Home = () => {
    return (
        <Box>
            <TopNavigation></TopNavigation>
            <TopBanner></TopBanner>
            <Cars></Cars>
            <Reviews></Reviews>
        </Box>
    );
};

export default Home;