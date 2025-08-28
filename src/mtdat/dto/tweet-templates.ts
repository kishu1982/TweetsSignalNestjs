export const tweetTemplates: Record<string, string> = {
  Day_High: `🚨 Market Alert: \n Symbol: #\${Symbol} touched its intraday high.\n Momentum building – keep an eye on the next move! CMP: \${CMP}`,
  Day_Low: `⚠️ Market Alert: \n Symbol: #\${Symbol} hit its intraday low. \n Caution advised – watch for potential rebounds or further declines! CMP: \${CMP}`,
  '2WeekConsecCloseAboveHigh': `✨ Two weeks in a row, \n Symbol: #\${Symbol} ends above previous highs. \n Trend looks strong, sentiment shining! CMP: \${CMP}`,
  '2WeekConsecCloseBelowLow': `⚠️ Warning Signal: \n Symbol: #\${Symbol} ends below previous lows for two consecutive weeks. \n Bearish trend alert – caution advised! CMP: \${CMP}`,
  '2DayConsecCloseBelowLow': `⚠️ Caution Signal: \n Symbol: #\${Symbol} closes below its low for two consecutive days. \n Bearish trend alert – watch for further declines! CMP: \${CMP}`,
  '2DayConsecCloseAboveHigh': `🚀 Bullish Momentum: \n Symbol: #\${Symbol} closes above its high for two consecutive days. \n Uptrend confirmed – potential for further gains! CMP: \${CMP}`,
  EMA200Bull: `🚀 Bullish Signal: \n Symbol: #\${Symbol} just had a bullish crossover above the EMA 200. \n Trend reversal in sight – watch for upward momentum! CMP: \${CMP}`,
  EMA200Bear: `⚠️ Bearish Signal: \n Symbol: #\${Symbol} just had a bearish crossover below the EMA 200. \n Downtrend confirmed – caution advised! CMP: \${CMP}`,
  EMA100Bull: `🚀 Bullish Signal: \n Symbol: #\${Symbol} just had a bullish crossover above the EMA 100. \n Trend reversal in sight – watch for upward momentum! CMP: \${CMP}`,
  EMA100Bear: `⚠️ Bearish Signal: \n Symbol: #\${Symbol} just had a bearish crossover below the EMA 100. \n Downtrend confirmed – caution advised! CMP: \${CMP}`,
  '3DayConsecCloseAboveHigh':
    ' 🚀 Strong Bullish Momentum: \n Symbol: #\${Symbol} closes above its high for three consecutive days. \n Uptrend solidifying – potential for significant gains! CMP: \${CMP}',
  '3DayConsecCloseBelowLow': `⚠️ Strong Bearish Momentum: \n Symbol: #\${Symbol} closes below its low for three consecutive days. \n Downtrend intensifying – caution strongly advised! CMP: \${CMP}`,
  Default: `📊 Market Update: \n Symbol: #\${Symbol} at CMP: \${CMP}. \n Stay tuned for more insights!`,
  followUpString: ' #StockMarket #Trading #Investing #MarketTrends',
};
