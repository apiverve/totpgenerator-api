/**
 * TOTP Generator API - Basic Usage Example
 *
 * This example demonstrates the basic usage of the TOTP Generator API.
 * API Documentation: https://docs.apiverve.com/ref/totpgenerator
 */

const API_KEY = process.env.APIVERVE_API_KEY || 'YOUR_API_KEY_HERE';
const API_URL = 'https://api.apiverve.com/v1/totpgenerator';

/**
 * Make a POST request to the TOTP Generator API
 */
async function callTOTPGeneratorAPI() {
  try {
    // Request body
    const requestBody &#x3D; {
    &quot;secret&quot;: &quot;JBSWY3DPEHPK3PXP&quot;,
    &quot;digits&quot;: 6,
    &quot;period&quot;: 30
};

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    // Check if response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Check API response status
    if (data.status === 'ok') {
      console.log('✓ Success!');
      console.log('Response data:', data.data);
      return data.data;
    } else {
      console.error('✗ API Error:', data.error || 'Unknown error');
      return null;
    }

  } catch (error) {
    console.error('✗ Request failed:', error.message);
    return null;
  }
}

// Run the example
callTOTPGeneratorAPI()
  .then(result => {
    if (result) {
      console.log('\n📊 Final Result:');
      console.log(JSON.stringify(result, null, 2));
    }
  });
