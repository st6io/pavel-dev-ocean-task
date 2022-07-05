import { Business } from './Business';

export type BusinessResume = Pick<Business, 'name' | 'description' | 'id'>;
