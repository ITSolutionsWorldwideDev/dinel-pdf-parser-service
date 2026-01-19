// pdf-parser-service/index.ts
import express from "express";
import fileUpload from "express-fileupload";
import pdfParse from "pdf-parse-new";

const app = express();
const port = 5000;

// Enable file upload via multipart/form-data
app.use(fileUpload());

// POST /parse-pdf
app.post("/parse-pdf", async (req, res) => {
  try {
    if (!req.files?.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const file = Array.isArray(req.files.file) ? req.files.file[0] : req.files.file;

    if (!file || !file.data) {
      return res.status(400).json({ error: "Invalid file" });
    }

    const data = await pdfParse(file.data);
    return res.json({ text: data.text || "" });
  } catch (err) {
    console.error("PDF parsing failed", err);
    return res.status(500).json({ error: "Failed to parse PDF" });
  }
});

export default app;

// app.listen(port, () => {
//   console.log(`PDF Parser Service running at http://localhost:${port}`);
// });
