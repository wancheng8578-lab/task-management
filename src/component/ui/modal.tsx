import { ReactNode } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useTheme } from '@/contexts';

type Modal = {
  isVisible: boolean;
  onClickClose: () => void;
  title: string;
  children: ReactNode;
};

const Component = ({ isVisible, onClickClose, title, children }: Modal) => {
  const theme = useTheme();
  return (
    <Dialog
      open={isVisible}
      onClose={onClickClose}
      aria-labelledby='dialog-title'
    >
      <DialogTitle
        style={{
          backgroundColor: theme.colors.modalBackground,
          color: theme.colors.primary,
        }}
        id='dialog-title'
      >
        {title}
      </DialogTitle>
      <DialogContent
        style={{
          backgroundColor: theme.colors.modalBackground,
          paddingTop: 10,
        }}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};

export { Component };
