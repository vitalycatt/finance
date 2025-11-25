# Структура проекта

```
.
├── apps/
│   ├── frontend/              # Frontend Mini App (React + Vite + TypeScript)
│   │   ├── src/
│   │   ├── public/
│   │   ├── package.json
│   │   └── vite.config.ts
│   │
│   └── backend/               # Backend API (Express + TypeScript)
│       ├── src/
│       │   └── index.ts
│       ├── package.json
│       └── tsconfig.json
│
├── packages/
│   ├── mvp-data/              # MVP дизайна и данных
│   │   ├── src/
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── sync-analytics/        # Синхронизация и аналитика
│   │   ├── src/
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── shared/                # Общие утилиты и типы
│       ├── src/
│       │   └── index.ts
│       ├── package.json
│       └── tsconfig.json
│
├── tools/                     # Скрипты и инструменты (будущее)
│
├── .github/
│   └── workflows/
│       └── ci.yml            # CI/CD конфигурация
│
├── package.json              # Корневой package.json с workspaces
├── turbo.json                # Turborepo конфигурация
├── docker-compose.yml        # Docker Compose для деплоя
├── Dockerfile                # Docker образ
├── .gitignore
└── README.md
```

## Компоненты

### Apps (Приложения)

#### Frontend (`apps/frontend`)
Мини-приложение на React + Vite + TypeScript.
- Запуск: `npm run dev` (из корня: `npm run dev:frontend`)
- Порт по умолчанию: 5173 (Vite)

#### Backend (`apps/backend`)
API сервер на Express + TypeScript.
- Запуск: `npm run dev` (из корня: `npm run dev:backend`)
- Порт по умолчанию: 3000

### Packages (Пакеты)

#### MVP Data (`packages/mvp-data`)
Модуль для работы с MVP данными и дизайном.

#### Sync & Analytics (`packages/sync-analytics`)
Модуль синхронизации данных и аналитики.

#### Shared (`packages/shared`)
Общие утилиты, типы и константы для использования во всех частях приложения.
