import express from 'express';
import morgan from 'morgan';
import cors from "cors";
import translationRoutes from './routes/translationRoutes.js';
import AppError from './utils/appError.js';
import errorController from './controllers/errorController.js';

const app = express();

app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:3001, https://witcher-elder-speech-translator.vercel.app/"], // allow multiple origins
    methods: ["GET", "POST"],
}));

// Use middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());
app.use((req, res, next) => {
    next();
})

app.use('/api/v1/translations', translationRoutes);

app.all('/{*any}', (req, res, next) => {
    // * Skips all the others middlewares in the stack and goes straight to error middleware
    next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
})

app.use(errorController); // Global error handling middleware

// Routes
export default app;