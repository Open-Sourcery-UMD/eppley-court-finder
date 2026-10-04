/**
 * Courts Routes
 * Defines server API endpoints for court availability data
 * Delegates to courts.controller.ts for request/response processing
 */

import express from "express"
import * as courtsController from "./courts.controller.js"
const router = express.Router();

router.get("/active", courtsController.getActiveCourts);
router.get("/tennis", courtsController.getTennisCourts);
router.get("/pickleball", courtsController.getPickleballCourts);
router.get("/badminton", courtsController.getBadmintonCourts);
router.get("/racquetball", courtsController.getRacquetballCourts);

export default router;
