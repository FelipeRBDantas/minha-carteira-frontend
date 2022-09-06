export const reverseDate = (date: string): string => {
  return date.split('-').reverse().join('/');
};

export const compareMonth = (fullDate: string | null, month: string): boolean => {
  const formattedDate = fullDate ? new Date(fullDate) : new Date();

  const anotherMonth = String(formattedDate.getMonth() + 1);

  return month === anotherMonth;
};

export const compareYear = (fullDate: string | null, year: string): boolean => {
  const formattedDate = fullDate ? new Date(fullDate) : new Date();

  const anotherYear = String(formattedDate.getFullYear());

  return year === anotherYear;
};

export const compareMinorOrEqualMonth = (fullDate: string | null, month: string): boolean => {
  const formattedDate = fullDate ? new Date(fullDate) : new Date();

  const anotherMonth = String(formattedDate.getMonth() + 1);

  return month <= anotherMonth;
};

export const compareMinorYear = (fullDate: string | null, year: string): boolean => {
  const formattedDate = fullDate ? new Date(fullDate) : new Date();

  const anotherYear = String(formattedDate.getFullYear());

  return year < anotherYear;
};
