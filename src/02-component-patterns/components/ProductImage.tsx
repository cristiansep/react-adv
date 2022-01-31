<<<<<<< HEAD
import { CSSProperties, useContext } from "react";
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';
import { ProductContext } from "./ProductCard";

=======
import { useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg';
>>>>>>> c1d06e5fe525f48ecbe29092cd63c566fd3e7329

export interface Props {
    img?: string;
    className?: string;
<<<<<<< HEAD
    style?: CSSProperties;
}



export const ProductImage = ({img, className, style}: Props) => {

    const {product} = useContext(ProductContext);

    let imgToShow: string;

    if(img) {
        imgToShow = img
    }else if(product.img) {
        imgToShow = product.img
    } else {
        imgToShow = noImage
    }

    return (
        <img className={`${styles.productImg} ${className}`} 
        src={imgToShow} 
        alt="Product" 
        style={style}
        />
    )
=======
    style?: React.CSSProperties 
}


export const ProductImage = ({ img, className, style }: Props ) => {

    const { product } = useContext( ProductContext );
    let imgToShow: string;

    if ( img ) {
        imgToShow = img;
    } else if ( product.img ) {
        imgToShow = product.img
    } else {
        imgToShow = noImage;
    }


    return (
        <img 
            className={ `${ styles.productImg } ${ className }` } 
            src={ imgToShow } 
            style={ style }
            alt="Product" 
        />
    );
>>>>>>> c1d06e5fe525f48ecbe29092cd63c566fd3e7329
}