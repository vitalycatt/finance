# Multi-stage build для монорепо
FROM node:18-alpine AS base
WORKDIR /app

# Установка зависимостей
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# Сборка
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production
FROM base AS runner
ENV NODE_ENV=production
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["node", "dist/index.js"]

