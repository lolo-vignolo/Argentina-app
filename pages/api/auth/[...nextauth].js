import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectToDatabase } from "../../../components/helper/dbConection";
import { verifyPasword } from "../../../components/helper/hashPassword";

export default NextAuth({

    session:{
        jwt:true,
    },

    providers: [
        CredentialsProvider({

            async authorize(credentials, req){

                const client = await connectToDatabase();
                const userCollection = client.db().collection('authArgApp');
                const userIsLogin = await userCollection.findOne({
                 email: credentials.email,
                });

                if(!userIsLogin){
                    client.close()
                    throw new Error("you must create an user")
                }

                                                            // ingresada            existente en DB
                const checkPassword = await verifyPasword(credentials.password, userIsLogin.password)

                if(!checkPassword){
                    
                    throw new Error ("invalid password")
                }

                client.close()

                return {
                    email: userIsLogin.email,
                }
            } 
        })
    ]

})