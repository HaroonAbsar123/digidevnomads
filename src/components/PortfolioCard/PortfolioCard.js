import React from 'react';
import "./PortfolioCard.css"

export default function PortfolioCard({image}){


    return(
        <div class="portfolioCard">
            <img src={image} alt="" width={"100%"} height={"100%"}/>
        <div class="portfolioCard__content">
          <p class="portfolioCard__title">Card Title</p>
          <p class="portfolioCard__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco.
          </p>
        </div>
      </div>
    )
}