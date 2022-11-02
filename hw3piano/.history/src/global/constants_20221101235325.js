const VALID_BLACK_KEYS = ["w", "e", "t", "y", "u", "o", "p"];
const VALID_WHITE_KEYS = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const VALID_KEYS = [...VALID_BLACK_KEYS, ...VALID_WHITE_KEYS];
const NOTES = ["c", "df", "d", "ef", "e", "f", "gf", "g", "af", "a", "bf", "b"];
const NOTE_TO_KEY = {
  c: "a",
  df: "w",
  d: "s",
  ef: "e",
  e: "d",
  f: "f",
  gf: "t",
  g: "g",
  af: "y",
  a: "h",
  bf: "u",
  b: "j",
};
const KEY_TO_NOTE = {
  z: "c",
  s: "df",
  x: "d",
  d: "ef",
  c: "e",
  v: "f",
  g: "gf",
  b: "g",
  h: "af",
  n: "a",
  j: "bf",
  m: "b",
};
export { NOTES, VALID_KEYS, NOTE_TO_KEY, KEY_TO_NOTE };
