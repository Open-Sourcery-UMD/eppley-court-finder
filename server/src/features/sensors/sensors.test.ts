/**
 * Unit tests for courts.schemas.ts
 */

// TODO: Make the actual tests

import { describe, it, expect } from "vitest"
import request from "supertest"
import app from "../../server.js"

// Mocked sensors

// Tennis/Pickleball

/** Sensor on [T]ennis court [2], [N]orth side */
const sensorT2N = {
  type: "Tennis",
  id: 2,
  peopleDetected: true, // From IR sensor or manual button, etc.
  lastUpdated: "2026-10-03T00:23:54",
  pickleballNetStatus: "locked" // From camera, probably?
}

/** Sensor on [T]ennis court [2], [S]outh side */
const sensorT2S = {
  peopleDetected: false,
  lastUpdated: "2026-10-03T01:06:20",
  pickleballNetStatus: "unlocked"
}

/** Sensor on [T]ennis court [3], [N]orth side */
const sensorT3N = {
  peopleDetected: true, // Court is being used for tennis
  lastUpdated: "2026-10-03T01:07:45",
  pickleballNetStatus: "locked" // Both sub-courts locked (tennis-only court)
}

/** Sensor on [T]ennis court [3], [S]outh side */
const sensorT3S = {
  peopleDetected: true, // Court is being used for tennis
  lastUpdated: "2026-10-03T01:07:45",
  pickleballNetStatus: "locked"
}

describe('Tennis sensor tests', () => {

  // Test POST /api/sensors/tennis
  it('should return null with a 200 status', async () => {
    const response = await request(app)
      .post('/api/sensors/tennis')
      .send(sensorT2N);

    expect(response.status).toBe(200);
    expect(response.body).toBe({ success: true, data: null });
  });

  // Test POST /api/users (Validation error case)
  it('should return a 400 status if lastUpdated is not in ISO format', async () => {
    const response = await request(app)
      .post('/api/sensors/tennis')
      .send({
        peopleDetected: true,
        lastUpdated: "2026/10/02 12:23:54 AM", // bad format
        pickleballNetStatus: "locked"
      });

    expect(response.status).toBe(400);
    console.warn(response.body)
    expect(response.body).toStrictEqual({
      success: false,
      error: {
        code: "INVALID_INPUT",
        message: "Invalid format"
      }
    });
  });

});

// Badminton

/** Sensor on [B]adminton court [3] */
const sensorB3 = {
  peopleDetected: false,
  lastUpdated: "2026-10-03T01:01:51"
  // No `pickleballNetStatus` as it's not a tennis court
}

/** Sensor on [B]adminton court [4] */
const sensorB4 = {
  peopleDetected: true,
  lastUpdated: "2026-10-03T01:05:00"
}

// Racquetball

/** Sensor on [R]acquetball court [2] */
const sensorR2 = {
  peopleDetected: true,
  lastUpdated: "2026-10-03T00:00:15"
}

/** Sensor on [R]acquetball court [3] */
const sensorR3 = {
  peopleDetected: true,
  lastUpdated: "2026-10-03T01:05:00",
}

/** Sensor on [R]acquetball court [6] */
const sensorR6 = {
  peopleDetected: false, // Court is available per database
  lastUpdated: "2026-10-03T22:45:01",
}

/** Sensor on [R]acquetball court [7] */
const sensorR7 = {
  peopleDetected: false, // Court is available per database
  lastUpdated: "2026-10-03T20:34:23",
}

// Mocked database

/**
 * The resultant database from getting data from all sensors
 * 
 * All dates should be in ISO format (e.g. `new Date().toISOString()`)
 * Not all courts (court ids) are entered bc am lazy
 */
const mockCourtsDatabase = {
  tennis: [
    {
      // 2nd tennis court
      // Numbered from east to west, i.e.
      // indexing starts on the court nearest to the Eppley building
      type: "tennis",
      id: 2,
      available: "pickleball",
      availableSince: "2026-10-03T01:06:20",
      occupiedSince: "",
      // Pickleball:
      // smaller id is the south half of the tennis court, bigger id is north
      pickleball: [
        {
          type: "pickleball",
          id: 3,
          available: "available",
          availableSince: "2026-10-03T01:06:20",
          occupiedSince: ""
        },
        {
          type: "pickleball",
          id: 4,
          available: "net_locked",
          availableSince: "",
          occupiedSince: ""
        },
      ]
    },
    {
      type: "tennis",
      id: 3,
      available: "occupied",
      availableSince: "",
      occupiedSince: "2026-10-03T01:06:20",
      pickleball: [
        {
          type: "pickleball",
          id: 5,
          available: "net_locked",
          availableSince: "",
          occupiedSince: ""
        },
        {
          type: "pickleball",
          id: 6,
          available: "net_locked",
          availableSince: "",
          occupiedSince: ""
        },
      ]
    },
  ],
  badminton: [
    {
      type: "badminton",
      id: 3, // 3rd closest to the room entrance
      available: "available",
      availableSince: "2026-10-03T01:01:51",
      occupiedSince: ""
    },
    {
      type: "badminton",
      id: 4,
      available: "occupied",
      availableSince: "",
      occupiedSince: "2026-10-03T01:04:24"
    },
  ],
  // Technically courts are for racquetball AND squash but
  // racquetball sounds cooler (and is more fun) so were going with it
  racquetball: [
    {
      type: "racquetball",
      id: 2, // Indexing starts from the southmost court
      available: "occupied",
      availableSince: "",
      occupiedSince: "2026-10-03T00:00:15",
    },
    {
      type: "racquetball",
      id: 3,
      available: "occupied",
      availableSince: "",
      occupiedSince: "2026-10-02T23:00:15",
    },
    {
      type: "racquetball",
      id: 6,
      available: "available",
      availableSince: "2026-10-03T22:45:01",
      occupiedSince: "",
    },
    {
      type: "racquetball",
      id: 7,
      available: "available",
      availableSince: "2026-10-03T20:34:23",
      occupiedSince: "",
    },
  ],
}

// TODO: Create tests