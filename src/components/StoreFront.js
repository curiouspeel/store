import React, { useState, useEffect } from 'react';
import AddProductForm from './AddProductForm';
import ProductList from './ProductList';

export default function StoreFront() {
    const [products, setProducts] = useState(()=>{
        const savedProducts =  localStorage.getItem("products");

        if(savedProducts){
            return JSON.parse(savedProducts);
        }else{
            return [];
        }
    });
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [validationMsg, setValidationMsg] = useState("");

    useEffect(()=>{
        localStorage.setItem("products",JSON.stringify(products));
    },[products]);

    function handleFormSubmit(e){
        e.preventDefault();

        if(!name){
            setValidationMsg("Please enter a name");
            return;
        }
        if(!description){
            setValidationMsg("Please enter a description");
            return;
        }
        setProducts([...products,{
            id: products.length +1,   //Basing id on products.length causes issues when deleting-adding products ["children with same key"]
            name: name,
            description: description
        }]);
        console.log(products);
        setName("");
        setDescription("");
        setValidationMsg("");

    }

    function handleDelete(id){
        setProducts(products.filter(product=> product.id!== id));
    }


    return (
        <>
            <AddProductForm 
                onFormSubmit={handleFormSubmit}
                name={name}
                onNameChange={(targetValue)=>setName(targetValue)}
                description={description}
                onDescriptionChange={(targetValue)=>setDescription(targetValue)}
                validationMsg={validationMsg}
            />
            
            {products.length<1 && <div><p>Add your first product</p></div>}

            <ProductList 
                products={products}
                onDeleteClick={handleDelete}
            />
        </>
    );
}