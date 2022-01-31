<<<<<<< HEAD
import { useProduct } from '../hooks/useProduct';
import { createContext, CSSProperties, ReactElement } from 'react';


import styles from '../styles/styles.module.css';
import { ProductContextProps, Product, onChangeArgs } from '../interfaces/interfaces';




export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;
=======
import { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, onChangeArgs } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

>>>>>>> c1d06e5fe525f48ecbe29092cd63c566fd3e7329


export interface Props {
    product: Product;
<<<<<<< HEAD
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
    onChange?: (args: onChangeArgs) => void;
=======
    children?: React.ReactElement | React.ReactElement[];
    className?: string;
    style?: React.CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
>>>>>>> c1d06e5fe525f48ecbe29092cd63c566fd3e7329
    value?: number;
}


<<<<<<< HEAD
export const ProductCard = ({children, product, className, style, onChange, value}: Props) => {


    const {counter, increaseBy} = useProduct({ onChange, product, value });

=======
export const ProductCard = ({ children, product, className, style, onChange, value }: Props ) => {

    const { counter, increaseBy } = useProduct({ onChange, product, value });
>>>>>>> c1d06e5fe525f48ecbe29092cd63c566fd3e7329

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
<<<<<<< HEAD
        }} >
            <div 
            className={`${styles.productCard} ${className}`}
            style={style}
            >
    
                {children}

    
            </div>
        </Provider>
        )
}



=======
        }}>
            <div 
                className={ `${ styles.productCard } ${ className }` }
                style={ style }
            >
                { children }
            </div>
        </Provider>
    )
}
>>>>>>> c1d06e5fe525f48ecbe29092cd63c566fd3e7329
