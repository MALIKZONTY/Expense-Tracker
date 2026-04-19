import { createContext, useState, useContext, useCallback } from 'react';
import ConfirmModal from '../components/ConfirmModal';

const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [modal, setModal] = useState({
    isOpen: false,
    title: '',
    message: '',
    confirmText: 'Confirm',
    cancelText: 'Cancel',
    type: 'primary', // 'primary' or 'danger'
    resolve: null
  });

  const confirm = useCallback((options) => {
    return new Promise((resolve) => {
      setModal({
        isOpen: true,
        title: options.title || 'Confirm Action',
        message: options.message || 'Are you sure you want to proceed?',
        confirmText: options.confirmText || 'Confirm',
        cancelText: options.cancelText || 'Cancel',
        type: options.type || 'primary',
        resolve
      });
    });
  }, []);

  const handleClose = (result) => {
    if (modal.resolve) modal.resolve(result);
    setModal(prev => ({ ...prev, isOpen: false, resolve: null }));
  };

  return (
    <UIContext.Provider value={{ confirm }}>
      {children}
      {modal.isOpen && (
        <ConfirmModal 
          {...modal} 
          onConfirm={() => handleClose(true)} 
          onCancel={() => handleClose(false)} 
        />
      )}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) throw new Error('useUI must be used within a UIProvider');
  return context;
};
