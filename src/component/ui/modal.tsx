import { ReactNode } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';

type Modal = {
  isVisible: boolean;
  onClickClose: () => void;
  title: string;
  children: ReactNode;
};

const Component = ({ isVisible, onClickClose, title, children }: Modal) => {
  return (
    <Dialog
      open={isVisible}
      onClose={onClickClose}
      aria-labelledby='dialog-title'
    >
      <DialogTitle id='dialog-title'>{title}</DialogTitle>
      <DialogContent
        style={{
          paddingTop: 10, // Or adjust padding as needed
        }}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};

export { Component };
