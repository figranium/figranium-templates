import { auth } from '@/lib/neon-auth';

export const { GET, POST, PUT, PATCH, DELETE } = auth.handler();
