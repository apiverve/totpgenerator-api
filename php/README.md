# TOTP Generator API - PHP Package

TOTP Generator creates time-based one-time passwords compatible with authenticator apps using standard TOTP algorithms.

## Installation

Install via Composer:

```bash
composer require apiverve/totpgenerator
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Totpgenerator\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute([
    'secret' => 'JBSWY3DPEHPK3PXP',
    'digits' => 6,
    'period' => 30
]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Totpgenerator\Client;
use APIVerve\Totpgenerator\Exceptions\APIException;
use APIVerve\Totpgenerator\Exceptions\ValidationException;

try {
    $response = $client->execute(['secret' => 'JBSWY3DPEHPK3PXP', 'digits' => 6, 'period' => 30]);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "token": "935324",
    "digits": 6,
    "period": 30,
    "timeRemaining": 25,
    "expiresAt": "2025-12-16T22:31:00Z"
  }
}
```

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/totpgenerator?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/totpgenerator?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/totpgenerator?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
