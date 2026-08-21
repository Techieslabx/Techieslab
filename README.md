# Techies Lab Website V2

## Files
- `index.html` — main website
- `style.css` — responsive design
- `script.js` — product ordering, bank-transfer flow and Paystack checkout
- `thank-you.html` — return/next-step page
- `assets/techies-lab-logo.jpg` — supplied Techies Lab logo

## GitHub upload
Upload the contents of this folder directly to the root of the existing repository:
- `index.html`
- `style.css`
- `script.js`
- `thank-you.html`
- `assets/techies-lab-logo.jpg`

Do not upload the ZIP file as the only repository file.

## Paystack
The site uses the live public key supplied by the owner. A Paystack public key can be exposed in browser-side checkout code. Never put a Paystack secret key in GitHub or browser JavaScript.

### Important production limitation
A static GitHub Pages website cannot securely verify payments with a Paystack secret key or receive a secure webhook by itself. Therefore this version:
1. opens Paystack checkout;
2. receives the browser callback/reference;
3. redirects the customer to the next-step page;
4. hands the customer to WhatsApp.

For automatic, payment-verified email delivery, add a secure backend/serverless webhook (Cloudflare Workers, Vercel Functions, Netlify Functions, or another server) and keep the Paystack secret key only in server-side environment variables.

## Bank transfer
The bank-transfer button opens WhatsApp with the selected order details and payment reference. The customer can attach payment evidence in WhatsApp.

## Product branding
The website currently uses clean product identity tiles rather than copied official logo files. If you have licensed/authorized official product logo assets, place them in `assets/products/` and update the product visual rendering. Autodesk's current brand guidance says product and parent-brand logos should not be recreated or altered and trademark ownership remains with Autodesk.

## Compliance
Before offering software or installation services, ensure that your distribution, access, licensing, activation and support practices are authorized and comply with the relevant software license terms and applicable law. Techies Lab should not represent itself as Autodesk or as an authorized reseller unless it actually has that authorization.
