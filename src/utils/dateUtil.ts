export const reverseDate = (date: string): string => {
  return date.split('-').reverse().join('/');
};

export const compareMonth = (fullDate: string, month: string): boolean => {
  const formattedDate = new Date(fullDate);

  const anotherMonth = String(formattedDate.getMonth() + 1);

  return month === anotherMonth;
};

export const comparYear = (fullDate: string, year: string): boolean => {
  const formattedDate = new Date(fullDate);

  const anotherYear = String(formattedDate.getFullYear());

  return year === anotherYear;
};
