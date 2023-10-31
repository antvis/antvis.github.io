import * as d3 from 'd3';
/**
 * Translate函数
 */
import { useLocale } from "dumi"

export const getLang = () => {
  return useLocale().id
}

export function pick(seed: string) {
  const count = 12;
  const step = 360 / count;
  const hsl = d3.hsl(seed);
  const colors = d3
    .range(count)
    .map((i) => hsl.copy({ h: hsl.h - step * i }) + "");
  const neighbour = (i: number, j: number) => (j + 2) % count;
  const oppsite = (i: number, j: number) => ((i + j) / 2 + Math.round(count / 2)) % count;
  const I = [0, 2, ...d3.range(count - 2)];
  for (let i = 1; i < I.length - 1; i++) {
    const prev = I[i - 1];
    const cur = I[i];
    const j = i % 3;
    const next = j === 1 ? oppsite : neighbour;
    I[i + 1] = next(prev, cur);
  }
  return I.map((i) => colors[i]).slice(0, 10);
}