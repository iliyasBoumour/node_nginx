import express from "express";
import path from "path";
const app = express();

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "ui")));

app.listen(3000, () => {
  console.log("app listening");
});
