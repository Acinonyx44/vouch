# portfolio

A static portfolio in two rooms, like hancore.dev:

- **`index.html`** is the intro: a shell types `nvim`, a vim buffer opens on
  real code from your projects, the cursor wanders, a line glitches,
  `:!./eye --track` opens an ASCII eye that watches the cursor (or you), and
  two hand skeletons type on a keyboard underneath. Press **enter ↩** to come in.
- **`site/index.html`** is the editor: a wheel of sections with ink tendrils, a
  terminal buffer (`git log --graph projects/`), the eye, a worm you can wake
  from the status bar, a command prompt and palettes.

## Make it yours

- `content.js`: who you are (`ME`), `PROJECTS`, `EXPERIENCE`, `STACK`,
  `LOG` and `PALETTES`. Both pages read it.
- `code.js`: the files shown on the intro. Each entry has a `path`,
  a `lang` (`js` or `py`) and the `text`. Keep them to ~60 lines.

Project thumbnails are generated (`art: graph | map | grid | wave | term | bars`);
set `image: "shots/foo.png"` on a project to use a real screenshot instead.
`stars` is optional.

## Run it

It's static. Serve the folder and open it:

```sh
cd portfolio && python3 -m http.server 8000
```

Deploy by dropping the folder on GitHub Pages, Netlify or Vercel.

## Keys

Intro: `h j k l w b { } gg G` move, `i` types into the buffer, `esc` stops,
`:theme`, `:q`, `:help`, and `enter` takes you in. The autopilot waits while
you're using it.

Editor: `↑ ↓` / `j k` switch sections, `← →` step through entries, `:` focuses
the prompt, and `help` lists commands (`cd`, `open`, `theme`, `worm`, `clear`…).
