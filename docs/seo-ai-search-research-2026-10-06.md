# Solora: SEO and AI search research

Research date: October 6, 2026. Scope: live website, repository, supplied Search Console screenshot, sampled web search results, and official search-platform documentation. This is a research report; no website changes or deployments were made.

## Main finding

Solora has working basic crawlability, but the live website underserves the searches the product should compete for. Its positioning emphasizes a broad astronomy and photography planner; its sunrise/sunset landing page does not clearly demonstrate sunset-quality prediction; most sampled guides are short templates. Competitors give people forecasts, explanations, and concrete product facts directly on the web.

The best initial commercial target is **sunset prediction app / sunset forecast app for iPhone**, with sunrise prediction and golden-hour planning supporting it. Bare “sunset” and “sunrise” have mixed intent and should not be the initial success criterion. For “sunset today” and city queries, a useful calculation or forecast experience is a stronger fit than another download page.

These findings explain plausible relevance and usefulness weaknesses. They do not establish Google's exact reason for any individual ranking or prove an authority deficit. Search Console query/page data and a backlink audit are still needed.

## What the screenshot establishes

- “solora”: 280 clicks / 22,639 impressions, about 1.24% CTR.
- “solora download”: 2 / 1,974, about 0.10% CTR.
- “milky way planner”: 2 / 13; “milkyway planner”: 1 / 12; “sun tracker”: 1 / 10.
- Among these ten displayed rows, 308 of 312 clicks are from Solora-like branded terms; four come from the three generic planning terms.

The table is sorted by clicks. A keyword missing from this crop may still have impressions or zero clicks elsewhere. The date range, country, device, Search Console property, average position, and landing pages are unknown. Do not interpret the crop as the site's complete nonbrand performance. “Solora” may also have ambiguous intent, but that hypothesis needs the country/position/page breakdown.

## Confirmed live and source findings

| Finding | Evidence | Recommended response | Priority |
|---|---|---|---|
| Crawl foundations work on sampled URLs | Homepage and sunrise/sunset page return 200; self-referencing www canonicals; robots allows public paths; sitemap returns 200 with 63 URL entries | Inspect Google-selected canonicals and indexing in Search Console; do not rebuild these foundations without evidence | Preserve |
| Main message is very broad | Homepage title includes sunrise, sunset, Moon, aurora, eclipse; H1 is “Plan the sky, perfect the moment” | Give the hero a clear sunrise/sunset forecasting promise; retain other capabilities below it | High |
| Main sunset page serves planning more clearly than prediction | `/sunrise-sunset-app/` title/H1: “Sunrise & Sunset App for Photography Planning”; FAQ covers app selection and location comparison | Expand the existing URL into a prediction-led product hub with real screens, forecast interpretation, limits and verified feature details | High |
| Most sitemap articles have little substantive content | Eight of nine English article URLs sampled have approximately 140–190 whitespace-separated words in `<article>`; eclipse guide approximately 2,968 | Rewrite useful strategic guides; assess overlap and consolidate weak pages after reviewing GSC | High |
| Golden-hour guide does not deliver its title's promise | `/blog/golden-hour-photography-guide/` uses generic “What this guide helps you plan”, “How to prepare”, “Photography note” sections | Explain timing, sun elevation, practical workflow, examples, settings and common mistakes; sources where needed | High |
| Homepage promotes a past event as upcoming | October 6 homepage still asks visitors to plan the August 12, 2026 eclipse | Replace campaign emphasis with evergreen sunrise/sunset content; keep event URL as an honest retrospective/next-event resource | High |
| Strategic weather article excluded from sitemap | `/blog/weather-patterns-sky-photography/` returns 200 with a self-canonical but is absent from XML | Improve it first, then include if intended to be indexed; absence does not itself prevent indexing | Medium |
| Sitemap dates need editorial ownership | Static-page lastModified is fixed to July 4 in `app/sitemap.ts` | Use genuine per-page substantial modification dates; do not change dates on every build | Medium |
| Additional language feature URLs are not search targets currently | Sample `/fr/sunrise-sunset-app/` is `noindex,follow`, canonical to English; indexable feature locales are English/Spanish in `lib/i18n.ts` | Concentrate on EN/ES first; only index additional languages after content and translation review | Medium |
| Existing structured data is present | Raw HTML contains MobileApplication/WebPage on home, FAQPage/WebPage on feature page, BlogPosting/BreadcrumbList on articles; source confirms generation | Validate correctness against visible content and Rich Results Test; do not claim missing schema | Preserve |
| Main text is in initial HTML | Homepage and feature content readable in HTTP response despite home being a client component | Keep readable HTML; optimize hydration/images separately based on measured performance | Preserve |
| Analytics implementation already exists | `components/analytics-consent.tsx` initializes optional GA and `app_store_click`; deployment reads GA variable | Verify production measurement ID, consent behavior, events and attribution; implementation is not proof of successful delivery | High |
| No llms.txt | `/llms.txt` returns 404 | Optional experiment after substantive improvements, not a ranking fix | Low |

