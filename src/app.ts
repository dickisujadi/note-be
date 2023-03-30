import express, { NextFunction, Request, Response } from "express";
import NoteModel from "./models/note";

const app = express();

app.get("/", async (req, res, next) => {
    try {
        // throw new Error("Error!");
        const notes = await NoteModel.find().exec();
        res.status(200).json(notes);
    } catch (error) {
        next(error);
    }
});

app.use((req, res, next) => {
    next(Error("Endpoint not found"));
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.log(error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occured";
    res.status(500).json({ error: errorMessage });
});

export default app;