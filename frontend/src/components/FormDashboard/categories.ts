import type { IconType } from "react-icons";
import {
  IoLogoUsd,
  IoSwapHorizontalOutline,
  IoBagCheckOutline,
  IoHomeOutline,
} from "react-icons/io5";

const CATEGORIES: Record<string, string | boolean | number | IconType>[] = [
  {
    name: "Suscripciones",
    isIncome: "OUTCOME",
    id: "subscriptions",
    icon: IoLogoUsd,
  },
  {
    name: "Publicidad",
    isIncome: "OUTCOME",
    id: "publishing",
    icon: IoLogoUsd,
  },
  {
    name: "Compras",
    isIncome: "OUTCOME",
    id: "shopping",
    icon: IoLogoUsd,
  },
  {
    name: "Servicios",
    isIncome: "OUTCOME",
    id: "services",
    icon: IoLogoUsd,
  },
  {
    name: "Juegos",
    isIncome: "OUTCOME",
    id: "games	",
    icon: IoLogoUsd,
  },
  {
    name: "Educación",
    isIncome: "OUTCOME",
    id: "education",
    icon: IoLogoUsd,
  },
  {
    name: "Salud",
    isIncome: "OUTCOME",
    id: "health",
    icon: IoLogoUsd,
  },
  {
    name: "Finanzas",
    isIncome: "OUTCOME",
    id: "finances",
    icon: IoLogoUsd,
  },
  {
    name: "Viajes",
    isIncome: "OUTCOME",
    id: "travel",
    icon: IoLogoUsd,
  },
  {
    name: "Estilo de vida",
    isIncome: "OUTCOME",
    id: "lifeStyle",
    icon: IoLogoUsd,
  },
  {
    name: "Productividad",
    isIncome: "OUTCOME",
    id: "productivity",
    icon: IoLogoUsd,
  },
  {
    name: "Entretenimiento",
    isIncome: "OUTCOME",
    id: "entertainment",
    icon: IoLogoUsd,
  },
  {
    name: "Social",
    isIncome: "OUTCOME",
    id: "social",
    icon: IoLogoUsd,
  },
  {
    name: "Noticias",
    isIncome: "OUTCOME",
    id: "news",
    icon: IoLogoUsd,
  },
  {
    name: "Ejercicio",
    isIncome: "OUTCOME",
    id: "exercise",
    icon: IoLogoUsd,
  },
  {
    name: "Música",
    isIncome: "OUTCOME",
    id: "music",
    icon: IoLogoUsd,
  },
  {
    name: "Libros",
    isIncome: "OUTCOME",
    id: "books",
    icon: IoLogoUsd,
  },
  {
    name: "Alquiler",
    isIncome: false,
    id: 4,
    icon: IoHomeOutline,
  },
  {
    name: "Supermercado",
    isIncome: false,
    id: 3,
    icon: IoBagCheckOutline,
  },
  {
    name: "Sueldo",
    isIncome: true,
    id: 2,
    icon: IoLogoUsd,
  },
  {
    name: "Transferencia",
    isIncome: true,
    id: 1,
    icon: IoSwapHorizontalOutline,
  },
  {
    name: "Pagos",
    isIncome: "INCOME",
    id: "finances",
  },
  {
    name: "Regalos",
    isIncome: "INCOME",
    id: "gift",
  },
  {
    name: "Donaciones",
    isIncome: "INCOME",
    id: "donations",
  },
  {
    name: "Salario",
    isIncome: "INCOME",
    id: "finances",
  },
  {
    name: "Bonus",
    isIncome: "INCOME",
    id: "ribbon",
  },
];

export { CATEGORIES };
