"use client";
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { CollegeProvider } from './contexts/CollegeContext';

const ClientProviders = ({ children }) => {
  return (
    <CollegeProvider>
      {children}
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
    </CollegeProvider>
  );
};

export default ClientProviders;
