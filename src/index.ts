import type { Express, Response } from "express";
import express from "express";
import routes from "./routes/index";

const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());
app.use('/api', routes)

app.listen(port, () => {
  console.log(`[SERVER]: Server is running at http://localhost:%{port}`)
})
