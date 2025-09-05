export const tweetTemplates: Record<string, string> = {
  Day_High: `🚨 Market Alert: \n Symbol: #\${Symbol} touched its intraday high.\n Momentum building – keep an eye on the next move! CMP #\${SymbolFullName} : \${CMP}`,
  Day_Low: `🚨 Market Alert: \n Symbol: #\${Symbol} dulls at the day’s bottom ⬇️
. \n Caution advised – watch for potential rebounds or further declines! CMP #\${SymbolFullName} : \${CMP}`,
  '2WeekConsecCloseAboveHigh': `✨ Two weeks in a row, \n Symbol: #\${Symbol} ends above previous highs. \n Trend looks strong, sentiment shining! CMP #\${SymbolFullName} : \${CMP}`,
  '2WeekConsecCloseBelowLow': `dulls further ⬇️: \n Symbol: #\${Symbol} Back-to-back closes below prior week’s lows = sellers in control (Week 2nd).. caution advised! CMP #\${SymbolFullName} : \${CMP}`,
  '2DayConsecCloseBelowLow': `⚠️ Caution Ahead: \n Symbol: #\${Symbol} 💹 Consecutive closes under yesterday’s low for 2 days. \n Bearish trend alert – watch for further declines! CMP #\${SymbolFullName} : \${CMP}`,
  '2DayConsecCloseAboveHigh': `🚀 Bullish Momentum: \n Symbol: #\${Symbol} closes above its high for two consecutive days. \n Uptrend confirmed – potential for further gains! CMP #\${SymbolFullName} : \${CMP}`,
  EMA200Bull: `🚀🚨 Technical Alert: \n Symbol: #\${Symbol} crosses 200 EMA.
Key resistance turning into potential support? \n Trend reversal in sight – watch for upward momentum! CMP #\${SymbolFullName} : \${CMP}`,
  EMA200Bear: `⚠️ Bearish Signal: \n Symbol: #\${Symbol} just had a bearish crossover below the EMA 200. \n Downtrend confirmed – caution advised! CMP #\${SymbolFullName} : \${CMP}`,
  EMA100Bull: `🚀 Bullish Signal: \n Symbol: #\${Symbol} just had a bullish crossover above the EMA 100. \n Trend reversal in sight – watch for upward momentum! CMP #\${SymbolFullName} : \${CMP}`,
  EMA100Bear: `⚠️ Bearish Signal: \n Symbol: #\${Symbol} just had a bearish crossover below the EMA 100. \n Downtrend confirmed – caution advised! CMP #\${SymbolFullName} : \${CMP}`,
  '3DayConsecCloseAboveHigh':
    ' 🚀 Strong Bullish Momentum: \n Symbol: #\${Symbol} closes above its high for three consecutive days. \n Uptrend solidifying – potential for significant gains! CMP #\${SymbolFullName} : \${CMP}',
  '3DayConsecCloseBelowLow': `⚠️ Strong Bearish Momentum: \n Symbol: #\${Symbol} closes below its low for three consecutive days. \n Downtrend intensifying – caution strongly advised! CMP #\${SymbolFullName} : \${CMP}`,
  Default: `📊 Market Update: \n Symbol: #\${Symbol} at CMP #\${SymbolFullName} : \${CMP}. \n Stay tuned for more insights!`,
  '52WeekHigh': `🚀 New 52-Week High Alert: \n Symbol: #\${Symbol} just hit a new 52-week high! \n Strong bullish momentum – watch for potential breakout opportunities! CMP #\${SymbolFullName} : \${CMP}`,
  '52WeekLow': `⚠️ New 52-Week Low Alert: \n Symbol: #\${Symbol} just hit a new 52-week low. \n Bearish trend confirmed – exercise caution and watch for potential rebounds! CMP #\${SymbolFullName} : \${CMP}`,
  Overbought: `📈 weekly Overbought Alert: \n Symbol: #\${Symbol} in overbought zone.
Momentum strong, but risk of pullback rises. CMP #\${SymbolFullName} : \${CMP}`,
  Oversold: `📉 Oversold Alert: \n Symbol: #\${Symbol} under pressure!
Weekly oversold levels reached, market testing extremes. CMP #\${SymbolFullName} : \${CMP}`,
  abovePercent10: `🚀 Significant Surge: \n Symbol: #\${Symbol} skyrockets over 10% intraday. Bulls fully in charge. \n Watch for potential breakout opportunities! CMP #\${SymbolFullName} : \${CMP}`,
  abovePercent5: `✨ Solid move!: \n Symbol: #\${Symbol} jumps above 5% gain in a single session. – stay tuned for further developments! CMP #\${SymbolFullName} : \${CMP}`,
  belowPercent10: `⚠️ Major drop: \n Symbol: #\${Symbol} plunges over -10% in a single session. exercise caution and watch for potential rebounds! CMP #\${SymbolFullName} : \${CMP}`,
  belowPercent5: `📉 Sharp Decline: \n Symbol: #\${Symbol} drops over -5% intraday – heavy selling pressure. – stay alert for further developments! CMP #\${SymbolFullName} : \${CMP}`,

  followUpString: ' #StockMarket #Trading #Investing #MarketTrends',
};
