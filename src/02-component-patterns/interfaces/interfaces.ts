<<<<<<< HEAD

import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductButtonsProps } from '../components/ProductButtons';



export interface Product {
    id: string,
    title: string,
    img?: string
}


export interface ProductContextProps {
    counter: number,
    product: Product
    increaseBy: (value: number) => void,
=======
import { Props as ProductButtonsProps } from '../components/ProductButtons';
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';


export interface Product {
    id: string;
    img?: string;
    title: string;
}

export interface ProductContextProps {
    counter: number;
    product: Product;
    increaseBy: ( value: number ) => void;
>>>>>>> c1d06e5fe525f48ecbe29092cd63c566fd3e7329
}


export interface ProductCardHOCProps {
<<<<<<< HEAD
    ({ children, product }: ProductCardProps ): JSX.Element,
    Buttons: (Props: ProductButtonsProps) => JSX.Element,
    Image:   (Props: ProductImageProps) => JSX.Element,
    Title:   (Props: ProductTitleProps ) => JSX.Element,
}



=======
    ({ children, product }: ProductCardProps ):JSX.Element,
    Buttons: ( Props: ProductButtonsProps ) => JSX.Element,
    Image:   ( Props: ProductImageProps ) => JSX.Element,
    Title:   ( Props: ProductTitleProps ) => JSX.Element,
}


>>>>>>> c1d06e5fe525f48ecbe29092cd63c566fd3e7329
export interface onChangeArgs {
    product: Product;
    count: number;
}


<<<<<<< HEAD

=======
>>>>>>> c1d06e5fe525f48ecbe29092cd63c566fd3e7329
export interface ProductInCart extends Product {
    count: number
}