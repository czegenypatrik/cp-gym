import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';
import { v4 as uuidv4 } from 'uuid';

export const members = sqliteTable('members', {
    id: text('id').$defaultFn(() => uuidv4()).primaryKey().notNull(),
    status: text('status'),
    birthday:integer('birthday', { mode: 'timestamp' }),
    name: text('name').notNull(),
    gender: text('gender'),
    email: text('email').notNull().unique(),
    phone: integer('phone'),
    valid_until: integer('valid', { mode: 'timestamp' })
  });

export const transactions = sqliteTable('transactions', {
    id: text('id').$defaultFn(() => uuidv4()).primaryKey().notNull(),
    transaction: text('transaction'),
    membership: text('membership'),
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
    date: integer('date', { mode: 'timestamp' })
  });