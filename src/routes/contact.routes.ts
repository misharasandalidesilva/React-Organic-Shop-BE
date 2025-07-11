import {Router} from "express";
import {getAllContacts, saveContact} from "../controllers/contact.controller";

const contactRouter: Router = Router();

contactRouter.get("/all", getAllContacts); //Get All
contactRouter.post("/save", saveContact); //Save

export default contactRouter;