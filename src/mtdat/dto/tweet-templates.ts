export const tweetTemplates: Record<string, string> = {
  Day_High: `🚨 Market Alert: \n Symbol: #\${Symbol} touched its intraday high.\n Momentum building – keep an eye on the next move! CMP: \${CMP}`,
  Day_Low: `🚨 Market Alert: \n Symbol: #\${Symbol} dulls at the day’s bottom ⬇️
. \n Caution advised – watch for potential rebounds or further declines! CMP: \${CMP}`,
  '2WeekConsecCloseAboveHigh': `✨ Two weeks in a row, \n Symbol: #\${Symbol} ends above previous highs. \n Trend looks strong, sentiment shining! CMP: \${CMP}`,
  '2WeekConsecCloseBelowLow': `dulls further ⬇️: \n Symbol: #\${Symbol} Back-to-back closes below prior week’s lows = sellers in control (Week 2nd).. caution advised! CMP: \${CMP}`,
  '2DayConsecCloseBelowLow': `⚠️ Caution Ahead: \n Symbol: #\${Symbol} 💹 Consecutive closes under yesterday’s low for 2 days. \n Bearish trend alert – watch for further declines! CMP: \${CMP}`,
  '2DayConsecCloseAboveHigh': `🚀 Bullish Momentum: \n Symbol: #\${Symbol} closes above its high for two consecutive days. \n Uptrend confirmed – potential for further gains! CMP: \${CMP}`,
  EMA200Bull: `🚀🚨 Technical Alert: \n Symbol: #\${Symbol} crosses 200 EMA.
Key resistance turning into potential support? \n Trend reversal in sight – watch for upward momentum! CMP: \${CMP}`,
  EMA200Bear: `⚠️ Bearish Signal: \n Symbol: #\${Symbol} just had a bearish crossover below the EMA 200. \n Downtrend confirmed – caution advised! CMP: \${CMP}`,
  EMA100Bull: `🚀 Bullish Signal: \n Symbol: #\${Symbol} just had a bullish crossover above the EMA 100. \n Trend reversal in sight – watch for upward momentum! CMP: \${CMP}`,
  EMA100Bear: `⚠️ Bearish Signal: \n Symbol: #\${Symbol} just had a bearish crossover below the EMA 100. \n Downtrend confirmed – caution advised! CMP: \${CMP}`,
  '3DayConsecCloseAboveHigh':
    ' 🚀 Strong Bullish Momentum: \n Symbol: #\${Symbol} closes above its high for three consecutive days. \n Uptrend solidifying – potential for significant gains! CMP: \${CMP}',
  '3DayConsecCloseBelowLow': `⚠️ Strong Bearish Momentum: \n Symbol: #\${Symbol} closes below its low for three consecutive days. \n Downtrend intensifying – caution strongly advised! CMP: \${CMP}`,
  Default: `📊 Market Update: \n Symbol: #\${Symbol} at CMP: \${CMP}. \n Stay tuned for more insights!`,
  '52WeekHigh': `🚀 New 52-Week High Alert: \n Symbol: #\${Symbol} just hit a new 52-week high! \n Strong bullish momentum – watch for potential breakout opportunities! CMP: \${CMP}`,
  '52WeekLow': `⚠️ New 52-Week Low Alert: \n Symbol: #\${Symbol} just hit a new 52-week low. \n Bearish trend confirmed – exercise caution and watch for potential rebounds! CMP: \${CMP}`,
  Overbought: `📈 weekly Overbought Alert: \n Symbol: #\${Symbol} in overbought zone.
Momentum strong, but risk of pullback rises. CMP: \${CMP}`,
  Oversold: `📉 Oversold Alert: \n Symbol: #\${Symbol} under pressure!
Weekly oversold levels reached, market testing extremes. CMP: \${CMP}`,
  abovePercent10: `🚀 Significant Surge: \n Symbol: #\${Symbol} surges over 10% in a day! \n Strong bullish momentum – watch for potential breakout opportunities! CMP: \${CMP}`,
  abovePercent5: `📈 Notable Gain: \n Symbol: #\${Symbol} rises over 5% in a day! \n Positive momentum – stay tuned for further developments! CMP: \${CMP}`,
  belowPercent10: `⚠️ Sharp Decline: \n Symbol: #\${Symbol} drops over 10% in a day. \n Bearish trend confirmed – exercise caution and watch for potential rebounds! CMP: \${CMP}`,
  belowPercent5: `📉 Notable Drop: \n Symbol: #\${Symbol} falls over 5% in a day. \n Negative momentum – stay alert for further developments! CMP: \${CMP}`,

  followUpString: ' #StockMarket #Trading #Investing #MarketTrends',
};
