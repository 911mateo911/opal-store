import React from 'react';
import { ToastPayload } from './toast.controller';
import clsx from 'clsx';

export const Toast = ({ content, type }: ToastPayload) => {
  return (
    <div className={clsx(
      'fixed left-4 bottom-4 rounded w-96 h-12 flex items-center z-50 border border-solid',
      'p-2 animate-fadeIn pl-4',
      type === 'success' && 'bg-green-5 border-green-20',
      type === 'warning' && 'bg-yellow-5 border-yellow-20',
      type === 'danger' && 'bg-red-5 border-red-20',
    )} >
      {content}
    </div>
  )
}
