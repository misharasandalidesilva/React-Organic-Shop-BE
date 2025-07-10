import {productsList} from "../db/db";
import {Product} from "../model/product.model";

export const getAllProducts = ():Product[] => {
    return productsList;
}

export const saveProduct = (Product: Product):Product => {
    productsList.push(Product);
    return Product;
}

export const getProductById = (id: number): Product | undefined => {
    return productsList.find(product => product.id === id);
}

export const updateProduct = (id: number, data: Product)=> {
    const Product = productsList.find(product => product.id = id);
    if (Product) {
        Object.assign(Product, data);
        return null;
    }
    return undefined;
}

export const deleteProduct = (id: number) => {
    const index = productsList.findIndex(product => product.id === id);
    if(index === -1){
        return false;
    }
    productsList.splice(index, 1);
    return true;
}


export const validateProduct = (Product: Product) => {
    if(!Product.id || !Product.name || !Product.price || !Product.currency || !Product.image){
        return 'All fields are required';
    }
    return null;
}