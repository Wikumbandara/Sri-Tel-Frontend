import React from "react";

import { CCarousel, CCarouselItem, CImage } from "@coreui/react";

function Carousel(props) {
    return (
        <CCarousel controls indicators style={{width:'600px',marginTop:'40px',borderRadius:'20px'}}>
            {props.images.map((item) => (
                <CCarouselItem key={item.id}>
                    <CImage
                        className="d-block w-100"
                        src={item.img}
                        alt={item.id}
                        height={600}
                        
                    />
                </CCarouselItem>
            ))}
        </CCarousel>
    );
}

export default Carousel;