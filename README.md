# MoneySure website

Editable frontend built with plain HTML, CSS and vanilla JavaScript. No frontend build step is required.

## Run locally

From this folder, run `python3 -m http.server 8000` and open `http://localhost:8000`.

## Main files

- `index.html` — main website
- `credit-score.html` — MoneySure credit score checker information/setup page
- `css/style.css` — styling
- `js/script.js` — website interactions, calculators, loan cards, bank display and WhatsApp contact form
- `assets/images/` — logo, team portraits and service illustrations

## Credit score integration status

The credit-score page is a real UI/setup page, but it **does not fetch or invent a credit score**. MoneySure currently has no credit-bureau API account. To provide a score and report inside MoneySure, obtain an agreement/API access from an authorised credit bureau or service provider, then implement their documented consent, identity verification/OTP, secure backend calls and report flow. Do not collect PAN, OTPs or other sensitive details until a secure provider integration and privacy/security controls are in place. The page currently links to the official CIBIL website as an external alternative.

## Bank logos

The Our Partners cards load official logo files from `assets/images/banks/<slug>.svg` (or .png/.webp/.jpg). See `assets/images/banks/README.md` for the exact file name per bank. A bank with no file shows its name only — no favicon, generic or substitute image is used. Obtain logos from each bank's official brand/media page.

## Contact form

The existing contact form opens WhatsApp with a prefilled enquiry; it does not store submissions on a server.
