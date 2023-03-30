import express, { NextFunction, Request, Response } from "express";
import notesRouters from "./routers/notes";

const app = express();

app.use("/api/notes", notesRouters);


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