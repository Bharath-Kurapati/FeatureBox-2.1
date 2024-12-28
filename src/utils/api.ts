interface SubscribeResponse {
  status: 'success' | 'error';
  message?: string;
}

export async function subscribeToNewsletter(email: string): Promise<SubscribeResponse> {
  try {
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbzIg9IzTBSs65euLoOEcOLzpk93izF7t8A5fbBBmNzAsD886kfdbW2ZGtHMz_uE1_YbZg/exec',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
        mode: 'cors',
        credentials: 'omit'
      }
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseText = await response.text();
    
    try {
      return JSON.parse(responseText);
    } catch (error) {
      console.error('Error parsing response:', responseText);
      return {
        status: 'error',
        message: 'Unable to process response'
      };
    }
  } catch (error) {
    console.error('Fetch error:', error);
    return {
      status: 'error',
      message: 'Network error occurred'
    };
  }
}