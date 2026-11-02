import cors from "cors"
import express from "express"
import type { Request, Response } from "express"
import * as environment from "./config/environment.js"
import { errorHandler } from "./common/middleware/errorHandler.js"
import sensorsRoutes from "./features/sensors/sensors.routes.js"

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Public routes
app.use("/api/sensors", sensorsRoutes);

// Health check
app.get("/", (req: Request, res: Response) => {
  res.send("Eppley Court Finder Backend is running");
});

// Error handler
app.use(errorHandler);

// Start server
const host = environment.host;
const port = environment.PORT;

app.listen(port, host, () => {
  console.log(`Server running on http://${host}:${port}`);
});

export default app;