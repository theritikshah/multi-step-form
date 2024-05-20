import { FREE_MONTHS } from "../constants";

export function getRate(rate: number, isYearly: boolean = false): number {
  if (isNaN(rate)) 0;
  return isYearly ? rate * (12 - FREE_MONTHS) : rate;
}
