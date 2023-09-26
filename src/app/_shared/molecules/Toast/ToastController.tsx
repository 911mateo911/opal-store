'use client';

import React from 'react';
import { useToastMsgStore } from './toast.controller';
import { Toast } from './Toast';

export const ToastController = () => {
  const toast = useToastMsgStore(state => state.toast);

  if (toast) {
    return (
      <Toast
        {...toast}
      />
    )
  }

  return null;
}
