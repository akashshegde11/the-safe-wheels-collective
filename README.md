# The Safe Wheels Collective

A static, mobile-first destinations repository for riders in and around Bengaluru. Built for low-connectivity use in remote areas — no servers, no databases, just GitHub Pages.

## Features

### Browse & Navigate
- **500+ destinations** across 9 exit routes from Bengaluru (Tumakuru, Hassana, Magadi, Mysuru, Kanakapura, Hosur, Hoskote, Devanahalli, Special Routes)
- **Show All** — combine every destination into one searchable, filterable list when you don't care about the route
- **Search** — filter destinations by name or notes
- **Sort** — alphabetically (A–Z / Z–A) or by distance from Bengaluru (near / far)
- **State filter** — narrow down by state (Karnataka, Kerala, Tamil Nadu, etc.)
- **Distance filter** — preset ranges (under 100 km, 100–200 km, 200–300 km, 300–500 km, 500+ km) to plan by ride length
- **Pagination** — 25 destinations per page with First/Previous/Next/Last controls
- **Per-exit counts** — each dropdown option shows how many destinations it contains

### Discover
- **Surprise Me!** — random destination picker from the current filtered list, with a reroll button to try another and an option to add the pick to your trip
- **Alternate routes** — destinations reachable via multiple exits show all route options with per-route distance and notes
- **Icon tags** — each destination can show icons for accessibility (car/motorcycle), terrain (trekking, forest), type (temple, waterfall, food), caution, entry fee, and more
- **Collapsible icon legend** — tap to expand/collapse the full icon reference
- **Icon filter** — tap any icon in the legend to filter destinations by that type (e.g. show only waterfalls, only temples)
- **Destination count badge** — shows how many destinations match your current filters
- **Recently viewed** — last 5 clicked destinations are remembered across sessions for quick access
- **Trip planner** — add multiple destinations to a trip (from cards or modals), reorder stops with ▲/▼ buttons, optionally start/end at Bengaluru, and open the full route in Google Maps

### Personalize
- **Favorites** — star destinations to bookmark them (stored in localStorage), with a toggle to show only favorites
- **Dark mode** — toggle switch optimized for night riding, preference remembered across sessions
- **Exit memory** — your last selected exit route is remembered on next visit
- **Share** — share any destination's Google Maps link via the native OS share sheet (WhatsApp, Telegram, etc.) using the Web Share API

### Contribute
- **Suggest a Place** — submit new destinations via an embedded Google Form, or open it in a new tab

### Keyboard Shortcuts (Desktop)
| Key | Action |
|-----|--------|
| `/` | Focus search |
| `R` | Random pick |
| `Esc` | Close modal |

### Design
- Muted teal & warm neutral color scheme — optimized for outdoor sunlight readability and night sky viewing
- Mobile-first with 44px touch targets, sticky controls, and edge-to-edge layout on small screens
- Compact icon toolbar on mobile — sort, state, distance filters collapse to icon-only circular buttons; full text visible on desktop
- Two-row destination cards — name with ellipsis truncation on top, metadata and actions on bottom for clean mobile portrait layout
- Floating back-to-top button appears after scrolling down
- Fully static — hosted on GitHub Pages with zero external dependencies beyond Google Fonts and Font Awesome

## Destination Manager CLI

A Node.js CLI tool (`manage.js`) for adding or updating destinations in `script.js`.

### Prerequisites

- [Node.js](https://nodejs.org/) (any recent version)

### Usage

```bash
node manage.js
```

The tool will walk you through the following prompts:

```
=== TSWC Destination Manager ===

Exits:
  1. tumakuru
  2. hassana
  3. magadi
  4. mysuru
  5. kanakapura
  6. hosur
  7. hoskote
  8. devanahalli
  9. specials

Exit (number or name): 5
Name: Udupi Sathkaar Gundlupete
Link: https://maps.app.goo.gl/UK6uh3GoZtsP85LG6
Icons (comma-separated numbers or names): 6
Note:
Distance in km: 200
State: Karnataka

--- Preview ---
    {
      name: "Udupi Sathkaar Gundlupete",
      link: "https://maps.app.goo.gl/UK6uh3GoZtsP85LG6",
      icons: ["fa-utensils"],
      distance: 200,
      state: "Karnataka"
    }
---------------

Add this entry? (y/n): y
Done! Added "Udupi Sathkaar Gundlupete" in kanakapura.

Add/update another? (y/n): n
```

### Adding a new destination

1. Run `node manage.js`
2. Select the exit route by number or name
3. Enter the destination name
4. Fill in the fields — only **name** and **link** are required, the rest are optional
5. Review the preview and confirm with `y`
6. The entry is inserted alphabetically into the correct exit array in `script.js`
7. Choose to add/update another or exit

### Updating an existing destination

1. Run `node manage.js`
2. Select the same exit route and enter the exact destination name
3. The tool detects the existing entry and shows its current values
4. Press **Enter** to keep a field's current value, or type a new value to replace it
5. Review and confirm — the entry is updated in place

### Icon reference

Select icons by number during the prompt:

| # | Icon | Meaning |
|---|------|---------|
| 1 | `fa-car` | Accessible by Car |
| 2 | `fa-motorcycle` | Accessible by Motorcycle |
| 3 | `fa-hiking` | Trekking Destination |
| 4 | `fa-triangle-exclamation` | Caution Advised |
| 5 | `fa-gopuram` | Temple / Religious Site |
| 6 | `fa-utensils` | Food / Restaurant |
| 7 | `fa-x` | Closed / Not Accessible |
| 8 | `fa-cross` | Church / Christian Site |
| 9 | `fa-droplet` | Waterfall / Water Body |
| 10 | `fa-tree` | Forest / Nature |
| 11 | `fa-s` | Scenic Twisties |
| 12 | `fa-flag-checkered` | Racetrack |
| 13 | `fa-baseball-bat-ball` | Sports Venue |
| 14 | `fa-indian-rupee-sign` | Entry Fee |
| 15 | `fa-leaf` | Garden / Park |

Multiple icons: enter comma-separated numbers, e.g. `1,2,5` for Car + Motorcycle + Temple.

### Alternate routes

Some destinations are reachable via multiple exits. Use the `Alt exits` prompt to specify alternate routes:

```
Alt exits (comma-separated numbers or names): 6
  Note for hosur route: Via Hosur Highway — longer but no time restrictions
  Distance via hosur: 280
```

This adds an `altExits` array to the entry. The website shows these alternate routes in the destination's info modal.

## Files

| File | Description |
|------|-------------|
| `index.html` | Main page structure |
| `script.js` | Destination data and all application logic |
| `styles.css` | Styling with CSS custom properties for theming |
| `manage.js` | CLI tool for managing destinations |
| `tswc_icon.png` | Site icon |

## Hosting

Hosted on [GitHub Pages](https://pages.github.com/) — push to `main` and it's live. No build step required.
