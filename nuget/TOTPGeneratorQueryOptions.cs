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
    }
}
