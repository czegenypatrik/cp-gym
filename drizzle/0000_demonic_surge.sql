CREATE TABLE `members` (
	`id` text PRIMARY KEY NOT NULL,
	`status` text,
	`valid` integer,
	`name` text NOT NULL,
	`gender` text,
	`email` text NOT NULL,
	`phone` integer
);
--> statement-breakpoint
CREATE TABLE `transactions` (
	`id` text PRIMARY KEY NOT NULL,
	`transaction` text,
	`membership` text,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`date` integer
);
--> statement-breakpoint
CREATE UNIQUE INDEX `members_email_unique` ON `members` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `transactions_email_unique` ON `transactions` (`email`);