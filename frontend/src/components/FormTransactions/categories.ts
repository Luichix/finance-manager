interface Category {
  id: number;
  name: string;
  isIncome?: boolean;
  description: string;
  typeCategory: "OUTCOME" | "INCOME";
}

const CATEGORIES: Category[] = [
  {
    id: 1,
    name: "Salario",
    description: "salary",
    typeCategory: "INCOME",
  },
  {
    id: 2,
    name: "Bonus",
    description: "ribbon",
    typeCategory: "INCOME",
  },
  {
    id: 3,
    name: "Suscripciones",
    description: "subscriptions",
    typeCategory: "OUTCOME",
  },
  {
    id: 4,
    name: "Publicidad",
    description: "publishing",
    typeCategory: "OUTCOME",
  },
  {
    id: 5,
    name: "Compras",
    description: "shopping",
    typeCategory: "OUTCOME",
  },
  {
    id: 6,
    name: "Servicios",
    description: "services",
    typeCategory: "OUTCOME",
  },
  {
    id: 7,
    name: "Juegos",
    description: "games",
    typeCategory: "OUTCOME",
  },
  {
    id: 8,
    name: "Educación",
    description: "education",
    typeCategory: "OUTCOME",
  },
  {
    id: 9,
    name: "Salud",
    description: "health",
    typeCategory: "OUTCOME",
  },
  {
    id: 10,
    name: "Finanzas",
    description: "finances",
    typeCategory: "OUTCOME",
  },
  {
    id: 11,
    name: "Viajes",
    description: "travel",
    typeCategory: "OUTCOME",
  },
  {
    id: 12,
    name: "Estilo de vida",
    description: "lifeStyle",
    typeCategory: "OUTCOME",
  },
  {
    id: 13,
    name: "Productividad",
    description: "productivity",
    typeCategory: "OUTCOME",
  },
  {
    id: 14,
    name: "Entretenimiento",
    description: "entertainment",
    typeCategory: "OUTCOME",
  },
  {
    id: 15,
    name: "Social",
    description: "social",
    typeCategory: "OUTCOME",
  },
  {
    id: 16,
    name: "Noticias",
    description: "news",
    typeCategory: "OUTCOME",
  },
  {
    id: 17,
    name: "Ejercicio",
    description: "exercise",
    typeCategory: "OUTCOME",
  },
  {
    id: 18,
    name: "Música",
    description: "music",
    typeCategory: "OUTCOME",
  },
  {
    id: 19,
    name: "Libros",
    description: "books",
    typeCategory: "OUTCOME",
  },
  {
    id: 20,
    name: "Ventas",
    description: "sell",
    typeCategory: "INCOME",
  },
  {
    id: 21,
    name: "Regalos",
    description: "gift",
    typeCategory: "INCOME",
  },
  {
    id: 22,
    name: "Donaciones",
    description: "donations",
    typeCategory: "INCOME",
  },
];

export { CATEGORIES };
