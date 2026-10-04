/**
 * Unit tests for courts.schemas.ts
 */

import "vitest"

/**
 * All dates in ISO (e.g. `new Date().toISOString()`)
 * Not all courts (court ids) are entered bc am lazy
 */
export const mockCourtsDatabase = {
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
