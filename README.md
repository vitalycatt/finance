# Mini App Monorepo

Монорепо для разработки Mini App приложения с фронтендом, бэкендом, MVP данными, синхронизацией и аналитикой.

## Структура проекта

```
.
├── apps/
│   ├── frontend/          # Frontend Mini App (React + Vite)
│   └── backend/           # Backend API
├── packages/
│   ├── mvp-data/          # MVP дизайна и данных
│   ├── sync-analytics/    # Синхронизация и аналитика
│   └── shared/            # Общие утилиты и типы
└── tools/                 # Скрипты и инструменты

```

## Быстрый старт

### Установка зависимостей

```bash
npm install
```

### Разработка

Запустить все приложения в режиме разработки:
```bash
npm run dev
```

Запустить только фронтенд:
```bash
npm run dev:frontend
```

Запустить только бэкенд:
```bash
npm run dev:backend
```

### Сборка

Собрать все приложения:
```bash
npm run build
```

### Тестирование

Запустить все тесты:
```bash
npm run test
```

### Очистка

Удалить все node_modules и build артефакты:
```bash
npm run clean
```

## Детальная структура

См. [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) для подробной информации о структуре проекта.

## Компоненты

### Frontend Mini App (`apps/frontend`)
Мини-приложение на React + Vite + TypeScript для Telegram (или другой платформы).

### Backend API (`apps/backend`)
API сервер для обработки запросов от фронтенда.

### MVP Data (`packages/mvp-data`)
Модуль для работы с MVP данными и дизайном.

### Sync & Analytics (`packages/sync-analytics`)
Модуль синхронизации данных и аналитики.

### Shared (`packages/shared`)
Общие утилиты, типы и константы.

## Технологии

- **Turborepo** - управление монорепо
- **TypeScript** - типизация
- **React** - фронтенд фреймворк
- **Vite** - сборщик фронтенда

