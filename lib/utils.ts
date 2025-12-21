import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { TECH_MAP } from "./techMap";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDeviconClassName = (techName: string) => {
  const normalizedTechName = techName.replaceAll(/[.]/g, "").toLowerCase();

  return TECH_MAP[normalizedTechName] ? `${TECH_MAP[normalizedTechName]} colored` : "devicon-devicon-plain";
};
