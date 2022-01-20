// fetching products from API
import React, {useState, useEffect} from 'react';
import Product from './Product';


export default function NewStoreFront(){
    const [products, setProducts]=useState([]);
    const [isLoading, setIsLoading]=useState(true);

    useEffect(()=>{
        fetch('https://react-tutorial-demo.firebaseio.com/products.json')
        .then(response=>response.json())
        .then(data=>{
           console.log(data);
           if(data){
               setProducts(data);
           } 
        })
        .catch(error=>console.log(error))
        .finally(setIsLoading(false))
    },[]);

    if(isLoading){
        return <h2>Loading...</h2>
    }

    return (
        <div className="store-front">
            {products.map(product=>
                <Product details={product}/>
            )}
        </div>
    );
}