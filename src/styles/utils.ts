export const cn = (...className: string[]) =>
  className.filter(Boolean).join(' ');
