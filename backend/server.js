import dotenv from 'dotenv';
dotenv.config({ path: './config.env' }); // load FIRST before anything else
import connectDB from './config/db.js';
process.on('uncaughtException', (err) => {
    console.error("💥 UNHANDLED EXCEPTION:", err);
    process.exit(1);
})
import app from './app.js';

// * Connecting MongoDB
connectDB();


const PORT = process.env.PORT || 3000;   // use env variable
const server = app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

process.on("unhandledRejection", (err) => {
    console.error("💥 UNHANDLED REJECTION:", err);

    server.close(() => {
        process.exit(1);
    });
});

