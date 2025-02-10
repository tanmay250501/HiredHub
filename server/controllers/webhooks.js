import { Webhook } from "svix";
import User from "../models/User.js";

export const clerkWebhooks = async (req, res) => {
    try {
        console.log("🔵 Webhook received:", req.body);
        console.log("🟢 Headers:", req.headers);

        // Create a Svix instance with Clerk webhook secret
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

        // Verifying Headers
        await whook.verify(JSON.stringify(req.body), {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        });

        console.log("✅ Webhook verified successfully!");

        // Getting data from request body
        const { data, type } = req.body;

        switch (type) {
            case "user.created": {
                console.log("🟠 Creating new user:", data);

                const userData = {
                    _id: data.id,
                    email: data.email_addresses?.[0]?.email_address || "N/A",  // Fix potential undefined issue
                    name: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
                    image: data.image_url || "",
                    resume: ''
                };

                const newUser = await User.create(userData);
                console.log("✅ User created in MongoDB:", newUser);

                res.status(201).json({ success: true, message: "User created", user: newUser });
                break;
            }

            case "user.updated": {
                console.log("🔄 Updating user:", data);

                const userData = {
                    email: data.email_addresses?.[0]?.email_address || "N/A",
                    name: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
                    image: data.image_url || "",
                    resume: ''
                };

                const updatedUser = await User.findByIdAndUpdate(data.id, userData, { new: true });
                console.log("✅ User updated:", updatedUser);

                res.status(200).json({ success: true, message: "User updated", user: updatedUser });
                break;
            }

            case "user.deleted": {
                console.log("🗑 Deleting user:", data.id);

                await User.findByIdAndDelete(data.id);
                res.status(200).json({ success: true, message: "User deleted" });
                break;
            }

            default:
                console.log("❌ Invalid webhook event:", type);
                res.status(400).json({ success: false, message: "Invalid webhook event" });
        }
    } catch (error) {
        console.error("🚨 Webhook Error:", error);
        res.status(500).json({ success: false, message: "Webhook Error", error: error.message });
    }
};
