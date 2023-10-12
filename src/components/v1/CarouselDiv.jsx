import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from "react-bootstrap";

import csaladiImg from "../../assets/slide/csaladi.jpg";
import budakesziGorogImg from "../../assets/slide/budakeszi-gorog-reszlet.jpg";
import debrecenFagImg from "../../assets/slide/debrecen-FAG-beton-homlokzat.jpg";
import milpImg from "../../assets/slide/milp.jpg";
import kivitelezesImg from "../../assets/slide/kivitelezes.jpg"

const CarouselDiv = () => {
    return (
        <div className="carouselDiv">
            <Carousel fade={true}>
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
                    src={budakesziGorogImg}
                    alt="enterior"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={debrecenFagImg}
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
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={kivitelezesImg}
                    alt="Milp"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );

}

export default CarouselDiv;