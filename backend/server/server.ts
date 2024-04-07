import { createRouter } from '@trpc/server';
import { prisma } from './database/prisma';
import { hash, compare } from 'bcryptjs'; 
import { ValidationError, UnauthorizedError } from './utils/errors';

const router = createRouter();
