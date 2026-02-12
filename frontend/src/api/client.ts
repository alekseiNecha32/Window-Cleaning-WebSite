const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export interface QuoteData {
  firstName: string;
  lastName: string;
  email: string;
  location: string;
  zipcode: string;
  serviceType: string;
  message?: string;
}

export interface ContactData {
  name: string;
  email: string;
  message: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}

export async function submitQuote(data: QuoteData): Promise<ApiResponse> {
  const formData = new FormData();
  formData.append('first_name', data.firstName);
  formData.append('last_name', data.lastName);
  formData.append('email', data.email);
  formData.append('location', data.location);
  formData.append('zipcode', data.zipcode);
  formData.append('service_type', data.serviceType);
  if (data.message) {
    formData.append('message', data.message);
  }

  const response = await fetch(`${API_URL}/api/quotes`, {
    method: 'POST',
    body: formData,
  });

  return response.json();
}

export async function submitContact(data: ContactData): Promise<ApiResponse> {
  const response = await fetch(`${API_URL}/api/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response.json();
}
