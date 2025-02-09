import {Webhook} from "svix"
import User from "../models/User.js"

// API Controller to manage Clerk User with database

export const clerkWebhooks = async (req,res) => {

    try {

        // Create a Svix instance with clerk webhook secret.
        const whook = new Webhook (process.env.CLERK_WEBHOOK_SECRET)

        // Verifying Header 
        await whook.verify(JSON.stringify(req.body),{
            "svix-id": req.header["svix-id"],
            "svix-timestamp": req.header["svix-timestamp"],
            "svix-signature": req.header["svix-signature"]
        })

        // Getting data from request body
        const {data , type} = req.body

        // Switch cases for diffrent 
        switch (type) {
            case "user.created":{
                
                const userData = {
                    _id : data.id,
                    email: data.email_addresses[0].email_addresses,
                    name: data.first_name + " " + data.last_name,
                    image: data.image_url,
                    resume:''
                }
                await User.create(userData)
                res.json({})
                break;
            }
            case "user.updated":{
                const userData = {
                    email: data.email_addresses[0].email_addresses,
                    name: data.first_name + " " + data.last_name,
                    image: data.image_url,
                    resume:''
                }
                await User.findByIdAndUpdate(data.id, userData )
                res.json({})
                break;
            }

            case "user.deleted":{

                await User.findByIdAndDelete(data.is)
                res.json({})
            }
                
                break;
        
            default:
                break;
        }
        
    } catch (error) {
        console.log(error.message);
        res.json({success:false,message:"Webhooks Error"})
        
    }
}