Word counts are approximate extraction checks, not quality thresholds. The actual issue is failure to answer the promised question. No Core Web Vitals, Google indexing coverage, hosting crawler logs, or backlink metrics were available. French URL behavior is a sample, not a complete locale audit.

Source files: `lib/marketing-content.ts`, `lib/blog-posts.ts`, `lib/i18n.ts`, `lib/metadata.ts`, `lib/site.ts`, `app/robots.ts`, `app/sitemap.ts`, `components/seo-feature-page.tsx`, `components/blog-article-template.tsx`, `components/analytics-consent.tsx`. The existing June roadmap is historical planning, not proof of current implementation. The custom domain and current configuration supersede the old GitHub Pages subpath description: both the apex domain and old Pages homepage resolved to `https://www.solora.app/` in this check.

## Keyword and intent map

Priorities below reflect relevance, intent and observed competitor page formats. They are not measured search-volume or keyword-difficulty scores. Search samples are not localized Google rank tracking.

| Cluster | Searches to target | Page and user value | Sequence |
|---|---|---|---|
| App selection | sunset prediction app, sunset forecast app, sunrise prediction app, sunset app for iPhone | Expand existing `/sunrise-sunset-app/`; demonstrate the real product and what users can predict | First |
| Sunset quality education | how to predict a colorful sunset, will the sunset be good tonight, sunset quality prediction | One substantial educational guide explaining factors, interpretation and uncertainty; distinguish an explanation from an actual live forecast | First |
| Golden hour | golden hour app, golden hour photography, blue hour vs golden hour | Strengthen existing feature page and guide; link to timing tool when available | First |
| Sun path | sun tracker app, sun path app for photographers, sunset direction | Existing `/sun-tracker-app/`, with screenshots and composition examples | Second |
| Spanish app intent | app para predecir atardeceres, app de puesta de sol, predicción de atardeceres, app hora dorada | Human-reviewed Spanish equivalent of the product hub and guide; test variants with ES-market query data | First |
| Live utility | sunset today, sunrise tomorrow, golden hour today, sunset time Madrid | Real location/date calculator and, separately, quality forecasts if a licensed data backend exists | Later product project |
| Alternatives/comparison | Solora vs Alpenglow, Alpenglow alternative, sunset prediction apps for iPhone | Transparent comparison of tested features, platform support, cost and limitations; visible publisher disclosure | After facts verified |
| Broad head terms | sunset, sunrise | Long-term topical reach; assess definitions, photography and local time intent separately | Not initial KPI |

Keep one canonical product hub for equivalent sunrise/sunset app searches initially. Do not create multiple near-identical pages for “prediction”, “forecast”, “quality” and “AI”. Create another page only when it serves a distinct user task.

## What competitors do better in the sampled results

