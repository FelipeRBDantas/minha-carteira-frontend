export const formatCurrency = (value: number | string): string => {
  if (!value) return '';
    
  if (typeof value === 'string')
    value = Number(value);

  return value.toLocaleString(
    'pt-br',
    { 
        style: 'currency', 
        currency: 'BRL' 
    }
  );
};

export const average = (value: number, total: number): string => {
  if (!value) return '';

  return ((value / total) * 100).toFixed(1);
};
