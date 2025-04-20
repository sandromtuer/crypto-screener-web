
export default function handler(req, res) {
  res.status(200).json([
    { symbol: "BTC", price: 65500, ma20: 65450, ma200: 65200, rsi: 61, volume: "3.2B", trend: "up" },
    { symbol: "ETH", price: 3100, ma20: 3080, ma200: 3120, rsi: 48, volume: "1.5B", trend: "down" },
    { symbol: "BNB", price: 580, ma20: 581, ma200: 579, rsi: 50, volume: "900M", trend: "neutral" }
  ]);
}
