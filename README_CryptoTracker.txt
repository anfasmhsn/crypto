# CryptoTracker
A sleek cryptocurrency price tracker & dashboard  
Live Demo: https://crypto-track-laxb.vercel.app/

## Project Overview
CryptoTracker is a responsive web app that allows users to track real-time cryptocurrency prices, view historical charts, and explore individual coin details. Built for crypto enthusiasts and traders who want a clean and fast way to monitor the crypto market.

## Key Features
- Real-time price updates for major cryptocurrencies
- Historical price charts (daily/weekly/monthly)
- Fiat currency conversion (USD, EUR, INR, etc.)
- Search functionality for coins
- Clean UI with dark mode support
- Hosted on Vercel

## Tech Stack
- Framework: React / Next.js
- Language: JavaScript / TypeScript
- Styling: Tailwind CSS
- API: CoinGecko (or similar public API)
- Hosting: Vercel

## Installation
1. Clone the repository  
   ```bash
   git clone https://github.com/<your-username>/<your-repo>.git
   cd <your-repo>
   ```

2. Install dependencies  
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file and add the following:
   ```bash
   NEXT_PUBLIC_CRYPTO_API_URL=https://api.coingecko.com/api/v3
   ```

4. Run locally  
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000

## Deployment
Push to the main branch; Vercel will automatically deploy the app.

## Folder Structure
/components - UI Components  
/pages - Next.js Pages  
/styles - CSS/Tailwind styles  
/utils - Helper functions  
/public - Static assets

## Future Enhancements
- Add portfolio tracking and watchlists  
- WebSocket-based live updates  
- Price alerts and notifications  
- PWA and offline mode  

## License
Licensed under MIT License.

## Contact
Maintainer: <anfasmhsn>  
GitHub: https://github.com/<anfasmhsn>  
Email: <anfasmohasin@gmail.com>  
