export const pluralize = (
  count: number,
  forms: Partial<Record<Intl.LDMLPluralRule, string>>,
  locale: string = 'en',
) => {
  const rule = new Intl.PluralRules(locale).select(count);
  return `${count} ${forms[rule] ?? forms.other}`;
};
