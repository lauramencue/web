# How to apply this redesign to your local clone

You should already have these files from the earlier version — don't touch them,
they're not included here:

    CV.pdf
    assets/img/laura-portrait.jpg
    robots.txt
    .nojekyll
    README.md

Everything in this zip either REPLACES a file you already have, or is brand new.
Copy all of it into your cloned repo folder, overwriting when asked:

    index.html              REPLACE
    research.html           REPLACE
    publications.html       REPLACE
    teaching.html           REPLACE
    contact.html            REPLACE
    assets/css/style.css    REPLACE
    assets/js/site.js       NEW
    assets/img/hero-weevil.jpg              NEW
    assets/img/hero-fungus.jpg              NEW
    assets/img/hero-palms-fieldwork.jpg     NEW
    assets/img/hero-madagascar-pond.jpg     NEW

Then, in a terminal, inside your repo folder:

    git add -A
    git commit -m "Redesign: top navigation, rotating photo header"
    git push

Give GitHub Pages a minute to rebuild, then reload your site.

## What changed

- The left sidebar is gone. Navigation is now a bar across the top, on every page.
- The homepage has a full-width photo header at the top, cycling through four of
  your photos (the weevil, the fungus, you in the palm habitat, and the
  Madagascar pond scene) with your name over it.
- Everything else — the bio, Positions, Education, Research, Publications,
  Teaching, Contact — is the same content as before, just reflowed into a single
  wider column now that there's no sidebar eating the left third of the page.
- Two small extras that were already planned: list entries (Positions,
  Publications, Talks, etc.) get a subtle orange highlight on hover, and they
  fade in gently as you scroll down a page. Both quietly do nothing if
  JavaScript is off or "reduce motion" is set — the content just shows normally.

## Adding a fifth photo to the header rotation later

1. Add a new `<img class="hero-slide" src="assets/img/your-photo.jpg" alt="...">`
   line inside the `<section class="hero">` block in `index.html`.
2. In `assets/css/style.css`, find the comment above `.hero-slide:nth-child(1)`
   — it explains the exact numbers to change for 5 slides instead of 4.

## Editing text, adding a publication, etc.

Same as before — see the original README.md in your repo, none of that changed.
