<<<<<<< HEAD
import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';


export interface Props {
    className?: string;
    style?: CSSProperties;
}


export const ProductButtons = ({className, style}: Props) => {

    const {counter, increaseBy} = useContext(ProductContext);

    return (
        <div 
        className={`${styles.buttonsContainer} ${className}`} 
        style={style}
        >
        <button 
        className={styles.buttonMinus}
        onClick={() => increaseBy(-1)} 
        > -</button>

        <div className={styles.countLabel}> {counter} </div>

        <button onClick={() => increaseBy(+1)} className={styles.buttonAdd}>+</button>  

    </div>
    )
}
=======
import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css'

export interface Props {
    className?: string;
    style?: React.CSSProperties 
}

export const ProductButtons = ({ className, style }: Props) => {

    const { increaseBy, counter } = useContext( ProductContext );

    return (
        <div 
            className={ `${ styles.buttonsContainer} ${ className }` }
            style={ style }
        >
            <button
                className={ styles.buttonMinus }
                onClick={ () => increaseBy( -1 ) }> - </button>

            <div className={ styles.countLabel }> { counter } </div>

            <button
                className={ styles.buttonAdd }
                onClick={ () => increaseBy( +1 ) }> + </button>
        </div>
    );
}
>>>>>>> c1d06e5fe525f48ecbe29092cd63c566fd3e7329
