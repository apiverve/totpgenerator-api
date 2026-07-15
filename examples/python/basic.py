"""
TOTP Generator API - Basic Usage Example

This example demonstrates the basic usage of the TOTP Generator API.
API Documentation: https://docs.apiverve.com/ref/totpgenerator
"""

import os
import requests
import json

API_KEY = os.getenv('APIVERVE_API_KEY', 'YOUR_API_KEY_HERE')
API_URL = 'https://api.apiverve.com/v1/totpgenerator'

def call_totpgenerator_api():
    """
    Make a POST request to the TOTP Generator API
    """
    try:
        # Request body
        request_body &#x3D; {
    &#x27;secret&#x27;: &#x27;JBSWY3DPEHPK3PXP&#x27;,
    &#x27;digits&#x27;: 6,
    &#x27;period&#x27;: 30
}

        headers = {
            'x-api-key': API_KEY,
            'Content-Type': 'application/json'
        }

        response = requests.post(API_URL, headers=headers, json=request_body)

        # Raise exception for HTTP errors
        response.raise_for_status()

        data = response.json()

        # Check API response status
        if data.get('status') == 'ok':
            print('✓ Success!')
            print('Response data:', json.dumps(data['data'], indent=2))
            return data['data']
        else:
            print('✗ API Error:', data.get('error', 'Unknown error'))
            return None

    except requests.exceptions.RequestException as e:
        print(f'✗ Request failed: {e}')
        return None

if __name__ == '__main__':
    print('📤 Calling TOTP Generator API...\n')

    result = call_totpgenerator_api()

    if result:
        print('\n📊 Final Result:')
        print(json.dumps(result, indent=2))
    else:
        print('\n✗ API call failed')
