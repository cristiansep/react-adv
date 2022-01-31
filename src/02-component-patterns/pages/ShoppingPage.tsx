<<<<<<< HEAD

import ProductCard, { ProductButtons, ProductImage, ProductTitle } from '../components'
import { useShoppingCart } from '../hooks/useShoppingCart';


import '../styles/custom-styles.css'
=======
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { useShoppingCart } from '../hooks/useShoppingCart';

import { products } from '../data/products';
import '../styles/custom-styles.css';

>>>>>>> c1d06e5fe525f48ecbe29092cd63c566fd3e7329




export const ShoppingPage = () => {

<<<<<<< HEAD

   const {products,shoppingCart,onProductCountChange} = useShoppingCart();



    return (
        <div>
           <h1>Shopping Store</h1>
           <hr /> 

           <div
           style={{
               display: 'flex',
               flexDirection: 'row',
               flexWrap: 'wrap'
           }}
           >

         {
             products.map(product => (
                    <ProductCard 
                    key={product.id}
                    product={product} 
                    className="bg-dark text-white"
                    onChange={onProductCountChange}
                    value={ shoppingCart[product.id]?.count || 0}
                    >
                        <ProductImage className="custom-image" style={{boxShadow: '10px 10px 10px rgb(0,0,0,0.2)'}}  />
                        <ProductTitle className=" text-bold" />
                        <ProductButtons className="custom-buttons" />

                    </ProductCard>

             ))
         }
           </div>

           <div className="shopping-cart" >


            {
                Object.entries(shoppingCart).map(([key, product]) => (

                    <ProductCard 
                    key={key}
                    product={product} 
                    className="bg-dark text-white"
                    style={{width: '100px'}}
                    onChange={onProductCountChange}
                    value={product.count}
                    >
                        <ProductImage className="custom-image" style={{boxShadow: '10px 10px 10px rgb(0,0,0,0.2)'}}  />
                        <ProductButtons 
                        className="custom-buttons"
                        style={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                        />

                    </ProductCard>

                ))
            }

             
           </div>


        <div>
         {JSON.stringify(shoppingCart, null, 5)}
        </div>
=======
    const { shoppingCart, onProductCountChange } = useShoppingCart();
   

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>


                {
                    products.map( product => (
                        <ProductCard 
                            key={ product.id }
                            product={ product }
                            className="bg-dark text-white"
                            onChange={ onProductCountChange }
                            value={ shoppingCart[product.id]?.count || 0 }
                        >
                            <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))
                }
            </div>
            
            <div className="shopping-cart">

                {
                    Object.entries( shoppingCart ).map( ([ key, product ]) => (
                        <ProductCard 
                            key={ key }
                            product={ product }
                            className="bg-dark text-white"
                            style={{ width: '100px' }}
                            onChange={ onProductCountChange }
                            value={ product.count }
                        >
                            <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                            <ProductButtons 
                                className="custom-buttons"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            />
                        </ProductCard>
                    ))
                }

                    
            </div>
>>>>>>> c1d06e5fe525f48ecbe29092cd63c566fd3e7329

        </div>
    )
}
<<<<<<< HEAD


=======
>>>>>>> c1d06e5fe525f48ecbe29092cd63c566fd3e7329
