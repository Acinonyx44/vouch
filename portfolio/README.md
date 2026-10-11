# portfolio

A single-file portfolio that opens like an editor: a wheel of sections with ink
tendrils, a terminal buffer (`git log --graph projects/`), an ASCII eye that
follows your cursor, a worm you can wake from the status bar, and a desk
keyboard that lights up as you type.

## Make it yours

Everything you need to edit is in the `CONTENT` block at the top of the
`<script>` in `index.html`:

- `ME`: name, initials, handle, domain, role, email, links, bio
- `PROJECTS`: shows up in `git log --graph projects/`. Use `art` for a
  generated thumbnail (`graph`, `map`, `grid`, `wave`, `term`, `bars`), or
  set `image: "shots/foo.png"` to use a real screenshot. `stars` is optional.
- `EXPERIENCE`, `STACK`, `LOG`

Palettes live in `PALETTES` (dusk, phosphor, ice, paper).

## Run it

It's static. Open `index.html` directly, or:

```sh
cd portfolio && python3 -m http.server 8000
```

Deploy by dropping the folder on GitHub Pages, Netlify or Vercel.

## Keys

`↑ ↓` / `j k` switch sections · `← →` step through entries · `:` focus the
prompt · `help` lists commands (`cd`, `open`, `theme`, `worm`, `clear`…).
