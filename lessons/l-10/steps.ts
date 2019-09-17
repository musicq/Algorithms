import { time } from "../../utils/timeCount";

const map: { [key: number]: number } = {};

function f(step: number): number {
  if (step === 1) return 1;
  if (step === 2) return 2;

  if (map[step]) return map[step];

  const r = f(step - 1) + f(step - 2);
  map[step] = r;

  return r;
}

const fn = time(f);

console.log(fn(1000));
