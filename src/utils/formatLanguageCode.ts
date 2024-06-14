export const formatLanguageCode = (languageCode: string): string => {
  const res = new Intl.DisplayNames([languageCode], {
    type: 'language',
  });

  const data = res.of(languageCode);
  if (!data) return 'Unknown';
  return data;
};
