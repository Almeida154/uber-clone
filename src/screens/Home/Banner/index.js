import React from 'react';

import {
    BannerContainer,
    BannerContentContainer,
    BannerTitle,
    BannerSubTitle,
    BannerImageContainer,
    BannerImage
} from './styles';
    
import bannerIcon from '../../../assets/png/bannerIcon.png';

const Banner = () => {
    return (
        <BannerContainer>
            <BannerContentContainer>
                <BannerTitle>Ganhe 25% de desconto</BannerTitle>
                <BannerSubTitle>Faça seu pedido 🤑</BannerSubTitle>
            </BannerContentContainer>
            <BannerImageContainer>
                <BannerImage
                    source={bannerIcon}
                    resizeMode='contain' />
            </BannerImageContainer>
        </BannerContainer>
    );
}

export default Banner;