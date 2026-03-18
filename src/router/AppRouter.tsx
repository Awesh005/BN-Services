import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { ServiceDetail } from '../pages/ServiceDetail';
import { servicesData } from '../data/servicesData';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      {/* 
        Clean URLs for all 50+ services.
        Instead of creating 50 separate files, we use a dynamic route 
        that renders the ServiceDetail component for each valid service ID.
      */}
      {Object.keys(servicesData).map((id) => (
        <Route key={id} path={`/${id}`} element={<ServiceDetail />} />
      ))}
      
      {/* Fallback for any undefined routes */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
