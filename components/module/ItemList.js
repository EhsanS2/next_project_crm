/* eslint-disable react/jsx-key */
import React from "react";
import FormInput from "./FormInput";

const ItemList = ({ form, setForm }) => {
    const { products } = form;

    const addHandler = () => {
        setForm({ ...form, products: [...products, { name: "", price: "", qty: " " }] });
        console.log(products);
    };

    const changeHandler = () => {};
    const deleteHandler = () => {};
    return (
        <div className="item-list">
            <p>Purchased Products</p>
            {products.map((product) => (
                <div key={product._id} className="form-input__list">
                    <FormInput
                        name="name"
                        label="Product Name"
                        type="text"
                        value={products.name}
                        onChange={changeHandler}
                    />
                    <div>
                        <FormInput
                            name="price"
                            label="Product Price"
                            type="text"
                            value={products.price}
                            onChange={changeHandler}
                        />
                        <FormInput
                            name="qty"
                            label="Product Qty"
                            type="number"
                            value={products.qty}
                            onChange={changeHandler}
                        />
                    </div>
                    <button onClick={deleteHandler}>Remove</button>
                </div>
            ))}
            <button onClick={addHandler}>Add Item</button>
        </div>
    );
};

export default ItemList;
