# AGENT WARS — `specs.md`

> **Project:** Agent Wars — The Reliability Frontier  
> **Subtitle:** How Frontier AI Labs Are Building Computer-Using Agents  
> **Format:** Compact comparative technology-intelligence research project  
> **Audience:** R&D leaders, technology-scouting analysts, and interviewers for GreyB-style research roles  
> **Starting research date:** 13 October 2026 (refresh the source scan when executing)  
> **Implementation target:** One refined responsive web page + one coordinated two-page PDF brief  
> **Timebox:** Aim for a focused 4–6-hour MVP. Never sacrifice evidence accuracy to hit the timebox.

---

## 0. Instructions to Codex — read this first

Build the complete project, not just a pretty template. **Research first, validate second, write third, implement the visuals last.** Use source-supported material. If live web access is unavailable, make that limitation explicit in `research/NOTES.md`, work only from accessible dated primary sources, and do not claim the findings represent the latest state of the field.

The result must feel like **an independent technology intelligence brief** prepared for an enterprise R&D audience, not a generic AI website or a chatbot product landing page.

### Non-negotiable rules

1. **No invented facts.** No invented benchmark results, company-specific model features, patent links, dates, numerical scores, performance advantages, or analyst findings.
2. **No fake leaderboards.** Benchmarks are only comparable if the benchmark **version, agent harness, allowed tools, environment, evaluation protocol, and date** are sufficiently compatible. Otherwise show a qualitative comparison and an explicit caveat.
3. **Do not equate marketing claims with demonstrated research.** Separate an organization's documented claim from our analytical inference.
4. **Do not infer an implementation from a patent.** Patent filings can indicate technical interests; they do not establish that a deployed model uses the patented method.
5. **No live APIs/backend/auth/chat interface** for this MVP. Research data is curated in version-controlled JSON/Markdown.
6. **No AI-slop visuals.** Do not use neon gradients, glass cards, glowing orbs, robots, random abstract AI imagery, huge metric counters, animated particles, excessive shadows, unexplained icons, or wildly different card styles.
7. **Every substantial analytical claim must have a source link**, with dated citations. Unsupported interpretation must be visibly labeled.
8. **Use one visual design system in both web and PDF**, including identical terminology, source numbering, accent color, typographic hierarchy, and chart conventions.
9. **Finish the actual deliverables**, run checks, review desktop/mobile/print screenshots, and fix visual defects before declaring completion.
10. Keep the project tightly scoped. **Do not overengineer.**

### Definition of the research product

This is **not** a live agent benchmark, a model training experiment, a patent landscape, or a claim that we have audited the internal architectures of closed models. It is a **source-traced comparative technology study of publicly disclosed techniques and limitations**.

---

## 1. Client brief and thesis

### Hypothetical client

A company building enterprise AI automation needs to understand the current state of frontier computer-using agents before committing its next R&D cycle. It wants to know:

- What public technical approaches are frontier AI labs pursuing?
- What changes when agents must perform complex workflows across software rather than answer prompts?
- Which reliability limitations are already documented?
- Which **three engineering problems** merit practical R&D investigation?

### Core research question

> **How are OpenAI, Anthropic, Google DeepMind, and Meta advancing computer-using agents, what publicly documented approaches differ, and what technical challenges still prevent reliable, long-horizon autonomous work?**

### Mandatory scope

- Four labs: **OpenAI, Anthropic, Google DeepMind, Meta**.
- Research domain: **computer-using / GUI-interacting and tool-using agents**.
- Three comparison lenses only:
  1. **Perception → action:** UI grounding, screenshot/visual input, clicking/typing, tool calls, scripts and mixed-action execution.
  2. **Long-horizon reliability:** task decomposition, state tracking, context compaction, retries, evaluation of completed work, and recovery from changed interfaces.
  3. **Safety & control:** prompt injection, untrusted interface content, permission boundaries, confirmation/human oversight, unintended actions.
