const API_KEY = "7t8qiHXYkywevc1Sa1cOzXIr3GNYujYB";
const API_URL = "https://forex.1forge.com/1.0.3";

export const apiEndPoints = {
	chart: {
		getQuotes: function(pairs: string){
				return `${API_URL}/quotes?pairs=${pairs}&api_key=${API_KEY}`;
		},
		getConvert: function(params: any) {
				let {from, to ,quantity} = params;
				return `${API_URL}/convert?from=${from}&to=${to}&quantity=${quantity}&api_key=${API_KEY}`;
		},
		getMarketStatus: `${API_URL}/market_status?api_key=${API_KEY}`,
		getQuota: `${API_URL}/quota?api_key=${API_KEY}`,
	},
	symbol: {
		getSymbols: `${API_URL}/symbols?api_key=${API_KEY}`
	}
}