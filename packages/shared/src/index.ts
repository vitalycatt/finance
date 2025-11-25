/**
 * Shared Package
 * Общие утилиты, типы и константы
 */

// Общие типы
export type ID = string | number;

export interface BaseEntity {
  id: ID;
  createdAt: Date;
  updatedAt: Date;
}

// Утилиты
export function formatDate(date: Date): string {
  return date.toISOString();
}

export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// Константы
export const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000';
export const API_VERSION = 'v1';

// Ошибки
export class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number = 500
  ) {
    super(message);
    this.name = 'AppError';
  }
}

