import express, {Express, Request, Response} from "express";
import productRoutes from "./routes/product.routes";
import cors from "cors";
import contactRoutes from "./routes/contact.routes";

// 1. Initialize the express app
const app: Express = express();

// 2. Define Middlewares

// 2.1 Instruct to parse the request payload data to be converted to JSON format
app.use(express.json());

const allowedOrigins = ['http://localhost:5173'];

// app.use(cors());//Enable allow CORS here

const corsOptions = {
    origin: (origin: string | undefined, callback: (error: Error | null, allow?: boolean) => void) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};


app.use("/api/products", productRoutes);
app.use("api/contacts",contactRoutes);

// // 3. Define a simple HTTP GET Request
// app.get('/', (req: Request, res: Response) => {
//     console.log(req.body);
//     res.send("Hello World!");
// });

// Expert the app to use outside (in index.ts)
export default app;