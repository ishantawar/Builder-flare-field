// src/lib/utils.ts

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn - Combines class names and intelligently merges Tailwind classes.
 * 
 * Uses `clsx` to filter out falsey values and `tailwind-merge` to resolve conflicts.
 *
 * Example:
 *   cn('btn', isPrimary && 'btn-primary') => 'btn btn-primary'
 *   cn('p-2', 'p-4') => 'p-4' (tailwind-merge will resolve conflict)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
