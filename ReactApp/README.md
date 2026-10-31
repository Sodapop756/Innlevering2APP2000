# Turapp – React-prototype

Frontend-prototype for turappen (prosjektoppgave 2025/2026, APP2000).
Laget med React og Vite. Dataene er hardkodet i `src/data`, og det finnes
ingen backend ennå.

## Kjøre appen

Du trenger Node.js og npm. Fra mappen `ReactApp`:

```
npm install
npm run dev
```

Åpne deretter http://localhost:5173 i nettleseren.

Andre kommandoer:

| Kommando          | Hva den gjør                 |
| ----------------- | ---------------------------- |
| `npm run build`   | Bygger appen for produksjon  |
| `npm run lint`    | Sjekker koden med ESLint     |
| `npm run preview` | Viser den bygde appen lokalt |

## Hva appen kan

- **Hytter:** liste med søk og filter (type og prisnivå), og en detaljside per hytte
- **Turer:** liste og detaljside, knyttet til hyttene via `connectedTripIds`
- **Favoritter:** hjerteknapp på hyttekortene og en egen favorittside
- **Innlogging:** enkel demo uten ekte passordsjekk (kommer med backend)
- **Bestilling:** skjema med validering og bestillingsliste med sum, kun etter innlogging

## Mappestruktur

```
src/
├── components/   gjenbrukbare deler (NavBar, Footer, HytteKort, skjema m.m.)
├── context/      delt tilstand: FavoritesContext og AuthContext
├── data/         hardkodede data: cabins.js og trips.js
├── pages/        én fil per side/rute
├── App.jsx       ruter
└── Layout.jsx    banner, meny og bunntekst rundt alle sider
```

## Begrensninger

- Alle data er hardkodet. Innlogging, favoritter og bestillinger lagres ikke
  og nullstilles når siden lastes på nytt.
- Hyttebildene i dataene peker til `example.org` og vises derfor som
  erstatningsbilde.
