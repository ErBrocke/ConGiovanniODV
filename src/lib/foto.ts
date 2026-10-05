// One-ink duotones made from the family's photos (see public/foto/README.txt).
// versioni: [width, height] of each file, smallest first.
export const FOTO = {
  'giovanni-ritratto': {
    versioni: [[480, 570], [760, 903]],
    alt: 'Giovanni Capanna sorride, con gli occhiali e un abito gessato.',
    ritaglio: false,
  },
  'giovanni-in-scena': {
    versioni: [[800, 589], [1600, 1179]],
    alt: 'Giovanni da giovane su un palco, camicia bianca e bretelle, parla al microfono con le braccia aperte.',
    ritaglio: false,
  },
  'in-scena-rosso': {
    versioni: [[800, 450], [1600, 900]],
    alt: 'Due attori in scena davanti a un sipario: un uomo in camicia bianca porge qualcosa a una donna in costume.',
    ritaglio: false,
  },
  consoli: {
    versioni: [[800, 540], [1600, 1081]],
    alt: 'Foto di gruppo in un salone con lampadari di cristallo; Giovanni è il quarto da sinistra.',
    ritaglio: false,
  },
  conversazione: {
    versioni: [[800, 534], [1024, 683]],
    alt: 'Giovanni, al centro, parla con due uomini durante un ricevimento.',
    ritaglio: false,
  },
  intervento: {
    versioni: [[800, 534], [1024, 683]],
    alt: 'Giovanni in piedi accanto a un leggio, in una sala rivestita di legno, indica lo schermo.',
    ritaglio: false,
  },
  'con-il-cane': {
    versioni: [[400, 536], [515, 690]],
    alt: 'Giovanni cammina all’aperto con gli occhiali da sole, accanto a un border collie al guinzaglio.',
    ritaglio: true,
  },
} as const;

export type NomeFoto = keyof typeof FOTO;
