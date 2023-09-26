import { ReactNode } from 'react';
import { create } from 'zustand';

export type ToastType = 'success' | 'warning' | 'danger';

export interface ToastPayload {
  type: ToastType;
  content: ReactNode;
};

interface ToastMsgStore {
  toast: ToastPayload | null;
  addToast: (newToast: ToastPayload) => void;
  removeToast: () => void;
};

export const TOAST_TIMEOUT = 3_000;

export const useToastMsgStore = create<ToastMsgStore>((set) => ({
  toast: null,
  addToast: (newToast) => set((state) => ({ ...state, toast: newToast })),
  removeToast: () => set({ toast: null }),
}));
