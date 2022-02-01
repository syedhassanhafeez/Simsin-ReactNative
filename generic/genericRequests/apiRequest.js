const baseURL = 'http://test.arwaj.com.pk:8085/sims_in/api';

async function apiRequest(
  requestUrl,
  requestMethod,
  requestHeaders,
  requestBody,
) {
  try {
    console.log(`url === ${baseURL}${requestUrl}`);
    console.log(`requestMethod === ${requestMethod}`);
    console.log(`requestHeaders === ${requestHeaders}`);
    console.log(`requestBody === ${requestBody}`);
    const response = await fetch(`${baseURL}${requestUrl}`, {
      method: requestMethod,
      headers: {
        'Content-Type': 'application/json',
        ...requestHeaders,
      },
      body: JSON.stringify(requestBody),
    });
    let result = await response.json();
    console.log('result === ', result);
    return result;
  } catch (ex) {
    console.log('ex in api === ', ex);
    return ex;
  }
}

export {apiRequest};
