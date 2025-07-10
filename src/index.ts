import app from "./app";
import dotenv from "dotenv";

dotenv.config();   //Load environment variables from the file

// 1. Define the application port
const port = process.env.PORT || 3000;  //Access the PORT

// 2. Instructs the express app to listen on port 3000
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
});



