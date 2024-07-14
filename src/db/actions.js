import { db } from '../db';
import * as schema from './schemas';

export async function getMembers() {
    return await db.select().from(schema.members).all();
  }

export async function getTransactions() {
    return await db.select().from(schema.transactions).all();
  }