import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formata uma string de data (formato YYYY-MM-DD) para o formato brasileiro (DD/MM/YYYY)
 * Evita problemas de timezone ao usar new Date() diretamente
 */
export function formatDate(dateString: string): string {
  // Se a string já está no formato YYYY-MM-DD, parse manualmente
  if (dateString.match(/^\d{4}-\d{2}-\d{2}$/)) {
    const [year, month, day] = dateString.split("-")
    return `${day}/${month}/${year}`
  }
  
  // Fallback para outras formatações
  const date = new Date(dateString)
  // Usa UTC para evitar problemas de timezone
  const day = String(date.getUTCDate()).padStart(2, "0")
  const month = String(date.getUTCMonth() + 1).padStart(2, "0")
  const year = date.getUTCFullYear()
  return `${day}/${month}/${year}`
}
