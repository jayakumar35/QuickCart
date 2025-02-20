import mongoose  from "mongoose";

let cache = global.mongoose

if (!cache) {
    cache = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
    if (cache.conn) {
        return cache.conn
    }

    if (!cache.promise) {
        const opts = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            bufferCommands: false,
            bufferMaxEntries: 0,
            useFindAndModify: false,
            useCreateIndex: true,
            useFindAndModify: false,
        }

        cache.promise = mongoose.connect(`${process.env.MONGODB_URI}/qucikcart`,opts).then((mongoose) => {
            return mongoose
        })      
    }
    cache.conn = await cache.promise    
    return cache.conn
}
export default dbConnect;
