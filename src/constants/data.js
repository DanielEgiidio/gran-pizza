import images from "./images";

const wines = [
  {
    title: "Chapel Hill Shiraz",
    price: "R$ 268",
    tags: "AU | Garrafa",
  },
  {
    title: "Catena Malbee",
    price: "R$ 268",
    tags: "AU | Garrafa",
  },
  {
    title: "La Vieillw Rose",
    price: "R$ 215",
    tags: "FR | 750 ml",
  },
  {
    title: "Rhino Pale Ale",
    price: "R$ 65",
    tags: "CA | 750 ml",
  },
  {
    title: "Irish Guinness",
    price: "R$ 123",
    tags: "IE | 750 ml",
  },
];

const cocktails = [
  {
    title: "Aperol Sprtiz",
    price: "R$ 100",
    tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
  },
  {
    title: "Dark 'N' Stormy",
    price: "R$ 154",
    tags: "Rum escuro | Cerveja de Gengibre | Fatia de limão",
  },
  {
    title: "Daiquiri",
    price: "R$ 90",
    tags: "Rum | Suco Cítrico | Açucar",
  },
  {
    title: "Old Fashioned",
    price: "R$ 99",
    tags: "Bourbon | Açucar Mascavo | Angostura Bitters",
  },
  {
    title: "Negroni",
    price: "R$ 87",
    tags: "Gin | Sweet Vermouth | Campari | Guarnição de laranja",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
];

export default { wines, cocktails, awards };
