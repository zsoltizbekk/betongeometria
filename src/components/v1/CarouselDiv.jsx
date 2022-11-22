import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from "react-bootstrap";

import csaladiImg from "../../assets/slide/csaladi.jpg";
import enteriorImg from "../../assets/slide/enterior.jpg";
import enterior2Img from "../../assets/slide/enterior2.jpg";
import milpImg from "../../assets/slide/milp.jpg";

const CarouselDiv = () => {
    return (
        <div className="carouselDiv">
            <Carousel>
                    <Carousel.Item>
                    <img
                    className="d-block w-100"   
                    src={csaladiImg}
                    alt="csaladi haz"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={enteriorImg}
                    alt="enterior"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={enterior2Img}
                    alt="enterior"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={milpImg}
                    alt="Milp"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );

}

export default CarouselDiv;