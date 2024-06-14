import CountryData from 'country-data';
// npm i --save-dev @types/country-data
export const formatCountryCode = (countryCode: string) => {
  const countryName = CountryData.countries[countryCode.toUpperCase()].name;
  const countryEmoji = CountryData.countries[countryCode.toUpperCase()].emoji;

  return { countryEmoji, countryName };
};