- [Alpenglow](https://alpenglowapp.com/) has an explicit sunset forecast proposition, a city forecast experience, product screenshots, detailed FAQs, and explanations of forecast inputs. Its [sunset-today page](https://alpenglowapp.com/sunset-today) serves a different intent from downloading an app. These are observed features, not proof of which factor causes its ranking; performance claims on its website are not independently verified here.
- [Sunsethue](https://sunsethue.com/) offers location lookup, forecast interpretation, a model explanation and uncertainty guidance. This directly addresses whether tonight's sky will be colorful.
- [SunsetWx](https://sunsetwx.com/) exposes sunrise/sunset forecast products, giving it a concrete utility proposition.
- [Time and Date](https://www.timeanddate.com/sun/) provides a city lookup and local solar calculations. It is a better direct match for timing queries than a product landing page.

Solora does not need to copy all competitors. Its credible differentiator could be sunset-quality decisions combined with Sun-path scouting, saved locations and the broader Apple-platform workflow. First verify the actual prediction model, horizon, rating scale, update schedule and free/Premium boundaries. The website and screenshot alt text suggest quality ratings, but this research did not test the native app or its backend.

## Proposed first page brief

Existing URL: `/sunrise-sunset-app/`. Preserve URL history unless GSC evidence justifies migration.

Candidate title: **Sunset Prediction & Sunrise Forecast App | Solora**.

Candidate H1: **Plan better sunrises and sunsets with Solora**.

Suggested opening, subject to product verification: “Solora helps you plan sunrise and sunset photography on iPhone, iPad, Mac and Apple Watch. Check forecast conditions, compare locations, and preview the Sun's path before choosing where and when to shoot.” Add an explicit quality-rating sentence only after verifying what the score actually measures.

Required material:

1. Screenshot-led explanation of a real sunset forecast, with an example's location, date and interpretation. Historical examples must be labeled; no placeholder score presented as today's forecast.
2. Separate astronomical times, weather forecasts and subjective sunset-quality estimates. Explain that a quality score is not automatically a probability of a beautiful sunset.
3. Explain verified inputs and known limitations without exposing secrets or inventing accuracy percentages.
4. Show the workflow: choose location → inspect timing and conditions → check direction/horizon → compare viewpoints → set an available alert.
5. Publish supported platforms, minimum OS versions, free/Premium boundary, update frequency and forecast horizon if verified.
6. Answer practical FAQs: does it predict color or just time; how far ahead; why forecasts change; offline behavior; alerts; subscriptions.
7. Link directly to the sunset-quality guide, golden-hour guide and Sun tracker. Link back from each guide using descriptive text.
8. Use a real author/reviewer and genuine update date; link to About and Support.

This is a content brief, not approved final product claims.

## AI search and ChatGPT

Three outcomes need separate measurement: being retrieved/cited as a website, being recommended as an app, and being callable as a tool/plugin. A site citation does not mean ChatGPT has access to Solora forecasts.

### Search access

[OpenAI's crawler documentation](https://developers.openai.com/api/docs/bots) distinguishes **OAI-SearchBot** (search discovery) from **GPTBot** (potential model training). Training permission is not required for search eligibility. Solora's wildcard robots rule permits public crawling already; hosting/IP access still needs verification from logs or a verified crawler visit. Do not change training permissions merely to pursue citations.

[Google's official AI Search guidance](https://developers.google.com/search/docs/appearance/ai-features) says normal SEO practices apply, supporting pages must be indexed and snippet-eligible, and no special AI files or schema are required. Googlebot is the relevant Search crawler. Ordinary Web traffic in Search Console includes AI features and is not a separate AI citation report.

### Material that is useful to cite

- Clear product identity and a verified feature table: what Solora does, supported devices, cost boundaries and limitations.
- Direct answers to sunset questions supported by original examples and trustworthy meteorological/astronomical references.
- A methodology page that makes the distinction between timing calculations, weather inputs and quality estimates understandable.
- Fair comparisons using current, tested facts and a visible disclosure that Solora publishes the comparison.
- Consistent product naming and website links across App Store, author profiles, press resources and genuine independent coverage. Seek editorial reviews, photography demonstrations and useful collaborations; do not fabricate reviews or citations.
- HTML headings, readable tables, visible dates and clear screenshots. Organize for readers rather than enforcing an artificial answer word count.

These are sensible retrieval and credibility improvements, not guaranteed ranking factors or promised citation boosts. This research did not run a controlled ChatGPT/Perplexity/Gemini visibility benchmark, so current brand citation share is unknown.

### Low-value shortcuts

- `llms.txt` is optional and experimental here. The checked official sources do not establish that adding it raises Solora's ChatGPT rankings.
- More schema cannot compensate for generic content. FAQ content may help users, but [Google limits FAQ rich results to authoritative government and health sites](https://developers.google.com/search/blog/2023/08/howto-faq-changes); Solora should not expect those rich results.
- Meta keywords do not improve Google ranking, per [Google's SEO guidance](https://developers.google.com/search/docs/fundamentals/seo-starter-guide).
- Do not publish unsupported “best AI forecasts” or “most accurate” claims. Show evidence or use precise descriptive language.
- Do not generate hundreds of city pages that have no location-specific data. Do not stamp fresh dates on unchanged articles.

### Being available as an actual ChatGPT tool

If the goal is “ask ChatGPT whether Madrid's sunset is worth photographing”, a real integration could expose narrow read-only tools such as `get_sun_times`, `get_sunset_quality_forecast`, and `compare_locations`. Outputs should include resolved coordinates, local date/timezone, source/model, generation time, horizon, uncertainty and data limitations. Tool names here are proposals, not existing capabilities.

This requires a usable backend, data redistribution/licensing checks, reliable API operations, transparent location handling and the applicable OpenAI review/publication process. No backend or integration was established by this audit. Public directory discovery and proactive suggestions are distinct from ordinary website search ranking; [current OpenAI review guidance](https://developers.openai.com/plugins/deploy/app-review) says enhanced distribution is selective and cannot be requested. Treat integration as a later product investment, not a prerequisite for SEO.

## A web tool worth considering

Start with a sunrise/sunset/golden-hour calculator if the business wants utility traffic. Correctly handle coordinates, IANA timezones, daylight saving time, date changes, polar day/night, definitions and horizon limitations. Make the useful result readable and attributable, with stable links where appropriate.

A quality forecast is a separate weather/model product. GitHub Pages static export cannot keep secret API credentials or provide a live backend by itself. A client-only forecast may help visitors but is less useful for crawlers that do not execute it; choose deliberate pre-rendering or a backend-rendered/indexable design. Always show freshness, and never invent values when data is missing. Pilot a few useful locations before scaling; use GSC demand rather than arbitrary page counts.

## Prioritized 90-day work plan

| Window | Deliverable | Acceptance check |
|---|---|---|
| Days 1–7 | Establish query/page baseline; inspect indexation of product hub and main guides; verify analytics; remove expired campaign emphasis | Record selected canonical/index status and event delivery; separate branded/nonbranded EN/ES performance |
| Days 8–21 | Rewrite existing sunrise/sunset hub and golden-hour guide; publish a substantial sunset-quality guide; mirror in reviewed Spanish | Real workflow/screens, verified claims, answers to the promised questions, internal links and correct metadata/schema |
| Days 22–45 | Improve weather guide; triage other templates; add prediction methodology and product facts; pitch relevant reviewers | Editorial review complete; useful pages in sitemap; reviewed weak-page consolidation decisions; genuine distribution activity |
| Days 46–90 | Evaluate utility pilot and comparisons; repeat visibility measurement; decide whether tool integration is justified | Evidence of query/page progress and conversion; no unsupported forecasts or claims; clear backend cost/licensing assessment |

This is sequencing, not a ranking guarantee. Google may take longer to recrawl or surface changes, and traffic can be seasonal.

## Measurement and missing evidence

1. Export 3- and 16-month Search Console performance by query/page/country/device, with clicks, impressions, CTR and position. Filter `sunset|sunrise|golden hour|sun tracker|atardecer|amanecer|puesta de sol|hora dorada`; then inspect exact terms and page mappings. Build a branded exclusion including spelling variants rather than assuming one regex covers all branded intent.
2. Inspect `/sunrise-sunset-app/`, its Spanish version, `/golden-hour-photography-app/`, the golden-hour guide and weather guide in URL Inspection. Record discovery, last crawl, index status, submitted versus Google-selected canonical and rendered content.
3. Verify sitemap processing and consented `app_store_click` delivery. A click is not an install; use App Store campaign attribution where available to connect acquisition, downloads and subscriptions.
4. Track nonbrand impressions/clicks and conversions by cluster and landing page. Compare equivalent periods and account for seasonal astronomy demand. Average position alone can move because query mix changes.
5. Track ChatGPT referrals and `utm_source=chatgpt.com`, described in [OpenAI's publisher FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq). Consent refusal means analytics undercounts traffic; referrals do not measure all mentions or citations.
6. Establish a manual AI baseline with prompts such as “best sunset prediction app for iPhone”, “app to predict colorful sunsets”, “sunrise forecast app with Apple Watch”, “Solora vs Alpenglow”, “how to know if tonight's sunset will be colorful”, and Spanish equivalents. Repeat across available platforms, three fresh sessions per prompt, with search enabled where applicable. Record date, market/language, platform/mode, exact prompt, mention, linked citation, cited page, competitors and factual correctness. Keep mentions and citations separate. Report small-sample counts, not universal visibility percentages.
7. Obtain backlink/referring-domain data and measured mobile Core Web Vitals before asserting an authority or performance cause. Verify native-app capabilities and forecast data before publishing the proposed product facts.

No paid keyword-volume dataset, complete GSC account, AI-platform benchmark, native-app verification or live conversion report was used. The reliable immediate recommendation is to strengthen a few high-intent pages and measure results, before expanding page count or investing in an integration.
