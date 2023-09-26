import { TOAST_TIMEOUT, ToastPayload, useToastMsgStore } from "./toast.controller"

export const useToast = () => {
  const setToast = useToastMsgStore(state => state.addToast);
  const removeToast = useToastMsgStore(state => state.removeToast);

  const handleAddToast = (toastPayload: ToastPayload) => {
    setToast(toastPayload);

    setTimeout(() => {
      removeToast();
    }, TOAST_TIMEOUT);
  };

  return {
    handleAddToast
  };
};
