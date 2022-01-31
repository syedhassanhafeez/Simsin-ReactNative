const baseURL = 'URL';

async function apiRequest(
  requestUrl,
  requestMethod,
  requestHeaders,
  requestBody,
) {
  try {
    const response = await fetch(`${baseURL}/${requestUrl}`, {
      method: requestMethod,
      headers: {
        'Content-Type': 'application/json',
        ...requestHeaders,
      },
      body: JSON.stringify(requestBody),
    });
    let result = await response.json();
    return result;
  } catch (ex) {
    return ex;
  }
}

export {apiRequest};
