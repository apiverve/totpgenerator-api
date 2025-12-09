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
        /// Example: JBSWY3DPEHPK3PXP
        /// </summary>
        [JsonProperty("secret")]
        public string Secret { get; set; }

        /// <summary>
        /// Number of digits in token (6-8)
        /// Example: 6
        /// </summary>
        [JsonProperty("digits")]
        public string Digits { get; set; }

        /// <summary>
        /// Time period in seconds (1-300)
        /// Example: 30
        /// </summary>
        [JsonProperty("period")]
        public string Period { get; set; }
    }
}
