# Code/Job Assistant: Vibe-Coding My Own Recruiter

My first vibe-coded project was born out of the pure frustration of getting help from "AI assistants" that seem allergic to doing what I ask. I wanted a teammate that could move fast on job search busywork without arguing with me about style or hallucinating new bullet points. So I built one.

### The pitch that lit the fuse

While talking to staffing agencies during my job hunt, one recruiter told me he could make my LinkedIn profile "hot." I asked what that meant and never got an answer. What I did learn is that the magic is mostly time: they skim endless job posts, tailor resumes to match the keywords, and bend everything into applicant tracking system (ATS) formats. It's what I already do for myself, just slower.

Instead of paying someone to do the same repetitive work, I decided to do it with LLMs and scripts. If the agencies' advantage is speed, I wanted that leverage too.

### What I actually built

I started with a small pipeline that ingests three things: my base resume, the job description, and any LinkedIn notes I have on the company. The workflow then:

1. Normalizes everything into structured prompts so the model stops dropping required fields.
2. Extracts vocabulary, skills, and soft-skill phrasing recruiters sprinkle into the role.
3. Rewrites my resume summary, work bullets, and skills section so the keywords flow naturally instead of reading like word salad.
4. Generates a punchy LinkedIn headline plus a short "about" paragraph tuned to the same language.

All of it lives in a tiny CLI that spits out Markdown and plain text so I can paste straight into Notion, Google Docs, or LinkedIn. No dashboards, no microservices—just a fast feedback loop.

### Wrestling with code assistants

Working with current ML code copilots on this was maddening. Every time I iterated on prompt structure or file I/O, they'd rename variables, invent new helper functions, or collapse multiline strings so the LLM would break. I spent more time undoing their "help" than shipping features.

The turning point was switching to manual control: I wrote the orchestration code myself, kept prompt templates in source control, and only asked the assistant for quick lookups or syntax checks. Vibe-coding meant trusting my intuition about what felt right instead of debating with autocomplete ghosts.

### What it gives me today

- A resume draft that's already ATS-friendly before I even open a document editor.
- LinkedIn updates that echo the same keywords the job post uses.
- A running log of which phrasing each company responds to, so I can iterate on voice.
- More time to prep for interviews instead of formatting bullet points.

It's not perfect—the model still occasionally invents team sizes or metrics I never mentioned—but it's faster than waiting for a recruiter to circle back with edits.

### Where it goes next

I'm experimenting with:

- Cross-checking claims against my own project notes so nothing fictional slips through.
- Using a second pass with a smaller model to do spelling and brevity edits.
- Building a lightweight UI in Svelte (because of course I am) so I can drag-and-drop artifacts instead of juggling CLI flags.

For now, the assistant has made the job search feel less like paperwork and more like iterating on a personal product. The recruiters can keep their secret sauce; I'll keep shipping vibe-coded tools that move at my speed.
