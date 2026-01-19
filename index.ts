// pdf-parser-service/index.ts
import express from "express";
// import fileUpload from "express-fileupload";
import multer from "multer";
import pdfParse from "pdf-parse-new";

const app = express();
const port = 5000;

// Enable file upload via multipart/form-data
const upload = multer();


app.post("/parse-pdf", upload.single("file"), async (req, res) => {
  try {
    if (!req.file?.buffer) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const data = await pdfParse(req.file.buffer);
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
