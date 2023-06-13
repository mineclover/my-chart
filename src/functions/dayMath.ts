import { dayToPixel } from '@/unit.json';

export const DayMath = (date: number) => {
  const timer = Math.abs(date);

  return Math.floor((timer / 24 / 60 / 60 / 1000) * dayToPixel);
};
