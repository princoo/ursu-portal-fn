import { createContext, useContext, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import Alert from '@mui/material/Alert';

// Create SnackbarContext
const SnackbarContext = createContext();

// Custom hook to access SnackbarContext
export const useSnackbar = () => useContext(SnackbarContext);

// SnackbarProvider component to provide snackbar state
export const SnackbarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('success');

  const showMessage = (message, severity = 'success') => {
    setMessage(message);
    setSeverity(severity);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <SnackbarContext.Provider value={{ showMessage }}>
      {children}
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        TransitionComponent={Slide}
      >
        <Alert variant="filled" onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

// Usage:
// Wrap your root component with SnackbarProvider in index.js or App.js

// Trigger snackbar from any component or function
// const { showMessage } = useSnackbar();
// showMessage('This is a success message', 'success');
