import {Request, Response} from "express";
import * as contactService from "../services/contact.service"

//Controller function to handle get all contacts

export const getAllContacts = (req: Request, res: Response) => {
    try {
        const contacts = contactService.getAllContacts();
        res.status(200).json(contacts);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Something went wrong"});
    }
}

export const saveContact = (req: Request, res: Response) => {
    try {
        const newContact = req.body;
        const validationError = contactService.validateContact(newContact)

        if (validationError) {
            res.status(400).json({error: validationError});
            return;
        }

        const savedContact = contactService.saveContact(newContact);
        res.status(201).json(savedContact);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Something went wrong"});
    }
}