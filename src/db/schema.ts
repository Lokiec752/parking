import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const parkingSpot = pgTable("parking_spot", {
  id: serial("id").primaryKey(),
  spotNumber: text("spot_number").notNull(),
  ownerId: text("owner_id").notNull(),
  isAvailable: text("is_available").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const reservations = pgTable("reservations", {
  id: serial("id").primaryKey(),
  spotId: text("spot_id").notNull(),
  userId: text("user_id").notNull(),
  reservationDate: timestamp("reservation_date").defaultNow().notNull(),
  startTime: timestamp("start_time").notNull(),
  endTime: timestamp("end_time").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type ParkingSpotSelect = typeof parkingSpot.$inferSelect;
export type UserSelect = typeof users.$inferSelect;
