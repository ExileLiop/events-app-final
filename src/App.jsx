import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import ParticipantsPage from './pages/ParticipantsPage';
import AnalyticsPage from './pages/AnalyticsPage';
import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/register/:eventId", element: <RegistrationPage /> },
  { path: "/participants/:eventId", element: <ParticipantsPage /> },
  // ДОДАЙ ЦЕЙ РЯДОК СЮДИ:
  { path: "/analytics", element: <AnalyticsPage /> },
]);

export default function App() {
  const mode = useSelector((state) => state.theme.mode);

  useEffect(() => {
    document.body.className = mode === 'dark' ? 'dark-theme' : 'light-theme';
  }, [mode]);

  return <RouterProvider router={router} />;
}