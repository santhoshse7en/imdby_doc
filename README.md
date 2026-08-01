# imdby_doc

Documentation site for [**imdby**](https://github.com/santhoshse7en/imdby), a Python package for retrieving and managing data from the IMDb movie database (movies, people, characters, companies, events, and news).

Live site: https://santhoshse7en.github.io/imdby_doc/

This repo holds the static, pre-built site served by GitHub Pages — there is no build step to run; the HTML/CSS/JS here is what gets deployed as-is.

## Structure

```
index.html          Home
quick_start/         Quick Start guide
usage/                Usage guide (searching & retrieving)
FAQ/                  Frequently asked questions
search.html          Client-side search results page
404.html             Custom not-found page
css/style.css        Site styles (light/dark, responsive)
js/nav.js            Mobile nav drawer, code copy buttons, search-box redirect
search/              Lunr.js search index + web worker
img/, sitemap.xml    Favicon and sitemap
```

## Previewing locally

Any static file server works, e.g.:

```bash
python -m http.server 8420
```

Then open `http://localhost:8420`. (Opening the HTML files directly via `file://` will break client-side search, since browsers block Web Workers from `file://` origins.)

## Editing content

Pages are plain HTML — there's no templating system in this repo, so shared chrome (top bar, sidebar, footer) is duplicated across `index.html`, `quick_start/index.html`, `usage/index.html`, and `FAQ/index.html`. When adding a page, copy the structure of an existing one and update the sidebar nav links, breadcrumb, and prev/next footer on every page.

## Related

- Package source: https://github.com/santhoshse7en/imdby
- PyPI: https://pypi.org/project/imdby/
