import React, { useState } from 'react';
import Product from './Product';

export default function StoreFront() {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [validationMsg, setValidationMsg] = useState("");


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
            id: products.length +1,
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
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Enter the name"
                        className="ui-textfield"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input
                        id="description"
                        type="text"
                        placeholder="Enter the description"
                        className="ui-textfield"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="form-footer">
                    <div className="validation-msg">{validationMsg}</div>
                    <input
                        type="submit"
                        className="ui-button"
                        value="Add product"
                    />
                </div>
            </form>
            
            {products.length<1 && <div><p>Add your first product</p></div>}

            <ul className="store-front">
                {products.map(product=> (<li key={product.id}>
                        <Product details={product}/>
                        <button
                        onClick={()=>handleDelete(product.id)}
                        >
                            Delete
                        </button>
                    </li>)
                )}
            </ul>
        </>
    );
}