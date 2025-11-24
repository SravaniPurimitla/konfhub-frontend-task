const API_URL = 'https://dev-api.konfhub.com/event/public/konfhub-frontend-evaluation-task';

export const fetchEventData = async () => {
  try {
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching event data:', error);
    throw new Error('Failed to fetch event data. Please try again later.');
  }
};

export default { fetchEventData };