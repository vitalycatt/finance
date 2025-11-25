# Sync & Analytics Package

Пакет для синхронизации данных и аналитики.

## Использование

```typescript
import { syncManager, analytics } from 'sync-analytics';

// Синхронизация
await syncManager.sync(data);

// Аналитика
analytics.track({
  event: 'user_action',
  userId: '123',
  properties: { action: 'click' },
  timestamp: new Date()
});
```