- Review modern sources, including important **2026 developments** and foundational earlier descriptions where essential. Do not compare only old 2024–2025 products when later material exists.
- Include model names and releases only where the underlying primary source verifies the claim. **Do not assume a named model is still the latest.**
- Make conclusions at the **technology-approach level**; do not claim definitive hidden architecture or complete company capability coverage.

### What good analysis sounds like

Bad: “Lab A wins computer use with revolutionary intelligence.”

Good: “Lab A publicly documents a mixed approach using direct interface operations and scripts, while Lab B's referenced work emphasizes a screenshot-driven interaction loop. These statements describe disclosed interface mechanisms, not a controlled head-to-head reliability test. The R&D implication is to evaluate tool selection and recovery under identical workflow constraints.”

---

## 2. Deliverables and repo contents

**Only two public-facing deliverables:**

### A. Single-page research dashboard (`/`)

A polished, editorial, responsive intelligence page with:

1. Report masthead and executive thesis.
2. Three succinct takeaways with citations.
3. A **four-lab × three-dimension** evidence-backed comparison matrix.
4. A simple, accurate **agent execution loop diagram**.
5. Three research observations / trade-off analyses.
6. Three R&D priorities with suggested tests.
7. Methodology, limitations, and a compact bibliography.
8. Link to download the **two-page PDF**.

Only minimal interaction: `lab` filter or matrix detail expansion, citation links, anchors, and PDF download. Do not add interactive features that do not answer a research question.

### B. Two-page research brief (`public/agent-wars-brief.pdf`)

Visually coordinated with the web page. **Exactly two readable A4 pages:**

- **Page 1 — Executive intelligence:** title, scope, research question, 3 verified conclusions, concise 4-lab comparison table, key diagram.
- **Page 2 — R&D implications:** 3 priorities, a compact evidence-to-decision table, limitations/method, selected bibliography, research cutoff date.

The PDF should be suitable for an interviewer or client to open and understand without seeing the website. It must not be a screenshot dump, a giant poster, or 2 pages of micro-text.

### Supporting developer/reproducibility files (not extra products)

```text
agent-wars/
├── specs.md                         # this document
├── README.md                        # commands + summary + caveats
├── research/
│   ├── SOURCES.md                   # dated primary-source register
│   └── NOTES.md                     # search process, exclusions, limitations, decisions
├── data/
│   └── research.json                # verified structured findings used by UI/PDF
├── app/                              # Next.js App Router pages/styles
├── components/                       # only a few shared presentation components
├── public/
│   └── agent-wars-brief.pdf
└── package.json
```

Keep the folder structure idiomatic for the installed framework. Do **not** create a complicated monorepo, API service, database schema, agent orchestration system, or design-system package.

---

## 3. Required research: genuinely current frontier topics

### Step 1 — Do a fresh frontier sweep **before writing the page**

Check official publications from all four labs **up to the execution date** (or document the actual cutoff). Start from these verified entry points, **then search for newer, more relevant material**. Dates below refer to source publications, not a claim that they remain the latest models:

