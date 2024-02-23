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
    isIncome: false,
    id: "subscriptions",
    icon: IoLogoUsd,
  },
  {
    name: "Publicidad",
    isIncome: false,
    id: "publishing",
    icon: IoLogoUsd,
  },
  {
    name: "Compras",
    isIncome: false,
    id: "shopping",
    icon: IoLogoUsd,
  },
  {
    name: "Servicios",
    isIncome: false,
    id: "services",
    icon: IoLogoUsd,
  },
  {
    name: "Juegos",
    isIncome: false,
    id: "games	",
    icon: IoLogoUsd,
  },
  {
    name: "Educación",
    isIncome: false,
    id: "education",
    icon: IoLogoUsd,
  },
  {
    name: "Salud",
    isIncome: false,
    id: "health",
    icon: IoLogoUsd,
  },
  {
    name: "Finanzas",
    isIncome: false,
    id: "finances",
    icon: IoLogoUsd,
  },
  {
    name: "Viajes",
    isIncome: false,
    id: "travel",
    icon: IoLogoUsd,
  },
  {
    name: "Estilo de vida",
    isIncome: false,
    id: "lifeStyle",
    icon: IoLogoUsd,
  },
  {
    name: "Productividad",
    isIncome: false,
    id: "productivity",
    icon: IoLogoUsd,
  },
  {
    name: "Entretenimiento",
    isIncome: false,
    id: "entertainment",
    icon: IoLogoUsd,
  },
  {
    name: "Social",
    isIncome: false,
    id: "social",
    icon: IoLogoUsd,
  },
  {
    name: "Noticias",
    isIncome: false,
    id: "news",
    icon: IoLogoUsd,
  },
  {
    name: "Ejercicio",
    isIncome: false,
    id: "exercise",
    icon: IoLogoUsd,
  },
  {
    name: "Música",
    isIncome: false,
    id: "music",
    icon: IoLogoUsd,
  },
  {
    name: "Libros",
    isIncome: false,
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
];

export { CATEGORIES };
