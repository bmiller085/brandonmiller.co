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

## Placeholders to fill before launch

| Placeholder | Where | Replace with |
|---|---|---|
| `FORMSPREE_ID` | `contact.html` | The Formspree form ID (e.g. `xyzabcd`) |
| Pre-order button (`data-preorder`) | `book.html` | The retailer link; remove `aria-disabled="true"` and update the button text |

Until the IDs are filled in, the forms show a friendly "coming soon" message instead of failing.

## Kit setup notes

- Form: "Website – Self-Audit Checklist", ID `10182836`, used by the signup forms in `index.html` and `book.html`.
- Form setting "After subscribing": redirect to `https://www.brandonmiller.co/checklist-thanks`.
- Confirmation email (double opt-in): "After confirming" redirects to `https://www.brandonmiller.co/s/HR-Compliance-Self-Audit-Checklist.pdf`.
- Add Kit's sending-domain DNS records in Squarespace's DNS settings so emails come from `brandonmiller.co`.

## DNS (in Squarespace → Domains → brandonmiller.co → DNS)

- `A` records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `CNAME` for `www`: `<github-username>.github.io`
- Remove the Squarespace website records only. Leave the Google Workspace `MX`, `TXT` and verification records untouched.