| Lab | Primary starting source | Publication | Why it is relevant |
|---|---|---|---|
| OpenAI | [Advancing computer use with Ironclad](https://openai.com/index/advancing-computer-use-with-ironclad/) | 2026-10-06 | Evaluation of complex professional workflows, detailed criteria, task-completion verification. |
| OpenAI | [Computer-Using Agent](https://openai.com/index/computer-using-agent/) | 2025-01-23 | Foundational perception–reasoning–action loop and GUI interaction. |
| OpenAI | [Computer use developer documentation](https://developers.openai.com/api/docs/guides/tools-computer-use) | Check date | Current supported computer-action interfaces and execution patterns; docs can change. |
| Anthropic | [Investigating unintended model actions](https://www.anthropic.com/research/investigating-unintended-model-actions) | 2026-10-09 | Concrete observed agent failure modes and limits of autonomy. |
| Anthropic | [Trustworthy agents in practice](https://www.anthropic.com/research/trustworthy-agents) | 2026-04-09 | Human oversight, safety, adversarial instructions, and trust. |
| Anthropic | [Developing a computer use model](https://www.anthropic.com/news/developing-computer-use) | 2024-10-22 | Foundational GUI grounding and computer-use technical limitations. |
| Google DeepMind | [Computer use in Gemini 3.5 Flash](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-computer-use-gemini-3-5-flash/) | 2026-06-24 | Integration of computer-use capabilities in a broader model and long-horizon use cases. |
| Google DeepMind | [Gemini 2.5 Computer Use](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-computer-use-model/) | 2025-10-07 | Earlier specialized tool, interaction loop and tool design. |
| Meta | [Introducing Muse Spark 1.1](https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/) | 2026-07-09 | Mixed script/direct UI interaction, context management, multi-agent orchestration. |
| Meta | [Muse Spark research](https://ai.meta.com/blog/introducing-muse-spark-1-msl/) | 2026-04-08 | Multimodal reasoning, tools, and parallel agents. |
| GreyB (role framing) | [Technology Analysis](https://greyb.com/services/rd-consulting/technology-analysis/) | Check date | Research-to-insight format: discovery, filtering, analysis, recommendations. |

These links are **leads, not pre-approved facts to paste**. Verify page titles, dates, claims, evaluation caveats, and model names from the actual pages. If a page is inaccessible, mark it inaccessible and find another primary source; **never fabricate what it says**.

### Step 2 — Scan frontier research trends, but select narrowly

In `research/NOTES.md`, briefly scan and assess the relevance of these themes:

1. **Computer-use / GUI grounding**: visual-state perception, UI affordances, coordinate grounding, multimodal observations.
2. **Hybrid action spaces**: direct mouse/keyboard vs browser APIs, code/Playwright automation, and delegated subagents.
3. **Long-horizon execution**: task planning, state tracking, context persistence/compaction, failure detection and recovery.
4. **Evaluation realism**: OSWorld/OSWorld 2.0, BrowserGym/WebArena, professional workflow-based tests, rubric-based completion checks.
5. **Agent safety**: prompt injection, cross-domain trust boundaries, permission models, sensitive actions and human handoffs.
6. **Optional adjacent context only**: inference-time reasoning, tool-use RL, cost/latency, verification models—include *only when they clarify agent reliability*.

**Do not turn this into six separate projects.** Select about **8–12 high-value primary references total** for the final study; use more only if necessary to substantiate meaningful claims. Favor original lab research, technical reports, system cards, API documentation, and original benchmark papers over blogs repeating announcements.

### Step 3 — Research protocol

For each source:

1. Record `id`, publisher, exact title, publication date, URL, access date, type (`paper`, `system-card`, `official-blog`, `documentation`, `benchmark`, `patent`), and relevant section(s).
2. Extract **only explicitly supported facts**. Capture a brief paraphrase or note, not lengthy copyrighted quotations.
3. Attach evidence to one or more of our three comparison dimensions.
4. Mark confidence/strength of evidence: `documented`, `qualified`, or `not_publicly_disclosed`.
5. Record significant limitations (internal-only evaluations, undisclosed harness, later release superseding the finding, etc.).
6. If a claim appears only in third-party commentary, try to locate the original source first.
7. For numerical claims, record metric, unit, evaluation name and version, conditions, and date; don't carry the number into visuals without this metadata.
8. Check the official developer/research pages for releases newer than the listed starting point. Only include research published **by the cutoff**.

### Step 4 — Analyze the same questions across labs

For each lab, seek grounded answers to:

- **Observations:** What input does the computer-use system consume? What action interface is documented? How is a result checked?
- **Reliability:** What features or training/evaluation techniques are documented to address multi-step workflows, memory/context, or error recovery?
- **Safety:** What do their public publications say about policy enforcement, prompt-injection defense, confirmation, oversight, and failure modes?
- **Uncertainties:** What is unclear or undisclosed? Which published results are not comparable?

Do not manufacture symmetry. If a company doesn't publicly disclose a mechanism, say **“Not established from reviewed public sources”** rather than “No support.”

### Step 5 — Produce an R&D shortlist

Derive **exactly three** recommendation cards from the sources, for example:

- **Verifiable task completion:** Can agents prove end-state correctness against a structured rubric rather than simply end a sequence of clicks?
- **Adaptive action selection:** When should an agent use direct GUI interaction versus scripting, APIs, or delegated tools?
- **Resilience under untrusted and changing interfaces:** How should a system detect prompt injection, avoid unsafe actions, and recover from unexpected UI changes?

These are *candidate investigation themes*. Final recommendations must be revised if the evidence points elsewhere.

Each priority requires:

- `Observed signal` — source-linked fact or cross-source pattern.
- `Why it matters` — explicit engineering or enterprise consequence.
- `R&D hypothesis` — something testable, not a claim of novel invention.
- `Suggested experiment` — a low-cost validation plan with a measurable outcome, e.g. completion correctness, human intervention frequency, failures per long workflow.
- `Confidence / limitations` — what we cannot conclude from the evidence.

Do **not** claim true patent whitespace, proprietary algorithm superiority, or comparative benchmark leadership from a curated publication sample.

---

## 4. Evidence model and content architecture

Use one authoritative file, `data/research.json`, to drive web copy, comparison content, bibliography, and ideally PDF content. It is acceptable to author the PDF in a dedicated component/layout if content references this shared dataset; **do not manually rewrite different conclusions in two places**.

### Example shape (illustrative keys; NOT fabricated sample findings)

```ts
type Evidence = {
  id: string;                         // e.g. "S01"
  lab: "OpenAI" | "Anthropic" | "Google DeepMind" | "Meta" | "Independent";
  title: string;
  publisher: string;
  publishedAt: string;                // ISO date or explicitly unknown
  accessedAt: string;
  url: string;
  sourceType: "official-blog" | "paper" | "system-card" | "documentation" | "benchmark" | "patent";
  limitations?: string[];
};

type Claim = {
  id: string;
  lab: string;
  dimension: "perception-action" | "reliability" | "safety";
  statement: string;                  // carefully paraphrased factual statement
  sourceIds: string[];
  evidenceStatus: "documented" | "qualified" | "not-publicly-disclosed";
  caveat?: string;
};

type Insight = {
  id: string;
  title: string;
  observation: string;
  implication: string;
  sourceIds: string[];
  status: "observed" | "analyst-interpretation";
};

type RDRecommendation = {
  id: string;
  title: string;
  evidenceSignal: string;
  whyItMatters: string;
  hypothesis: string;
  suggestedTest: string;
  metric: string;
  sourceIds: string[];
  limitation: string;
};
```

The real JSON must include `meta` (title, subtitle, publication cutoff, study scope, author, methodology summary), a short `executiveSummary`, `labs`, `sources`, `claims`, `insights`, `recommendations`, and `limitations`. Validate required fields before the page renders/builds.

### Citation rules

- Every nontrivial cell of the comparison matrix has an evidence identifier (e.g. `[S03]`) opening the source.
- Every finding references one or more registered sources.
- Include an accessible Bibliography / Sources section showing complete titles, dates and publishers.
- Label any reasoning beyond the text of sources as **Analyst interpretation**.
- Include “Research cutoff: [date]” and “Based on public disclosures; not a controlled benchmark” in both web and PDF.
- Prevent citation mismatch: claim `sourceIds` must exist in `sources`.
- External links open safely with `rel="noopener noreferrer"` when appropriate.

### Minimal methodology disclosure

Write 120–180 clear words explaining: sources selected, recency policy, three comparison lenses, exclusions, and why source evidence cannot establish the actual internal proprietary architecture. Keep the full search/query log in `research/NOTES.md`.

---

## 5. Visual direction — make this feel like a serious research publication

### Brand and atmosphere

**Visual concept:** a premium **technology intelligence dossier** meets a modern R&D research journal.

It should convey **clarity, precision, restraint, traceability, and critical judgment**. Avoid both a cyberpunk “AI lab” aesthetic and a SaaS marketing landing page.

Think: crisp editorial typography, calm neutral canvas, research labels, fine rules, carefully designed comparison tables, restrained data accents, excellent whitespace, and clearly identified evidence.

Use **one coherent identity**:

- Public-facing brand name: `AGENT WARS`.
- Report series label: `FRONTIER TECHNOLOGY INTELLIGENCE / FIELD NOTE 01`.
- Main headline: `The Reliability Frontier`.
- Formal subtitle: `How Frontier AI Labs Are Building Computer-Using Agents`.
- Visual motif: **interface/state transitions** — subtle directed edges, numbered steps, thin connector lines. Never neural-network wallpaper.
- The document and dashboard should look like two formats from the **same research studio**.
- Do not mimic GreyB's branding or imply affiliation with GreyB.

### Design tokens (use literally unless a clear accessibility correction is needed)

```css
:root {
  --paper:       #F7F8F6; /* main background */
  --surface:     #FFFFFF; /* matrices / evidence areas */
  --ink:         #14232D; /* main text */
  --ink-muted:   #54646C; /* secondary text */
  --line:        #D7DFDF; /* hairlines */
  --line-light:  #E9EEEE;
  --accent:      #0F695F; /* restrained deep-teal research accent */
  --accent-pale: #E7F2EF;
  --warning:     #9B6832; /* qualification/uncertainty, used sparingly */
  --warning-bg:  #FBF4E9;
  --footer:      #14232D;
}
```

- **Typography:** `Inter` or `Source Sans 3` for content; `IBM Plex Mono` for source IDs, dates, report metadata, small data labels. Pick **one** primary family, not five.
- **Headings:** compact and deliberate; use 700 only for section/report titles. Don't create gigantic marketing headings.
- **Body:** 15–16px at desktop, line-height ~1.55–1.7; limit long-form reading measure to ~65–75 characters.
- **Spacing:** an 8px base system (8 / 16 / 24 / 32 / 48 / 64); consistent within sections, 64–88px between major sections.
- **Content width:** approximately 1120–1180px; long-form copy narrower (~760px).
- **Grid:** 12-column desktop. Most comparison sections are full width; use controlled 4/8 or 3/9 splits where meaningful.
- **Corners:** modest radius (4–8px). Large rounded pills/cards everywhere = prohibited.
- **Borders:** thin neutral separators; very subtle or no shadows.
- **Icons:** sparing use of simple line icons only when they convey function. Prefer text labels in research tables.
- **Motion:** optional 100–180ms hover/focus transitions; no entrance animations or scrolljacking.
- **Logos:** text names are preferable to mismatched company logos. If using logos, get correct official assets and size them consistently.

### Absolutely avoid

- Purple-blue-green gradients and neon glow.
- Giant hero with “Transforming the future of agents” copy.
- Random images of brains, robots, circuit boards or fake microscopic photography.
- Floating dashboards, overlapping translucent panels, glassmorphism, parallax.
- Four arbitrary “performance scores” to fill visual space.
- Rainbow colors for every lab, 12 different status pills, emoji as decorative icons.
- Uniform stacks of huge rounded cards with generic headings.
- Empty illustrations used merely to fill whitespace.
- The phrase “AI-powered intelligence platform” unless it accurately describes what we built (it won't).

---

## 6. Exact website information architecture

The page is a **digital report**, not a multi-page product. Implement in this order:

### Top navigation / report chrome

Desktop: slim masthead with `AGENT WARS / FRONTIER TECHNOLOGY INTELLIGENCE` on left; links to `Overview`, `Comparison`, `R&D Priorities`, `Sources`; right-aligned `Download brief ↗` action.

Mobile: compact logo and simple anchor navigation (horizontal scroll is fine); no complex drawer needed.

### 01 — Cover / executive context

A relatively short, disciplined opening with:

- Small uppercase edition label `FIELD NOTE 01  /  TECHNOLOGY INTELLIGENCE`.
- Clear headline `The Reliability Frontier`.
- One-sentence research framing, not marketing copy.
- Metadata row: 4 labs / 3 technical lenses / research cutoff date.
- A quiet right-side or lower-right technical motif: a simple **Observe → Decide → Act → Verify** diagram (not a stock photo).
- A short executive finding **only after** sources support it.

At 1440px desktop, the first viewport should clearly show the title, scope, and the beginning of the findings; don't waste it on a giant decorative hero.

### 02 — Executive takeaways

**Three** numbered findings (`01`, `02`, `03`) in an editorial three-column arrangement on desktop; stack on mobile. Each contains:

- 1 concise insight headline.
- 2–3 sentences interpreting what the evidence shows.
- Citation chips `[S01]`, `[S04]` as links.
- Fine top separators and generous padding, **not** colorful marketing cards.

### 03 — Evidence comparison matrix (primary visual)

The central artifact. Use rows for three dimensions and columns for the four labs:

| Research dimension | OpenAI | Anthropic | Google DeepMind | Meta |
|---|---|---|---|---|
| Perception & action | Concise source-backed statement | ... | ... | ... |
| Long-horizon reliability | ... | ... | ... | ... |
| Safety & control | ... | ... | ... | ... |

Formatting rules:

- One or two short sentences per cell, maximum; use **expand details** only if genuinely helpful.
- Show `[Sxx]` source IDs beside claims; link them to bibliography/open primary sources.
- **“Not publicly established”** when evidence is absent. Absence must never be falsely shown as a weakness.
- Use consistent row heights where possible, generous cell padding, clear row labels, and thin borders.
- A small key identifies `Documented` / `Qualified` / `Not established` without implying numerical rankings.
- For small screens, **transform the matrix into four lab sections** with three repeated dimension labels. Do not squeeze a five-column table into a narrow viewport or require unreadable horizontal scrolling.
- Avoid radar charts; unsupported numerical scoring would undermine credibility.

### 04 — How an agent actually works

A single **vector/SVG or CSS-constructed process diagram**:

`Goal → Observe interface → Choose action → Execute → Verify result → Continue / recover / escalate`

Add subtle callout annotations, linked to technical sources, showing where the three reliability research dimensions enter. Make clear this is an **analytical abstraction**, not one company's proprietary architecture.

No third-party illustration required. A crisp technical figure with accurate labels adds far more credibility.

### 05 — What the evidence suggests

Three small editorial analysis blocks (not arbitrary cards), each:

- Descriptive title (`Direct UI vs scripted execution`, `The verification gap`, etc. — revise based on research).
- `Observed` subheading with references.
- `Implication` subheading: analytical consequence.
- `Uncertainty` note: what isn't shown by the public evidence.

Aim for 80–120 words each. Dense enough to be meaningful, concise enough to scan.

### 06 — R&D priorities

Three numbered recommendations arranged as a **decision table or compact stacked memos**:

- Priority name.
- Why it is important to an enterprise user.
- One falsifiable experiment / test scenario.
- Success metric (definition only, **not fake results**).
- Supporting source IDs.
- Confidence/constraint.

Use action verbs and concrete test conditions. These should feel like recommendations in a technical consulting memo, not generic “future opportunities.”

### 07 — Methodology and sources

- ~120–180 word methodology.
- 3–5 explicit limitations: sampled public sources; no access to internal training data; benchmarks not directly comparable; release recency; patent evidence (if used) not proof of deployment.
- Bibliography entries `[S01] ...`: lab/publisher, title, publication date, link.
- Footer: `Independent research project · Research cutoff [date] · Based on public disclosures`.

### Interaction/accessibility requirements

- Table and sources readable without JavaScript-driven effects.
- Anchor links, keyboard focus rings, obvious link styles, meaningful heading hierarchy.
- Accessible colors, semantic tables, alt text/accessible label for the execution diagram.
- One consistent mobile layout for 390px wide screens.
- No content clipped/overlapping at common sizes: 390, 768, 1024, 1440px.

---

## 7. Two-page PDF style & content rules

**Non-negotiable:** The report must read like a professional miniature research dossier.

### Reuse web identity

Use the same `paper`, `ink`, `accent`, hairlines, typography families, edition label, diagram vocabulary, source IDs and language. Avoid a separate, generic PDF template. Do not use screen-like navigation inside the report.

### Print specification

- A4 portrait, **exactly 2 pages**.
- Page margins about 16–20mm.
- Comfortable body font ~9.5–10.5pt; labels and footnotes may be modestly smaller but must remain legible.
- Repeat issue label, page numbers, short footer, and research cutoff on both pages.
- No charts/tables split across page boundaries. Use print-specific CSS / layout.
- All citations resolvable through a numbered Sources section or directly via clickable hyperlinks in the PDF.
- Export from a dedicated print route or component (`/brief`) with Playwright `page.pdf()` or a comparably deterministic workflow. If browser PDF tooling is unavailable, choose a reliable PDF generation library; do not rely on “Print to PDF” instructions as the final deliverable.
- Inspect exported pages visually, confirm exactly two pages, readable font sizes, no clipping, and consistent numbers with the website.

### Page 1 — Executive intelligence

1. Small header `AGENT WARS / FIELD NOTE 01` and report date.
2. Headline `The Reliability Frontier` and formal subtitle.
3. The client question and **one-sentence answer**.
4. Three source-backed key findings.
5. Condensed four-lab comparison (three dimensions with succinct text).
6. Small execution-loop diagram if space allows.

### Page 2 — R&D interpretation

1. Section `Implications for Enterprise R&D`.
2. Exactly three prioritized questions/recommended experiments.
3. An `Evidence → Risk/Trade-off → Test` strip/table.
4. Study method, explicit limitations, selected source list with dates and links.
5. Footer that describes the artifact as an **independent, curated comparative study**.

**Copy quality:** Write as an analyst reporting findings to a client: precise, calibrated, concise, free of hype, and clear on what is known versus inferred. Avoid repeating text verbatim from source publications.

---

## 8. Engineering choices (deliberately minimal)

- **Next.js App Router + TypeScript + Tailwind CSS**.
- Reusable small components: `ReportHeader`, `ExecutiveFinding`, `ComparisonMatrix`, `AgentLoopDiagram`, `ResearchInsight`, `RDRecommendation`, `Citation`, `SourceList`, `ReportFooter`.
- Source content loaded from local JSON/TS, with a lightweight validation script (Zod if already installed; otherwise simple TypeScript/runtime guards).
- PDF rendered from coordinated print-specific markup using the same data.
- **No external UI framework required.** If needed, use only a tiny existing icon library; custom SVG is fine for the agent loop.
- **No backend, DB, auth, vector store, live crawler, LLM API, chat feature, or agents pipeline.** Research happens during preparation; the finished artifact is a curated publication.
- Deployable to Vercel with standard `npm run build`.
- Avoid heavy chart libraries unless a real sourced numeric chart exists. Here a comparison table/diagram is likely better than Recharts.
- Don't introduce mock data to make the site look “finished.” Omit an unsupported metric or state the evidence gap clearly.

### Data integrity tests (cheap, worth doing)

- All `sourceIds` referenced by claims, insights, and recommendations exist.
- URLs use `https://`, and bibliography has nonblank source titles/dates (or explicitly unknown if allowed).
- All four companies and all three dimensions are represented, or gaps are explicitly labeled.
- No current-model or “latest” claims without an as-of date.
- Report findings and dashboard findings are identical.
- No benchmark number appears without supporting evaluation metadata.

---

## 9. Execution plan for Codex

### Phase 1 — Research and select evidence (highest priority)

1. Identify the actual project environment. Initialize a minimal Next.js app if the repo is blank.
2. Browse the primary links in Section 3, then run a **fresh search for developments from the last 6–12 months**, prioritized to the latest quarter. Check official research indexes for newer items.
3. Record sources with exact dates in `research/SOURCES.md`. Record search terms, in/out criteria, and evidence gaps in `research/NOTES.md`.
4. Create draft fact notes for the 4 labs × 3 dimensions.
5. Select 8–12 useful primary references; verify substantive claims against them.
6. Form exactly 3 insights and 3 R&D questions from the material. Do not preselect winners.
7. Populate the shared structured dataset and validate citation IDs.

**Stop condition:** If a major claim cannot be substantiated, revise or remove it, rather than decorating it into the UI.

### Phase 2 — Establish the visual system

1. Implement global tokens, type scale, report masthead, grid and separators.
2. Build a **desktop cover + executive finding section** first, then inspect a screenshot.
3. Ensure the page feels like one coherent dossier with purposeful hierarchy before adding more content.
4. Build the central comparison table and one vector execution-loop diagram.

### Phase 3 — Complete the publication

1. Add analysis notes, R&D decision table and source list.
2. Implement small-screen conversion for the matrix.
3. Implement the two-page PDF using the same source IDs and vetted findings.
4. Add working download links, research cutoff label, and correct report metadata.

### Phase 4 — Quality assurance

1. Run build, type/lint checks where configured, and basic data-integrity validation.
2. Capture and visually inspect website screenshots at 1440px and 390px. Fix misalignment, ragged spacing, hidden links, broken matrix layout, and awkward section breaks.
3. Export the PDF. Render/inspect **both pages** for clipping, tiny text, missing citations, broken table rules, and inconsistent colors.
4. Manually verify every external source URL in the final publication, if networking is available; otherwise record which couldn't be checked.
5. Ensure that every clickable control works (including anchors and PDF download).
6. Summarize what was built, what sources were used, what remains unverified, and how to run it locally.

### Priority if time is tight

1. Verified technical findings and accurate citations.
2. Working desktop page with comparison matrix and clear recommendations.
3. Complete, coherent two-page report.
4. Mobile polish.
5. Optional interaction/animation **last** (skip if not essential).

---

## 10. Acceptance criteria / definition of done

- [ ] Research covers **OpenAI, Anthropic, Google DeepMind, and Meta**, including newly verified sources through a clearly stated cutoff.
- [ ] A source register with approximately 8–12 relevant dated primary references exists.
- [ ] Every substantial fact in the matrix and every research insight traces to at least one source.
- [ ] Three distinct research dimensions are compared honestly; undocumented details remain marked as unknown.
- [ ] Three grounded R&D priorities each contain a proposed experiment and measurable criterion.
- [ ] One high-quality, responsive, editorial **single-page website** is complete.
- [ ] One coordinated, legible, **exactly two-page A4 PDF** is generated and downloadable.
- [ ] Website and PDF use the same source identifiers, typographic system, neutral/teal palette, terminology, and conclusions.
- [ ] No fabricated numbers, leaderboards, rankings, research claims or patent-infringement implications.
- [ ] Mobile and desktop screenshots, PDF render, build output, and links are checked.
- [ ] `README.md` explains purpose, installation, source/cutoff rules, and constraints.

## 11. Scope freeze — explicitly out of scope

Do **not** add:

- Real-time model leaderboards, head-to-head API testing, scraping pipelines.
- Hosting an agent, terminal sandbox, AI chat widget, or user accounts.
- A patent search engine or claim-chart system.
- A comprehensive patent landscape / freedom-to-operate / infringement opinion.
- Four separate company profile pages or a bloated multi-route dashboard.
- Multi-model evaluation harnesses, paid inference, fine-tuning, reinforcement-learning experiments.
- Animation libraries, elaborate component frameworks, massive stock-image libraries, unnecessary databases.

A superb short report, excellent comparison table, source traceability, thoughtful R&D recommendations, and disciplined presentation are **the product**.

---

## 12. Final handoff format

When finished, respond with:

1. A link/path to the running web application or local dev URL and build instructions.
2. The saved `public/agent-wars-brief.pdf` path.
3. A concise description of the three strongest **source-backed findings**.
4. The actual research cutoff date and number of sources used.
5. Known evidence gaps/uncertainties and anything still requiring manual review.

**Do not report success for unfinished work.** If research access is blocked, deliver the most honest useful version and explicitly identify the missing validation.
