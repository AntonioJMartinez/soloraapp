# Solora SEO Roadmap 2026

Updated: June 9, 2026

## Positioning

Solora should own the planning problem, not only individual forecast keywords:

> Plan every sky worth capturing.

The app supports a defensible content model around:

- Sun, Moon, Milky Way, star, planet, galaxy, and deep-sky target paths in map and AR views.
- Sunrise, sunset, twilight, golden hour, blue hour, cloud, visibility, wind, and weather planning.
- Moon phase, illumination, rise/set timing, and landscape alignment.
- Galactic-center visibility windows, orientation, altitude, moon interference, and 14-day planning.
- Eclipses, meteor showers, supermoons, planetary events, aurora forecasts, and night-sky visibility.
- Saved location comparison, alerts, widgets, Live Activities, Apple Watch, tides, and wave conditions.

Claims about forecast accuracy, update frequency, offline duration, or performance gains should not be published without measured evidence.

## Phase 1: Technical Trust and Eclipse Foundation

Status: implemented June 9, 2026

- Use `https://www.solora.app` consistently for canonicals, hreflang, robots, schema, and sitemap.
- Use a country-neutral App Store URL.
- Remove unsupported rating-volume claims.
- Remove metadata references to missing favicon and manifest files.
- Stop publishing false Open Graph image dimensions.
- Use real visible article word counts in structured data.
- Add article update dates, breadcrumb schema, and official-source sections.
- Keep sitemap modification dates stable between unchanged builds.
- Add a prominent multilingual homepage route into the Spain eclipse guide.
- Expand the Spanish and English eclipse guide with official IGN and NASA facts.
- Strengthen Sun, Moon, Milky Way, star-tracker, widget, Live Activity, and Apple Watch messaging.

## Phase 2: Spain Eclipse Campaign

Target window: June 10 to August 12, 2026

### Primary page

Keep `/es/blog/total-solar-eclipse-august-2026/` as the canonical campaign hub. Refresh it whenever official access, safety, transport, or observation guidance changes.

Research update completed June 9, 2026:

- Added a ranked comparison based on official IGN geometry, August cloud climatology, horizon constraints and published observation infrastructure.
- Identified the northern Meseta as the best overall region, with Palencia, León, Burgos/Aranda and Soria providing the strongest balance.
- Added official observation-site updates from Soria and Aragón.
- Reframed A Coruña as the higher-Sun, higher-cloud option and Mallorca as a specialist low-horizon photography option.

### Supporting pages

Publish only pages with genuinely different local value. Avoid thin city pages that repeat the same text.

1. Eclipse total 2026 in A Coruña: times, Sun altitude, western horizon, access, and photography plan.
2. Eclipse total 2026 in Asturias: Oviedo/Gijón comparison and coastal cloud strategy.
3. Eclipse total 2026 in Bilbao and northern Spain: times, terrain, horizon, and backup locations.
4. Eclipse total 2026 in Burgos: longer totality, inland weather, and photo scouting.
5. Eclipse total 2026 in Zaragoza: low-Sun composition and heat/haze planning.
6. Eclipse total 2026 in València: path edge, low horizon, and exact-location verification.
7. Eclipse total 2026 in Palma: two-degree Sun altitude and unobstructed sea-horizon planning.
8. How to photograph the 2026 solar eclipse safely.
9. Eclipse glasses and solar-filter safety: ISO 12312-2 checklist.
10. Cloud forecast for the Spain eclipse: how to make the final 48-hour location decision.

Implemented June 9, 2026: A Coruña, Burgos, Palma and safe eclipse photography.

Each local guide should include official IGN municipality data, an original location workflow, local horizon considerations, internal links to the main guide and relevant Solora feature pages, and a visible update date.

### Publishing cadence

- June: main guide, safety guide, and A Coruña/Burgos/Palma location pages.
- July: regional comparison pages, photography guide, and email/social distribution.
- August 1-9: update official details, access notes, and planning checklists.
- August 10-12: publish forecast-led updates without changing the evergreen canonical URL.
- August 13 onward: convert the hub into a results, photos, lessons, and next-Spain-eclipse guide.

## Phase 3: Product-Led Topic Clusters

Create dedicated pages for real app capabilities that currently lack a strong search landing page:

1. Sun tracker and Sun path app. Implemented June 9, 2026.
2. Moon tracker and Moon path app. Implemented June 9, 2026.
3. Star tracker for stars, planets, galaxies, and deep-sky objects. Implemented June 9, 2026.
4. Astronomical events calendar and eclipse tracker.
5. Night-sky visibility forecast.
6. Cloud-cover forecast for photography.
7. Weather app for photographers.
8. Tide and wave planner for coastal photography.
9. Astronomy widgets, Live Activities, and Apple Watch planning.
10. Location comparison for landscape and astrophotography.

