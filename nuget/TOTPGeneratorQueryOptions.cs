using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.TOTPGenerator
{
    /// <summary>
    /// Query options for the TOTP Generator API
    /// </summary>
    public class TOTPGeneratorQueryOptions
    {
        /// <summary>
        /// Base32-encoded shared secret
        /// </summary>
        [JsonProperty("secret")]
        public string Secret { get; set; }

        /// <summary>
        /// Number of digits in token
        /// </summary>
        [JsonProperty("digits")]
        public int? Digits { get; set; }

        /// <summary>
        /// Time period in seconds
        /// </summary>
        [JsonProperty("period")]
        public int? Period { get; set; }

        /// <summary>
        /// HMAC algorithm: SHA1 (default, what most authenticator apps use), SHA256 or SHA512
        /// </summary>
        [JsonProperty("algorithm")]
        public string Algorithm { get; set; }

        /// <summary>
        /// Unix time in seconds to use instead of now
        /// </summary>
        [JsonProperty("time")]
        public int? Time { get; set; }
    }
}
