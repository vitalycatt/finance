interface TelegramWebApp {
  ready: () => void;
  expand: () => void;
  sendEvent?: (event: string, data?: Record<string, unknown>) => void;
  disableVerticalSwipes?: () => void;
  setupSwipeBehavior?: (options: { allow_vertical_swipe: boolean }) => void;
}

interface Telegram {
  WebApp: TelegramWebApp;
}

declare global {
  interface Window {
    Telegram?: Telegram;
  }
}

export {};
