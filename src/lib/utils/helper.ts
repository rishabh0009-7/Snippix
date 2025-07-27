import { NextRequest } from 'next/server';
import { auth} from '@clerk/nextjs/server';

export function createResponse(data: any, status: number = 200) {
  return Response.json(data, { 
    status,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export function createErrorResponse(message: string, status: number = 400) {
  return Response.json({ error: message }, { 
    status,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function getCurrentUser() {
  const { userId } = auth();
  if (!userId) {
    throw new Error('Unauthorized');
  }
  return userId;
}

export function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}