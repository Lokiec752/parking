CREATE TABLE IF NOT EXISTS "parking_spot" (
	"id" serial PRIMARY KEY NOT NULL,
	"spot_number" text NOT NULL,
	"owner_id" text NOT NULL,
	"is_available" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "reservations" (
	"id" serial PRIMARY KEY NOT NULL,
	"spot_id" text NOT NULL,
	"user_id" text NOT NULL,
	"reservation_date" timestamp DEFAULT now() NOT NULL,
	"start_time" timestamp NOT NULL,
	"end_time" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "updated_at" timestamp DEFAULT now() NOT NULL;