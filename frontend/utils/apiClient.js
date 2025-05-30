export async function apiRequest(url, options = {}) {
  const defaultHeaders = { 'Content-Type': 'application/json' };
  const fetchOptions = {
    headers: { ...defaultHeaders, ...(options.headers || {}) },
    ...options,
  };

  const response = await fetch(url, fetchOptions);
  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || 'Request failed');
  }
  return response.json();
}
