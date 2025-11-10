---
title: "Equity Markets for Dummies | Introduction"
date: 2025-10-01
description: A comprehensive exploration of equity markets, fundamental analysis, technical trading strategies, and investment principles for navigating the Indian stock market.
categories: ["Experimenting With Personal Finance"]
tags: ['equity-markets', 'fundamental-analysis', 'technical-analysis']
pin: true
---

The democratization of investing is beautiful—anyone with ₹500 can now own a piece of India's best companies. But this accessibility is a double-edged sword. The same app that lets you buy blue-chips in seconds also makes it dangerously easy to YOLO your savings into penny stocks at 3 AM. The tools have evolved, but the fundamentals haven't: *know what you own, understand why you own it, and have the patience to let quality compound*.

## Attribution

Before we start, I want to make sure you I am not a SEBI certified analyst or so called 'expert' in the stock market from a finance background. I am a software engineer, trying to figure out the stock market, so I don't have to rely on the mercy of Mutual Fund Houses and other financial institutions. All that I have learned is from my own research(from various sources) and experience(good and bad). Here is a list of resources and tools that I found useful out of all the garbage and scamster.

### Sources

- [LLA](https://www.youtube.com/labourlawadvisor)
- [Varsity](https://zerodha.com/varsity/)
- [SEBI](https://sebi.gov.in)
- [Rachana Ranade](https://www.youtube.com/@CARachanaRanade)

### Tools
- [Moneycontrol](https://moneycontrol.com)
- [TickerTape](https://www.tickertape.in/)

## Market Session Structure

**Daily Trading Schedule:**

**1. Pre-Opening Session (9:00 AM - 9:15 AM)**
   - **9:00 - 9:07**: Order Placement Phase - Place your orders
   - **9:08 - 9:11**: Order Matching Phase - System matches buy/sell orders
   - **9:12 - 9:15**: Buffer Period - Final price stabilization

**2. Regular Trading Hours (9:15 AM - 3:30 PM)**
   - Main trading window for retail investors
   - All buying and selling happens during this time

**3. Post-Market Session (3:30 PM - 4:00 PM)**
   - Primarily for brokers to settle trades
   - Limited retail participation

**4. After Market Orders - AMO (4:00 PM - 9:00 AM next day)**
   - Place orders when markets are closed
   - These orders get queued and execute at 9:15 AM next morning

> **Note:** This 15-minute window absorbs overnight news and prevents wild price swings at market open. It's like a pressure valve that establishes fair opening prices.

Imagine if markets opened directly at 9:00 AM. Overnight, major news breaks:
- Company announces fantastic results at 11 PM
- Or global markets crash while we're sleeping
- Or RBI announces surprise rate cut on a weekend/holiday

Without pre-opening, big institutional traders (who monitor news 24/7) place orders instantly at 9:00 AM, while regular retail investors (you and me) are still processing the news. This results in stock opening at extreme price (very high or very low), and by the time you react, the opportunity is gone and you end up buying/selling at unfair prices.

### How Pre-Opening saves retail investors

**Phase 1: Order Collection (9:00-9:07 AM)**
- Everyone places orders - institutions, retail traders, everyone
- No trades execute yet, just orders collected
- You have 7 minutes to process overnight news and place your order

**Phase 2: Order Matching (9:08-9:11 AM)**
- System runs an algorithm to find equilibrium price
- Calculates: "At what price can maximum shares be traded?"
- All buy and sell orders are matched at this SINGLE price

**Phase 3: Buffer Period (9:12-9:15 AM)**
- Opening price is displayed but frozen
- No new orders can be placed/modified
- Everyone can see where market will open

**Outcome:** Level playing field - your 9:02 AM order has same priority as institutional order. No one gets advantage, everyone gets same opening price.

> **Note:** Pre-opening is like a "democracy vote" for opening price instead of a "fastest finger first" game. It protects small investors from being at a disadvantage against institutional players with faster systems and 24/7 news monitoring.

### Trading Days & Holidays

**Markets are OPEN:** 
- Monday to Friday (9:15 AM - 3:30 PM)
- Special Session - Muhurat Trading: Diwali evening (1 hour, around 6-7 PM).
- Orders placed on weekends/holidays queue as AMO and execute next working day at 9:15 AM.

**Markets are CLOSED:** 
- Weekends (Saturday & Sunday)
- National holidays and major festivals (Republic Day, Independence Day, Holi, Diwali, Christmas, etc.)

## Settlement Cycle

Indian equity markets operate on a **T+1 settlement cycle**, where trades execute immediately but settlement occurs one working day later.

**Settlement Examples:**
- The "T" stands for Trade date, "+1" means add 1 working day
- Trade on Monday → Settlement on Tuesday
- Trade on Friday → Settlement on Monday (skips weekend)

> **Note:** India moved from T+2 to T+1 settlement(and T+0 for select stocks) in January 2023, making it one of the fastest settlement cycles globally. [Read more](https://www.sebi.gov.in/legal/circulars/dec-2024/enhancement-in-the-scope-of-optional-t-0-rolling-settlement-cycle-in-addition-to-the-existing-t-1-settlement-cycle-in-equity-cash-markets_89443.html).

## Types of Markets

| Feature | Primary Market | Secondary Market |
|---------|----------------|------------------|
| **Purpose** | To raise fresh capital | To trade existing securities |
| **Type of Offering** | IPO (first-time) or FPO (additional capital) | Already-listed shares |
| **Transaction Between** | Company ↔ Investor | Investor ↔ Investor |
| **Price Discovery** | Book-building process | Market forces (demand & supply) |

**Example:**
- **Primary Market:** Zomato IPO (2021) - Company [raised ₹9,375 Cr](https://www.chittorgarh.com/ipo/zomato-ipo/1126/) directly from investors
- **Secondary Market:** You buying Zomato shares today on NSE - Money goes to the seller (and not Zomato)

## Types of Accounts

To invest in stocks, you need three interconnected accounts:

**1. Trading Account** - Your execution gateway where buy and sell orders are placed through your broker.

**2. Demat Account** - Digital vault storing your securities in dematerialized form, maintained by depositories (NSDL or CDSL).

**3. Savings Account** - Fund source for purchases and destination for sale proceeds.

> **Note**: Most brokers now offer 3-in-1 accounts integrating all three components for seamless transactions. Opening both the demat and trading account with the same broker ensures smooth and seamless transactions. You can buy/sell stocks and have them automatically credited or debited in your demat account without manual transfers.

## Types of Orders

| Order Type | What It Is | Execution | Example | When to Use | Risk/Note |
|------------|-----------|-----------|---------|-------------|-----------|
| **Market Order** | Executes immediately at current market price | Instant execution, price may vary | Reliance at ₹2,500 → Order executes at ₹2,499-₹2,501 | Need to enter/exit quickly, can't miss opportunity | Slippage - actual price may differ from screen price in volatile markets |
| **Limit Order** | You set maximum buy price or minimum sell price | Executes ONLY at your price or better | TCS at ₹3,500, you place limit at ₹3,450 → Executes only if TCS drops to ₹3,450 or below | Patient, want specific price point, not urgent | May never execute if price doesn't reach your limit |
| **Stop Loss Market** | Safety net - auto sells if price falls to trigger | Triggers at set price, sells at current market price | Buy at ₹1,600, trigger at ₹1,520 → Hits ₹1,520 → Sells immediately at market | Protect from bigger losses, guaranteed exit | Execution guaranteed but final price uncertain (could be ₹1,520 or ₹1,515) |
| **Stop Loss Limit** | Safety net with price range control | Triggers at set price, sells only within your price range | Trigger ₹95, Limit ₹93 → Hits ₹95 → Sells only between ₹95-₹93 | Want loss protection + price control | If price crashes past your limit instantly (₹95→₹92), order won't execute |
| **IOC (Immediate or Cancel)** | Execute now or cancel completely | Executes immediately whatever is available, cancels rest | Want to buy 1,000 shares, only 300 available → Gets 300, cancels 700 | Don't want partial fills sitting in order book | All-or-nothing execution at current moment |
| **GTC (Good Till Cancelled)** | Order stays active until filled or manually cancelled | Remains in system for days/weeks | Place limit order on Monday → Stays active till Friday or until you cancel | Long-term price targets, patient investing | Remember to cancel manually or it stays indefinitely |
| **Disclosed Quantity** | Large order showing only small portion to market | Shows small quantity, auto-refills as it executes | Want 10,000 shares but show only 500 at a time | Large orders without moving market price | Prevents tipping off other traders about your big position |

## Price Movements

### Gap Opening

Markets rarely open exactly where they closed. **After-market orders** accumulate overnight, creating supply-demand imbalances.

**Gap Up Opening** - Opening price exceeds previous close, indicating positive overnight sentiment.

**Gap Down Opening** - Opening price falls below previous close, signaling negative overnight news.

## Circuit Breakers

Price band limits preventing extreme single-day volatility, typically set at 5%, 10%, or 20% bands.

**Common Circuit Limits:**
- **5% circuit** - Large-cap stocks
- **10% circuit** - Mid-cap stocks
- **20% circuit** - Small-cap and volatile stocks

### Market-Wide Circuit Breakers (Index Level)

Beyond individual stocks, NSE and BSE have **market-wide circuit breakers** that halt ALL trading when indices fall/rise sharply:

**Index Circuit Breaker Levels:**

| Change ffrom Previous Close | Action | Trading Halt Duration |
|-------------------------------|--------|----------------------|
| **10% change** | 🟡 Level 1 Circuit | 45 minutes |
| **15% change** | 🟠 Level 2 Circuit | 1 hour 45 minutes |
| **20% change** | 🔴 Level 3 Circuit | Rest of the day |

**Time-Based Rules:**
- If 10% circuit hit **before 1:00 PM** → 45-minute halt
- If 10% circuit hit **after 2:30 PM** → No halt

### Instances when market circuit breakers were hit

**2009 Lok Sabha Election Results**
- **Impact:** SENSEX locked at 14,272.62(+17.24%), NIFTY locked at 4,308.05(+17.33%). 
- **Reason:** UPA II returned to power with better majority, no longer dependent on the Left.

**COVID-19 Crash (March 2020)**
- **Impact:** SENSEX crashed 13.15%, NIFTY down 12.98%. Level 2 (15%) circuit breaker triggered
- **Reason:** Global pandemic panic, nationwide lockdown announced

**Harshad Mehta Scam (1992)**
- **Impact:** SENSEX plunged 12.77%
- **Reason:** Securities scam exposure, massive manipulation uncovered

**Global Financial Crisis (2008)**
- **Impact:** 10%+ crashes on multiple days
- **Reason:** Lehman Brothers collapse, global banking crisis

> **Note:** Circuit breakers protect the entire market from panic selling or euphoria. They give investors time to think rationally rather than selling/buying in fear. Sharp rallies often followed by profit-booking by big players at the expense of retail investors.

## Face Value vs Market Value

**Face Value** - Nominal value printed on share certificate, used for dividend calculations and corporate actions.

**Market Value** - Current trading price determined by supply-demand dynamics.

**Example:** MRF face value = ₹10, market value = ₹1,55,000+

## Corporate Actions

<figure class="align-center">
  <img src="/images/equity/infosys.png" alt="loading">
  <figcaption>Historical data of Infosys</figcaption>
</figure>

The chart above shows Infosys stock price growing from ₹95 to ₹1,500 over 30 years—a 15x return on paper. However, this only reflects price appreciation and ignores the massive impact of corporate actions like stock splits and bonus issues that multiplied shareholders' actual holdings.

### Dividends

It is the distribution of profits to shareholders based on face value (not market value). You can assume this as 'interest' earned on your long term investment.

**Important Dates:**
- **Announcement Date**: Corporate action declared
- **Record Date**: Shareholders on this date receive benefits
- **Ex-Date**: Trades after this date don't qualify for announced benefits

### Stock Split

When the company divides its shares into a larger number of shares, which increases the number of outstanding shares and reduces the price per share. For example, if you have 100 shares of a company @ Rs 50 per share and it splits 1:2. You will now have 200 shares @ Rs 25 per share. This is usually done to make the stock more affordable and attractive to small/retail investors.

> **Note:** Not all companies choose to split shares. MRF, for instance, hasn't split its stock since 1975—resulting in a current price of ₹1,55,000 per share. This deliberately high price acts as a barrier to speculative trading, attracting only experienced, long-term investors, who aren't affected by short-term market volatility. This strategy maintains price stability and cultivates an exclusivity around the stock.

### Bonus Share 

When a company issues additional shares to existing shareholders drawn from accumulated reserves or profits. For example, if you own 100 shares of a company and it declares a 1:1 bonus, you'll receive 100 additional shares—doubling your holding to 200 shares at no cost. This is typically done to reward loyal shareholders, improve liquidity, and signal strong financial health without affecting the company's overall market capitalization.

> **Note:** Unlike dividends, bonus shares are tax-free when received(only taxed upon sale). Companies with strong reserves often prefer bonus issues over cash dividends to conserve capital for growth while still rewarding shareholders. Indian IT giants like Infosys, TCS, and Wipro have consistently issued bonus shares over decades, significantly multiplying early investors' holdings.

### Effects on dividends

Bonus shares and stock splits multiply the number of shares you own. While individual dividend per share may reduce proportionally, your total dividend income remains the same initially. However, when companies raise dividends in the future, you benefit from a much larger shareholding—turning long term investments into substantial passive income streams over decades. 

Now, coming back to the question, how much you would have earned if you had invested ₹4,750 in Infosys at IPO in 1993?

| Date | Event | Ratio | Shares Owned |
|------|-------|-------|--------------|
| **1993** | **IPO - ₹95/share** | - | **50** |
| 1994 | Bonus Issue | 1:1 | 100 |
| 1997 | Bonus Issue | 1:1 | 200 |
| 1999 | Bonus Issue | 1:1 | 400 |
| 1999 | Stock Split | 2:1 | 800 |
| 2004 | Bonus Issue | 3:1 | 3,200 |
| 2006 | Bonus Issue | 1:1 | 6,400 |
| 2014 | Bonus Issue | 1:1 | 12,800 |
| 2015 | Bonus Issue | 1:1 | 25,600 |
| 2018 | Bonus Issue | 1:1 | 51,200 |

It would have grown to **₹7.64 Crores** - a CAGR of **26%** over 32 years. Through 8 bonus issues and 1 stock split, your original 50 shares would have multiplied **1,024 times** to 51,200 shares. Beyond capital appreciation, these shares would generate **₹23 Lakhs annually in dividends alone** at 2025's dividend rate of ₹45 per share.

We will cover this in more detail in the next section. But still want to give a reality check - none of us would have the patience to hold on to the stock for 30 years. If you would study the chart, you would notice that during the dot com bubble burst there was bad peroid for the IT industry as a whole. Infosys(along with all the other IT giants) also took a major hit and dropped to ₹10. At this time, you(and me) would have exited from the stock and booked heavy losses. Assuming that we can maybe we recover our original capital by becoming intraday trader or even beter, by entering into F&O segemnt of the market. 

These "legends" didn't build wealth through luck or shortcuts—they built it through patience, research, and conviction:

**Peter Lynch** managed billions for Fidelity with a simple philosophy: invest in what you know. He bought Dunkin' Donuts because his kids loved it, studied Taco Bell because he noticed long queues, and crushed the market—not with complex algorithms or insider tips, but by **actually understanding the businesses** he owned.

**Rakesh Jhunjhunwala** (Big Bull of India) bought Titan at ₹3 in 2002-2003 when everyone thought watches were dead (mobile phones showed time). He saw Indians' love for jewelry and believed in Tanishq's potential. Held through multiple corrections. Titan peaked at ₹3,000+ before his passing—a **1,000x return**. He didn't exit when it doubled or tripled; he held for 20 years because the business kept improving.

**Ramdeo Agrawal** (Motilal Oswal) identified PI Industries in early 2000s when it was a ₹20 stock. Studied the agrochemicals space, understood the export opportunity, and watched management execution year after year. Held through volatility. Stock crossed ₹4,000—a **200x return** over 18 years. No fancy tools, just reading annual reports and understanding competitive moats.

**Ashish Kacholia** built wealth in mid-caps by spotting Mold-Tek Packaging at ₹35 when nobody cared about plastic packaging. Studied the business model, met management, understood the niche. Held through market crashes. Stock touched ₹900+—a **25x return**. His edge? Deep research on boring businesses others ignored.

The common thread? They all did their homework, understood what they owned, and had the patience to sit through market tantrums. No WhatsApp tips, no telegram channels, no "hot stock of the week"—just boring old fundamental research and conviction.


## Investor Categories

| Category | Full Form | Threshold/Definition | Examples |
|----------|-----------|---------------------|----------|
| **RII** | Retail Individual Investors | Investment < ₹2 lakhs in IPOs | You, me, salaried professionals, small traders |
| **HNI** | High Net Worth Individuals | Investment > ₹2 lakhs in IPOs | Business owners, wealthy individuals, family offices |
| **DII** | Domestic Institutional Investors | Indian institutions managing pooled money | SBI Mutual Fund, LIC, HDFC AMC, ICICI Prudential, UTI |
| **FII/FPI** | Foreign Institutional/Portfolio Investors | International investors bringing foreign capital | Government of Singapore, Europacific Growth Fund |

## Market Capitalization Segments

**Market Cap Formula:**

**Market Capitalization = Total Outstanding Shares × Current Market Price**

**Classification:**
- **Large Caps**: Market cap > ₹10,000 crores (Blue-chip companies)
- **Mid Caps**: Market cap between ₹500 - ₹10,000 crores
- **Small Caps**: Market cap < ₹500 crores

### Market Indices

**NIFTY** (NSE) - Top 50 companies across sectors (National Fifty)

**SENSEX** (BSE) - Top 30 companies (Sensitivity Index)

**SX40** (MSE) - Top 40 companies (Securities Exchange 40)

**Free Float Market Cap** calculation excludes promoter holdings:

**Understanding Free Float Market Cap:**

| Component | Value | Explanation |
|-----------|-------|-------------|
| Total Shares | 1,00,00,000 | All shares issued by company |
| Promoter Holding | 60% | Locked with founders/promoters |
| Public Holding | 40% | Available for trading |
| Freely Floating Shares | 40,00,000 | Only these count |
| Market Price | ₹500 | Current trading price |
| **Free Float Market Cap** | **₹200 Crores** | 40,00,000 × ₹500 |

**Why it matters:**
- Index calculations use free float, not total market cap
- More accurate representation of tradable value
- Promoter shares aren't available for buying/selling
- Higher free float = Better liquidity

## Short Selling Mechanics

**Short selling** enables profit from falling prices by selling borrowed shares.

**How Short Selling Works:**

**The Process:**
1. **Morning 9:30 AM** - You think HDFC Bank (currently ₹1,600) will fall today
2. **You sell first** - Sell 1000 shares at ₹1,600 (you don't own them yet!)
3. **Market falls** - Price drops to ₹1,550 by afternoon
4. **You buy back** - Buy 1000 shares at ₹1,550
5. **You profit** - Sell high (₹1,600), buy low (₹1,550) = ₹50 profit per share(₹50,000 total profit)

**Critical Rules:**
- **Must square off same day** - Buy back before 3:30 PM
- **If you forget** - Shares go to auction market (3:30-4:00 PM)
- **Auction consequences:**
  - Any loss = You pay
  - Any profit = Goes to [IEPF](https://iepfa.gov.in), not you!

**When to short sell:**
- You're bearish (expect market/stock to fall)
- Only for intraday trading
- Good for volatile falling markets

> **Warning:** Short selling is risky - losses can be unlimited if stock rises sharply. Don't try it unless you're sure about what you're doing.

## Tax Implications

| Type | Holding Period | Tax Rate |
|------|----------------|----------|
| **LTCG** | > 1 year | 12.5% |
| **STCG** | ≤ 1 year | 20% |
| **Dividend** | Any | Added to income, taxed at slab rate |
