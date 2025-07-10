import {Router} from "express";
import {deleteProduct, getAllProducts, getProduct, saveProduct, updateProduct} from "../controllers/product.controller";

const productRouter: Router = Router();

//Handle Requests
productRouter.get("/all", getAllProducts);  //Get ALL
productRouter.post("/save", saveProduct); //Save
productRouter.get("/:id", getProduct); //Get By ID
productRouter.put("/update/:id", updateProduct); //Update
productRouter.delete("/delete/:id", deleteProduct); //Delete


export default productRouter