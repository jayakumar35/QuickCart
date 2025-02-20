import { Inngest } from "inngest";
import dbConnect from "./db";
import User from "../models/User";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "quickcart-next" });

// inngest function to save user data to a database
export const syncUserCreation = inngest.createFunction(
    {
        id: 'sycn-user-from-clerk'
    },
    {
        event: 'clerk/user.created',
    },
    async ({ event }) => {
        const { id, first_name, last_name, email_addresses, image_url } = event.data;

        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: first_name + ' ' + last_name,
            imageUrl: image_url,
        };
        await dbConnect();
        await User.create(userData);
    }
);

// inngest function to update user data in a database
export const sycnUserUpdate = inngest.createFunction(
    {
        id: 'update-user-from-clerk'
    },
    {
        event: 'clerk/user.updated'
    },
    async ({ event }) => {
        const { id, first_name, last_name, email_addresses, image_url } = event.data;
        const userData = {
            email: email_addresses[0].email_address,
            name: first_name + ' ' + last_name,
            imageUrl: image_url,
        };
        await dbConnect();
        await User.findOneAndUpdate({ _id: id }, userData);
    }
);

// inngest function to delete user data from a database
export const syncUserDeletion = inngest.createFunction(
    {
        id: 'delete-user-from-clerk'
    },
    {
        event: 'clerk/user.deleted'
    },
    async ({ event }) => {
        const { id } = event.data;
        await dbConnect();
        await User.findOneAndDelete({ _id: id });
    }
);