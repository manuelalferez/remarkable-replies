import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const formatDateNumber = (num: number): string => {
  return num.toString().padStart(2, "0");
};

export function getTimeStamp(): string {
  const date = new Date();
  const day = formatDateNumber(date.getDay());
  const month = formatDateNumber(date.getMonth() + 1);
  const year = date.getFullYear();
  const hours = formatDateNumber(date.getHours());
  const minutes = formatDateNumber(date.getMinutes());
  const seconds = formatDateNumber(date.getSeconds());
  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}
