import express from "express";
import { addFood,listFood,removeFood } from "../controlers/foodControler.js";
import multer from "multer";
import path from "path";

const foodRouter = express.Router();

// Image storage engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");  // Ensure this folder exists!
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

// Ensure the field name matches the frontend/Thunder Client
foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood);


export default foodRouter;
