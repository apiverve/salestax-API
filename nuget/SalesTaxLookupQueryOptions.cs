using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.SalesTaxLookup
{
    /// <summary>
    /// Query options for the Sales Tax Lookup API
    /// </summary>
    public class SalesTaxLookupQueryOptions
    {
        /// <summary>
        /// The zip code for which you want to get the sales tax rate (e.g., 90210)
        /// Example: 90210
        /// </summary>
        [JsonProperty("zip")]
        public string Zip { get; set; }
    }
}
