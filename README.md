# Agent Wars — The Reliability Frontier

An independent technology intelligence publication comparing publicly disclosed computer-use approaches from OpenAI, Anthropic, Google DeepMind and Meta. Two deliverables: the single-page dashboard at `/` and a coordinated **two-page A4 PDF** at `public/agent-wars-brief.pdf`. `/brief` is an export layout, not another research product.

## Run locally

Requires Node.js 20.9+ and npm (verified with Node 26.10). The optional static preview (`npm start`) uses Python 3.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Production:

```sh
npm run build
npm start
```

Next.js App Router, TypeScript and Tailwind CSS; no backend, live agent calls, authentication or external UI library. Typography is self-hosted Inter and IBM Plex Mono. Fonts are distributed under their SIL Open Font Licenses, included in `public/fonts`. Next.js is pinned to the patched 16.4.0 release. Build uses webpack because Turbopack's CSS worker encountered sandbox socket restrictions in this environment.

## Research first

`data/research.json` is the authoritative content file for both formats. The research was assembled and validated before UI implementation. The fresh scan ran on **13 October 2026** and selected **13 primary references**. The thirteenth source substantiates Muse's product enforcement boundary, which cannot be inferred from a model announcement. The scan includes October 12 Muse Wonder, October 9 Anthropic incidents (with October 12 correction), October 6 Ironclad and September 29 GPT-6.1 Sol.

- `research/SOURCES.md`: exact titles, dates, URLs, sections and caveats.
- `research/NOTES.md`: source selection, queries, newer-release sweep, exclusions and access limits.
- `npm run validate`: checks required fields, cutoff dates, all source IDs, 4×3 coverage and the exact three findings/insights/priorities.
- `npm run typecheck`: TypeScript check.

Every nontrivial matrix cell and observation cites registered primary evidence. `Documented` identifies explicitly described mechanisms; `Qualified` identifies limited observations or publisher claims. These labels are not quality scores. Missing mechanisms are stated as not established from the reviewed sources. All findings and source IDs are shared; the print matrix and experiment summaries use condensed fields in the same dataset. PDF selected bibliography includes eight references; all citation chips directly link to their full primary sources.

## Reproduce the PDF and visual QA

Start the app in a separate terminal, then:

```sh
npx playwright install chromium
npm run pdf
npm run qa
```

The verified production preview is running at http://localhost:3001. `npm run qa:production` additionally checks the static report with JavaScript disabled and keyboard-driven evidence expansion.

`REPORT_URL` can point at another local preview (defaults to http://localhost:3000). If Chromium is already installed, set `PLAYWRIGHT_EXECUTABLE_PATH` to its absolute executable path. This run used bundled Chromium rather than downloading another browser. Export waits for fonts, checks that content clears both footers, and saves a tagged, linked PDF. PDF production should happen after edits and before deployment. It is a checked-in static download; it does not regenerate at runtime.

Screenshots and layout checks are under `artifacts/qa`. Screenshot PNGs are ignored by Git. QA covers 1440, 1024, 768 and 390px layouts; anchor navigation; native evidence expansion; source mappings; PDF download; print output; and identical executive findings in both routes. Final PDF page count, A4 dimensions, link annotations and rendered pages are independently checked with Poppler/Python. Both pages and desktop/mobile layouts are visually inspected.

## Interpretation limits

This is a curated comparative study, **not a controlled benchmark** or an audit of proprietary internals. Vendor safety/performance claims and selected incidents do not establish customer failure rates. Original benchmark abstracts and version metadata were reviewed; full experiments were not reproduced. Differing releases, harnesses, metrics and permissions preclude numerical rankings. Historic mechanism sources are explicitly dated and never identified as latest. Muse product controls do not automatically apply to the model API. No patent claims, fabricated scores or inferred deployment mechanisms are included.

## Source-linked graphs

The dashboard includes a publication-date plot of the ten dated 2026 references (not model performance), with a readable grouped timeline on mobile. A second vector graph explains the Muse product permission boundary documented in S13. Both derive from registered sources, use the report palette and local typography, and work without JavaScript. Hover/focus emphasis is subtle and honors reduced motion. No inferred numerical capability scores or external stock imagery are used. The coordinated two-page brief remains the concise printable summary.

## GitHub Pages

Pushes to `main` run `.github/workflows/deploy.yml`: Node 24, `npm ci`, the existing build command, and an upload/deploy of `out/`. Set repository **Settings → Pages → Source** to **GitHub Actions**. The workflow supplies `NEXT_PUBLIC_BASE_PATH=/Agent_wars` from the repository name, so bundles, local fonts and the PDF resolve under the project path. `out/brief/index.html` supports `/brief/`. `out/` is generated and ignored by Git.

For a root-hosted local export, run `npm run build` and `python3 -m http.server 3001 --directory out`. `npm start` uses Python’s static file server because `next start` does not serve `output: export`; `npm run dev` remains the normal development preview. For a custom domain at its root, remove the workflow base-path environment value before rebuilding.
