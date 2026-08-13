# Dr. Laura Méndez Cuéllar — personal website

A small static website. No build step, no framework, no plugins: five HTML
files and one stylesheet. You can edit everything directly on GitHub in the
browser, and the site updates a minute later.

    index.html          About — the front page
    research.html       Research themes and fieldwork
    publications.html   Papers, with DOI links
    teaching.html       Teaching, supervision, talks, outreach, awards
    contact.html        Email and profiles
    assets/css/style.css   All colours, fonts and layout
    assets/img/         Photos
    CV.pdf              Curriculum vitae

## While the site is still a preview

Every page carries a line marked `PREVIEW ONLY` in its `<head>`, plus a
`robots.txt`, which together keep the site out of search engines. **Delete both
before going live**, otherwise the site will never be found.

## Publishing it with GitHub Pages

1. Go to **Settings → Pages** in the repository.
2. Under *Build and deployment*, choose **Deploy from a branch**, select branch
   `main` and folder `/ (root)`, then **Save**.
3. After a minute the site is live at
   `https://<username>.github.io/<repository-name>/`.

If the repository is named `<username>.github.io`, the address becomes
`https://<username>.github.io/` — shorter, and there is only one per account.
Note that GitHub only publishes from a private repository on a paid plan.

## Editing the text

Open any `.html` file on GitHub and click the pencil icon. Change the words
between the tags and leave the tags themselves alone:

    <p>This text you can change.</p>

Click **Commit changes** at the bottom. That's it.

Tags worth knowing:

- `<p>…</p>` — a paragraph
- `<strong>…</strong>` — bold
- `<em>…</em>` — italic, used here for journal names
- `<span class="sp">Salaria fluviatilis</span>` — a species name, italic serif
- `<a href="https://…" target="_blank" rel="noopener">link text</a>` — a link
  that opens in a new tab

Write `&amp;` instead of `&`. Accents (é, ü, ø) work normally.

## Adding a publication

In `publications.html`, find the list under *Peer-reviewed*. Copy one whole
block — from `<div class="entry">` down to its closing `</div>` — paste it above
the others, and edit the year, authors, title and DOI.

## Changing the photo

Put a new picture in `assets/img/` named `laura-portrait.jpg`, replacing the old
one. It is shown as a portrait (4:5), so roughly 800 × 1000 pixels works well.

## The navigation

The block marked *LEFT RAIL* is repeated at the top of every page so it looks
the same everywhere. If you change it — a new link, a different subtitle — make
the same change in all five files.

On the page you are currently viewing, that page's link carries
`aria-current="page"`, which draws the small orange square next to it.

## Colours and fonts

Everything visual is set in the first 30 lines of `assets/css/style.css`, in the
`:root` block. Change a value there and it applies across the whole site.

    --accent:#C2410C;   /* the orange used for links and marks */

The fonts (Fraunces, Karla, IBM Plex Mono) load from Google Fonts. If they
cannot load, the site falls back to system fonts and still works.

## Adding a new page

Copy an existing page, rename it, replace the content inside `<main>`, and add a
line to the navigation list in all the files.
