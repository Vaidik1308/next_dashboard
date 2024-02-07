import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import { authConfig } from "@/authconfig"
import { connectToDB } from "./lib/utils"
import { User } from "./lib/models"
import bcrypt from 'bcrypt'

const login = async (credentials) => {
    try{
        connectToDB();
        const user = await User.findOne({username:credentials.username})

        if(!user) throw new Error("Wrong credentials!")

        const isPasswordCorrect = await bcrypt.compare(credentials.password,user.password)

        if(!isPasswordCorrect) throw new Error("Wrong password")

        return user
    }catch(error){
        console.log(error);
    }
}

export const {signIn,SignOut,auth} =  NextAuth({
    ...authConfig,
    providers: [
        CredentialsProvider({
          async authorize(credentials) {
            try{
                const user = await login(credentials)
                return user
            }catch(error){
                console.log(error);
                return null
            }
          }
          }),
      ]
})

