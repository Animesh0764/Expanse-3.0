import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const CarouselItem = () => {
    return (
        <Carousel>
                <div>
                    <img src="https://dummyimage.com/800x300/000/fff.png&text=This+is+a+sample+image" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://dummyimage.com/800x300/000/fff.png&text=This+is+a+sample+image" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://dummyimage.com/800x300/000/fff.png&text=This+is+a+sample+image" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    )
}

export default CarouselItem