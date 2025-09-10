//  Carousel / Image Slider

import { useEffect } from "react";
import { useState } from "react";
const images = [  "https://picsum.photos/id/1018/600/400",
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1016/600/400",
  "https://picsum.photos/id/1020/600/400"]

export default function CarouselImageSlider(){
    const [currentImage, setcurrentImage] = useState(null);
    const goToPrevious = () => {
        setcurrentImage((prevIndex) =>
            prevIndex === 0 ? images.length -1 : prevIndex -1 
        );
    };

    const goToNext = () => {
        setcurrentImage((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex +1
        );
    };
    // useEffect(() => {
    //     const interval = setInterval(() =>{
    //         setcurrentImage((prevIndex) =>
    //                 prevIndex === images.length - 1 ? 0 : prevIndex + 1
    //         )
    //     }, 2000);
    //      return () => clearInterval(interval);
    // }, [])
    return(
        <div style={{textAlign: 'center'}}>
            <img
                src={images[currentImage]}
                alt="slide"
                style={{width: "600px", height: "400px", objectFit: "cover" }}
            
            />
            <div style={{marginTop: "2rem", cursor: "pointer"}}>
                <butto onClick={goToPrevious}>prev</butto>
                <button onClick={goToNext}>next</button>
            </div>

        </div>
    )
}