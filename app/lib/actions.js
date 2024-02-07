"use server"

import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";


//USER SECTION
export const addUser = async (formData) => {
    
    const {username,email,password,phone,address,isAdmin,isActive} = Object.fromEntries(formData);

    try{
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
        console.log(hashedPassword);
        connectToDB()
        const newUser = new User({
            username,
            email,
            password:hashedPassword,
            phone,
            address,
            isAdmin,
            isActive
        }) 
        await newUser.save();
    }catch(error){
        console.log(error);
        throw new Error(error)
    }

    revalidatePath('/dashboard/users')
    redirect('/dashboard/users')
}

export const deleteUser = async (formData) => {
    const {id} = await Object.fromEntries(formData)

    try{
        connectToDB();
        await User.findByIdAndDelete(id);
    }catch(error){
        console.log(error);
        throw new Error(error,"Failed to delete the user!")
    }

    revalidatePath("/dashboard/users");
} 


export const updateUser = async (formData) => {
    const {id,username,email,password,phone,address,isAdmin,isActive} = Object.fromEntries(formData);

    try{
        connectToDB();
        const updatedUser = {
            username,
            email,
            password,
            phone,
            address,
            isAdmin,
            isActive,
        }
        Object.keys(updatedUser).forEach((key) => (
            (updatedUser[key] === '' || undefined) && delete updatedUser[key]
        ));

        await User.findByIdAndUpdate(id,updatedUser);

        

    }catch(error){
        console.log(error);
        throw new Error("Failed to update the user!")
    }
    redirect("/dashboard/users")
    revalidatePath("/dashboard/users")
}



// PRODUCT SECTION
export const addProduct = async (formData) => {
    
    const {title,desc,price,stock,color,size} = Object.fromEntries(formData);

    try{
        connectToDB()
        const newProduct = new Product({
            title,
            desc,
            price,
            stock,
            color,
            size,
        }) 
        await newProduct.save();
    }catch(error){
        console.log(error);
        throw new Error(error)
    }

    revalidatePath('/dashboard/products')
    redirect('/dashboard/products')
}

export const deleteProduct = async (formData) => {
    
    const {id} = Object.fromEntries(formData);

    try{
        connectToDB()
        
        await Product.findByIdAndDelete(id);
    }catch(error){
        console.log(error);
        throw new Error(error,"Failed to delete the product")
    }

    revalidatePath('/dashboard/products');
}

export const updateProduct = async (formData) => {
    const {id,title,desc,stock,size,color,price} = Object.fromEntries(formData);

    try{
        connectToDB();
        const updatedProduct = {id,title,desc,size,stock,color,price}
        Object.keys(updatedProduct).forEach((key) => (
            (updatedProduct[key] === '' || undefined) && delete updatedProduct[key]
        ))
        await Product.findByIdAndUpdate(id,updatedProduct)
    }catch(error){
        console.log(error);
    }

    revalidatePath("/dashboard/products")
    redirect("/dashboard/products")

}