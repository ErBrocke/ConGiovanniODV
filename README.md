# Con Giovanni ODV

Sito dell'associazione Con Giovanni ODV e del Premio Giovanni Capanna.
Astro (sito statico), pubblicato su Cloudflare Pages: https://congiovanniodv.pages.dev

## Pubblicazione

Cloudflare Pages: comando di build `npm run build`, cartella `dist`.
In locale: `npm install` e poi `npm run dev`.

## Aggiungere o aggiornare un'edizione del Premio

Ogni edizione è un file in `src/content/edizioni/`, chiamato con l'anno (es. `2027.md`).
La copertina della home annuncia da sola la prossima edizione; il sito si aggiorna a ogni modifica salvata su GitHub.

```yaml
---
numero: 5                      # numero dell'edizione (diventa V)
data: 2027-11-27
ora: "17:00"                   # facoltativo: senza ora appare "orario da annunciare"
luogo: "Auditorium del Conservatorio Pietro Mascagni, Livorno"
sintesi: "Una frase su chi viene premiato e cosa succede."
premiati:
  - nome: "Nome Cognome"
    disciplina: "pianoforte"
    nota: "Breve presentazione."
programma:                     # facoltativo: la scaletta della serata
  - voce: "Nome Cognome, pianoforte"
    brani:
      - autore: "Compositore"
        titolo: "Titolo del brano"
        dettaglio: "movimenti, durata..."
note:
  - "Altre informazioni."
stampa:
  - testata: "Livornopress"
    titolo: "Titolo dell'articolo"
    data: 2027-11-20
    url: "https://..."
---

Testo libero sulla serata (facoltativo).
```

## Foto

Le foto in `public/foto/` sono convertite in bicromia (blu dell'associazione su carta) e salvate in WebP a due larghezze; vedi `public/foto/README.txt`.

## Design

Il sito è impaginato come un programma di sala stampato in un solo inchiostro: le regole sono in `DESIGN.md`, i contenuti stabili dell'associazione in `PRODUCT.md`.
