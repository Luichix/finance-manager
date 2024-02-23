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
    type: "OUTCOME",
    id: "subscriptions",
    icon: IoLogoUsd,
  },
  {
    name: "Publicidad",
    type: "OUTCOME",
    id: "publishing",
    icon: IoLogoUsd,
  },
  {
    name: "Compras",
    type: "OUTCOME",
    id: "shopping",
    icon: IoLogoUsd,
  },
  {
    name: "Servicios",
    type: "OUTCOME",
    id: "services",
    icon: IoLogoUsd,
  },
  {
    name: "Juegos",
    type: "OUTCOME",
    id: "games	",
    icon: IoLogoUsd,
  },
  {
    name: "Educación",
    type: "OUTCOME",
    id: "education",
    icon: IoLogoUsd,
  },
  {
    name: "Salud",
    type: "OUTCOME",
    id: "health",
    icon: IoLogoUsd,
  },
  {
    name: "Finanzas",
    type: "OUTCOME",
    id: "finances",
    icon: IoLogoUsd,
  },
  {
    name: "Viajes",
    type: "OUTCOME",
    id: "travel",
    icon: IoLogoUsd,
  },
  {
    name: "Estilo de vida",
    type: "OUTCOME",
    id: "lifeStyle",
    icon: IoLogoUsd,
  },
  {
    name: "Productividad",
    type: "OUTCOME",
    id: "productivity",
    icon: IoLogoUsd,
  },
  {
    name: "Entretenimiento",
    type: "OUTCOME",
    id: "entertainment",
    icon: IoLogoUsd,
  },
  {
    name: "Social",
    type: "OUTCOME",
    id: "social",
    icon: IoLogoUsd,
  },
  {
    name: "Noticias",
    type: "OUTCOME",
    id: "news",
    icon: IoLogoUsd,
  },
  {
    name: "Ejercicio",
    type: "OUTCOME",
    id: "exercise",
    icon: IoLogoUsd,
  },
  {
    name: "Música",
    type: "OUTCOME",
    id: "music",
    icon: IoLogoUsd,
  },
  {
    name: "Libros",
    type: "OUTCOME",
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
    type: "INCOME",
    id: "finances",
  },
  {
    name: "Regalos",
    type: "INCOME",
    id: "gift",
  },
  {
    name: "Donaciones",
    type: "INCOME",
    id: "donations",
  },
  {
    name: "Salario",
    type: "INCOME",
    id: "finances",
  },
  {
    name: "Bonus",
    type: "INCOME",
    id: "ribbon",
  },
];

export { CATEGORIES };
