import { connectToDatabase } from "../../../components/helper/dbConection";
import { hashPassword } from "../../../components/helper/hashPassword";


async function handler (req , res) {


    if(req.method !== "POST"){
        return;
    }
        //es POST
    const data = req.body
    const {email, password} = data

    if (!email ||
        !email.includes('@') ||
        !password ||
        password.trim().length < 5 ){
            res.status(422).json({message:"Error in password or Email"})
            return;
        }

    // EMAIL and PASSWORD CORRECT

      const client = await connectToDatabase();
      const db = client.db()  

      const userLoged = await db.collection("authArgApp").findOne({email:email})

      if(userLoged){
          res.status(422).json({message:"There exist an user with for this Email"})
          client.close()
          return;
      }
      
    // NO HAY user con ese EMAIL

    const passwordHashed = await hashPassword(password);

    const result = await db.collection("authArgApp").insertOne({
        email:email,
        password:passwordHashed
    })

    res.status(201).json({message:"New user created"})
    client.close()

}

export default handler