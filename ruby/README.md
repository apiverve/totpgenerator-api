# TOTP Generator API - Ruby Gem

TOTP Generator creates time-based one-time passwords compatible with authenticator apps using standard TOTP algorithms.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_totpgenerator'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_totpgenerator
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_totpgenerator'

# Initialize the client
client = APIVerve::Totpgenerator::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  secret: "JBSWY3DPEHPK3PXP",
  digits: 6,
  period: 30
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ secret: "JBSWY3DPEHPK3PXP", digits: 6, period: 30 })
  puts response["data"]
rescue APIVerve::Totpgenerator::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Totpgenerator::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Totpgenerator::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/totpgenerator?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/totpgenerator?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/totpgenerator?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
