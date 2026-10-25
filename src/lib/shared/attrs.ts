export const mainAttrs = ['str', 'dex', 'con', 'int', 'wis', 'cha'] as const;
export type MainAttr = (typeof mainAttrs)[number];

export const attrColor = (attr: MainAttr) => `var(--color-${attr})`;
