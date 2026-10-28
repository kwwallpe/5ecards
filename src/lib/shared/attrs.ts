export const attrTextClass = {
  str: 'text-str',
  dex: 'text-dex',
  con: 'text-con',
  int: 'text-int',
  wis: 'text-wis',
  cha: 'text-cha',
} as const satisfies Record<string, string>;
export type MainAttr = keyof typeof attrTextClass;
export const mainAttrs = Object.keys(attrTextClass) as MainAttr[];
