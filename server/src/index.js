import express from "express";
import healthRouter from "./routes/health.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use("/api/health", healthRouter);

app.listen(PORT, () => {
  console.log(`API chạy tại http://localhost:${PORT}`);
});
