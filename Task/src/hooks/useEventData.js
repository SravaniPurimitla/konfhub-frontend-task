import { useState, useEffect } from 'react';
import { fetchEventData } from '../services/api';

export const useEventData = () => {
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadEventData = async () => {
      try {
        setLoading(true);
        const data = await fetchEventData();
        setEventData(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setEventData(null);
      } finally {
        setLoading(false);
      }
    };

    loadEventData();
  }, []);

  const refetch = async () => {
    await loadEventData();
  };

  return { eventData, loading, error, refetch };
};