# Anchor Locator website: remaining TODOs

Search the HTML for `TODO` and `CONTACT_EMAIL` to find every spot.

1. **Contact email.** Not known yet. Every place the contact address belongs shows a
   "Contact us" link to https://github.com/kedveneilrabe/anchor-locator-site/issues, wrapped in
   `<!-- CONTACT_EMAIL: swap to mailto when Kent provides it --> ... <!-- /CONTACT_EMAIL -->`.
   Replace each wrapped link with `<a href="mailto:you@example.com">you@example.com</a>`:
   - index.html: footer + FAQ "How do I get help?"
   - privacy.html: footer + "Who we are", "Retention and deletion", "Your rights", "Contact"
   - terms.html: footer + "Contact"
   - refund.html: footer + "How to request a refund", "Questions"
   One-liner: `rg -l 'CONTACT_EMAIL' *.html` then edit, or
   `sed -i 's#<!-- CONTACT_EMAIL: swap to mailto when Kent provides it --><a href="https://github.com/kedveneilrabe/anchor-locator-site/issues" rel="noopener">\([^<]*\)</a><!-- /CONTACT_EMAIL -->#<a href="mailto:EMAIL">EMAIL</a>#g' *.html`
   (prose that reads "Contact us" / "contact us" may then need a light touch, e.g. "Email EMAIL").
2. **Checkout URLs (Lemon Squeezy).** "Get Pro Monthly" and "Get Pro Lifetime" in index.html
   (pricing section) point at `#pricing` and buy nothing. Each is marked `<!-- TODO: checkout URL -->`.
3. **Chrome Web Store URL.** Every "Add to Chrome" button points at `#pricing` for now
   (header on all 4 pages, hero, Free plan card, footer CTA). Each is marked
   `<!-- TODO: Chrome Web Store URL -->`.
4. **Domain.** Currently GitHub Pages at https://kedveneilrabe.github.io/anchor-locator-site/.
   When a custom domain is chosen: add a `CNAME` file, add `<link rel="canonical">` and absolute
   `og:url` / `og:image` URLs (marked `<!-- TODO: domain -->` in each page head), and update the
   privacy-policy URL in the Chrome Web Store listing.
5. **Pro activation wording** (FAQ "How is payment handled?"): says you activate Pro in the
   extension "with your license key". Confirm once the licensing flow ships.
6. **Refund on monthly renewals** (refund.html): says Pro Monthly is refundable within 14 days
   "of the payment", i.e. each renewal is also refundable for 14 days. Kent to confirm.
