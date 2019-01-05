export interface Quote {
    bid: number;
    ask: number;
    float: number;
    symbol: string;
    timestamp: number;
}

export interface ConversionResult {
    value: number;
    text: string;
    timestamp: number;
}

export interface MarketStatus {
    market_is_open: boolean;
}

export interface Quota {
    quota_used: number,
    quota_limit: number,
    quota_remaining: number,
    hours_until_reset: number
}