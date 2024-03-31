import React, { useEffect, useState } from 'react'
import { ArrowRight, ArrowLeft } from '@mui/icons-material'
import './index.css'
const Carousel = (props) => {
    const [images, setImages] = useState([])
    const [active, setActive] = useState(1)
    useEffect(() => {
        const getImages = async () => {
            const imageData = await fetch(`https://dummyjson.com/products`)
            const response = await imageData.json();
            const { products = [] } = response
            console.log('inside res22', response, products);
            const images = [];
            products.forEach(element => {
                images.push(element.images[0])
            });
            setImages(images)
        }
        getImages();
    }, [])
    console.log("img//**", images)
    const handleNext = () => {
        if (active < images.length) {
            setActive((prev) => prev + 1)
        }
        else setActive(active % images.length)
    }
    const handlePrev = () => {
        if (active > 1) {
            setActive((prev) => prev - 1)
        }
        else setActive(images.length - 1)
    }
    console.log("inside active", active)
    return (
        <div className='carousel-parent'>
            <div className='carousel-main'>
                <div className='left-pointer'>
                    <ArrowLeft onClick={handlePrev} sx={{ fontSize: '100px', color: 'yellow' }} />
                </div>
                {images.map((item, index) => {
                    return (index === active ? <img className='carousel-img' alt={item} src={item} /> : <></>)
                })}
                <div className='right-pointer'>
                    <ArrowRight onClick={handleNext} sx={{ fontSize: '100px', color: 'black' }} />
                </div>
            </div>
        </div>
    )

}

export default Carousel;