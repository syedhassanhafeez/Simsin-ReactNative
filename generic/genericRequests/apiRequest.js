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
    let response;
    if (requestMethod === 'GET') {
      response = await fetch(`${baseURL}${requestUrl}`, {
        method: requestMethod,
        headers: {
          'Content-Type': 'application/json',
          ...requestHeaders,
        },
      });
    } else {
      response = await fetch(`${baseURL}${requestUrl}`, {
        method: requestMethod,
        headers: {
          'Content-Type': 'application/json',
          ...requestHeaders,
        },
        body: JSON.stringify(requestBody),
      });
    }
    let result = await response.json();
    console.log(`${baseURL}${requestUrl} url result === `, result);
    return result;
  } catch (ex) {
    console.log(`${baseURL}${requestUrl} ex in api === ${ex}`);
    return ex;
  }
}

export {apiRequest};