Every feature page needs:

- A single primary search intent.
- Screens or diagrams showing the real workflow.
- Specific capabilities verified in the app.
- Use cases, limitations, FAQs, and links to relevant guides.
- A direct App Store conversion path with campaign tracking.

## Phase 4: Content Quality

The site currently exports many localized articles with short, reusable section patterns. Before scaling article count:

- Measure indexed pages, impressions, and cannibalization in Google Search Console.
- Expand pages that already earn impressions or support a strategic cluster.
- Merge or remove low-value pages that overlap the same intent.
- Do not generate location or event pages without unique data and useful local guidance.
- Add an editorial review date and primary sources to time-sensitive astronomy content.
- Build author, support, privacy, and contact pages to strengthen trust. Implemented June 9, 2026.
- Add original screenshots, comparison tables, and planning examples where they clarify the workflow.

## Phase 5: Performance and Media

- Convert large PNG/JPEG assets to appropriately sized AVIF or WebP variants.
- Serve responsive image dimensions instead of full-resolution files everywhere.
- Move static homepage sections out of the client-only component where practical.
- Keep the animated phone preview isolated so the whole homepage does not require hydration.
- Re-enable TypeScript and ESLint validation in production builds after the existing project configuration is cleaned up.
- Track Core Web Vitals on the live custom domain.

Initial homepage image loading improvement completed June 9, 2026: only the active animated phone screenshot is now mounted, and screenshot dimensions are explicit. Format conversion, responsive variants and hydration isolation remain pending.

## Technical SEO Audit: June 9, 2026

The production export has complete titles, descriptions, canonicals and one H1 on indexable content pages. The highest-priority remaining issue is duplicate localized fallback content:

- Tracker pages and trust pages currently expose English content under several French, Italian, German, Portuguese and Chinese URLs.
- These fallbacks create duplicate titles and descriptions while advertising hreflang variants that are not genuinely translated.
- Translate them fully or mark fallback routes `noindex,follow` with a canonical to the source-language page. Do this before adding more localized landing pages.

Additional audit findings:

- Many article titles exceed normal search-result display length, especially event-calendar and moon-calendar translations.
- The large article artwork and press assets still need modern responsive formats.
- The website has no active analytics or App Store click measurement despite the analytics package being installed.
- ESLint remains disabled during production builds.
- The homepage is still predominantly client-rendered because the animated preview shares the main component.
- Search Console data is still needed before deciding which short or overlapping articles to expand, merge or remove.

## Measurement

Minimum reporting should include:

- Google Search Console clicks, impressions, average position, indexed pages, and queries by language.
- Organic landing-page sessions and App Store click-through rate.
- Eclipse hub rankings for Spanish queries containing `eclipse solar 2026`, `España`, `dónde verlo`, `hora`, and major locations.
- Feature-cluster rankings for Sun tracker, Moon tracker, Milky Way planner, astronomy events, and photography weather terms.
- App Store outbound clicks tagged by landing page, language, and campaign.
- Branded versus non-branded organic growth.

## Near-Term Priorities

1. Monitor Search Console indexing and query data for the homepage, eclipse hub and new Spanish supporting pages.
2. Fix untranslated localized fallback pages and invalid hreflang relationships. Completed June 9, 2026: fallback pages are noindex, canonicalized to authored translations, removed from the sitemap and excluded from hreflang.
3. Add consent-aware App Store outbound click measurement with landing page, language and campaign attribution. Implemented June 9, 2026; activation requires the `GA_MEASUREMENT_ID` GitHub repository variable.
4. Shorten overlong titles and resolve metadata duplication on indexable articles. Completed June 9, 2026 through bounded search titles and corrected fallback indexing.
5. Fix the ESLint configuration and stop ignoring lint failures. TypeScript validation is already enabled.
6. Convert the heaviest homepage and article images to responsive AVIF/WebP variants. Completed June 9, 2026 with responsive AVIF sources and original-format fallbacks.
7. Isolate the animated phone preview and move static homepage sections back to server rendering.
8. Publish the next genuinely distinct eclipse pages: Soria/Aranda comparison, Aragón official-site guide and final 48-hour cloud-decision guide.
9. Build the remaining product-led pages: astronomical events, night-sky visibility, photography cloud forecast, tides/waves, widgets and location comparison.

GA4 activation:

1. Create a GA4 web data stream for `https://www.solora.app`.
2. In GitHub, add the repository variable `GA_MEASUREMENT_ID` with the stream ID, such as `G-XXXXXXXXXX`.
3. Redeploy `main`. The consent dialog and App Store click event named `app_store_click` will then become active.
