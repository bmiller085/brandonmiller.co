# brandonmiller.co

Author website for Brandon Miller, hosted on GitHub Pages. Plain HTML/CSS with no build step:
edit a page's `.html` file, commit, and GitHub Pages republishes it.

The domain and Google Workspace stay registered with Squarespace; only DNS points here.

## Structure

| Path | Purpose |
|---|---|
| `index.html`, `about.html`, `book.html`, `contact.html` | Main pages (served at `/`, `/about`, `/book`, `/contact`) |
| `checklist-thanks.html` | Page visitors land on after joining the email list (hidden from search engines) |
| `privacy-policy.html`, `terms.html` | Legal pages |
| `404.html` | "Page not found" page |
| `s/HR-Compliance-Self-Audit-Checklist.pdf` | Free checklist (same URL as on Squarespace, so old email links keep working) |
| `assets/css/site.css` | All styles; colors are defined at the top |
| `assets/js/site.js` | Mobile menu and form handling |
| `assets/fonts/` | Self-hosted Outfit and Source Serif 4 fonts (SIL Open Font License) |
| `CNAME` | Custom domain for GitHub Pages |

The header and footer are repeated in every page, so a change to either needs to be made in each file.

## Pre-order

- Kindle ebook: https://www.amazon.com/dp/B0HRQZYQR8 ($12.99, pre-order; release January 12, 2027). The link and price live in the `AMAZON` / `PREORDER` / `EBOOK_NOTE` values of the build script and appear on the home, book, and thank-you pages. The mobile pre-order bar on the book page reads its link from the `data-preorder` button.
- Paperback: January 12, 2027 (no pre-order).

## Contact form

- Formspree form `moedvnze` (free plan, 50 submissions/month), delivering to hello@brandonmiller.co.

## Kit setup notes

- Form: "Website – Self-Audit Checklist", ID `10182836`, used by the signup forms in `index.html` and `book.html`.
- Form setting "After subscribing": redirect to `https://www.brandonmiller.co/checklist-thanks`.
- Confirmation email (double opt-in): "After confirming" redirects to `https://www.brandonmiller.co/s/HR-Compliance-Self-Audit-Checklist.pdf`.
- Add Kit's sending-domain DNS records in Squarespace's DNS settings so emails come from `brandonmiller.co`.

## DNS (in Squarespace → Domains → brandonmiller.co → DNS)

- `A` records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `CNAME` for `www`: `<github-username>.github.io`
- Remove the Squarespace website records only. Leave the Google Workspace `MX`, `TXT` and verification records untouched.
