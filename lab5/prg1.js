import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const port = 3333;
const app = express();

// Get current filename and directory
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// Home page
app.get("/", (req, res) => {
    res.sendFile(path.join(dirname, "public", "index.html"));
});

// About page
app.get("/about", (req, res) => {
    res.sendFile(path.join(dirname, "public", "about.html"));
});

// Enquiry page
app.get("/enquiry", (req, res) => {
    res.sendFile(path.join(dirname, "public", "enquiry.html"));
});

// Start server
app.listen(port, () => {
    console.log(`prg1 is running at http://localhost:${port}`);
});