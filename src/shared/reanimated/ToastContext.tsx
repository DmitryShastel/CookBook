import { createContext, useContext, useState } from 'react';
import { Toast, ToastType } from '@/shared/reanimated/Toast';

const ToastContext = createContext({
  show: (_message: string, _type: ToastType, _color: string) => {},
});

export const ToastProvider = ({ children }: unknown) => {
  const [toast, setToast] = useState({
    visible: false,
    message: '',
    type: ToastType.Top,
    color: '',
  });

  const show = (
    message: string,
    type: ToastType = ToastType.Top,
    color: string = '#FCFCFC',
  ) => {
    setToast({ visible: true, message, type, color });

    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      <Toast
        showToast={toast.visible}
        message={toast.message}
        type={toast.type}
        color={toast.color}
      />
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
