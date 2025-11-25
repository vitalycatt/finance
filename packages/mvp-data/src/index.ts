/**
 * MVP Data Package
 * Модуль для работы с MVP данными и дизайном
 */

// Экспортируем типы данных
export interface MVPData {
  id: string;
  name: string;
  value: unknown;
}

// Экспортируем константы и утилиты
export const MVP_CONSTANTS = {
  VERSION: '0.0.0',
  API_VERSION: 'v1',
} as const;

// Заглушка для будущей функциональности
export function getMVPData(): MVPData[] {
  return [];
}

