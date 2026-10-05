/**
 * Courts Routes
 * Defines server API endpoints for court availability data
 * Delegates to courts.controller.ts for request/response processing
 */

import express from "express"
import * as courtsController from "./sensors.controller.js"
const router = express.Router();

router.post("/tennis", courtsController.postTennisCourts);
router.post("/badminton", courtsController.postBadmintonCourts);
router.post("/racquetball", courtsController.postRacquetballCourts);

export default router;
