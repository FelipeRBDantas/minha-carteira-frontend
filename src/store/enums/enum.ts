export const TypeMovement = {
  recurrent: 'recorrente',
  eventual: 'eventual'
};

export const ListParams = {
    entryBalance: 'entry-balance',
    exitBalance: 'exit-balance'
};

export const Months = [
  { value: 1, label: 'Janeiro' },
  { value: 2, label: 'Fevereiro' },
  { value: 3, label: 'Março' },
  { value: 4, label: 'Abril' },
  { value: 5, label: 'Maio' },
  { value: 6, label: 'Junho' },
  { value: 7, label: 'Julho' },
  { value: 8, label: 'Agosto' },
  { value: 9, label: 'Setembro' },
  { value: 10, label: 'Outubro' },
  { value: 11, label: 'Novembro' },
  { value: 12, label: 'Dezembro' },
];

export const Years = [
  { value: 2022, label: 2022 },
  { value: 2021, label: 2021 },
  { value: 2020, label: 2020 },
  { value: 2019, label: 2019 },
  { value: 2018, label: 2018 },
];

export const Expanses = [
  { "description": "Salário",     "amount": "1300.52", "type": "entrada", "frequency": "recorrente", "date": "2020-01-10" }, 
  { "description": "Freela",      "amount": "150.13",  "type": "entrada", "frequency": "eventual",   "date": "2020-01-17" }, 
  { "description": "Salário",     "amount": "2500.23", "type": "entrada", "frequency": "recorrente", "date": "2020-02-10" }, 
  { "description": "Freela site", "amount": "900.23",  "type": "entrada", "frequency": "eventual",   "date": "2020-02-21" }, 
  { "description": "Freela app",  "amount": "950.92",  "type": "entrada", "frequency": "eventual",   "date": "2020-02-23" }, 
  { "description": "Salário",     "amount": "2500.25", "type": "entrada", "frequency": "recorrente", "date": "2020-03-10" }, 
  { "description": "Salário",     "amount": "2500.18", "type": "entrada", "frequency": "recorrente", "date": "2020-04-10" }, 
  { "description": "Salário",     "amount": "2500.15", "type": "entrada", "frequency": "recorrente", "date": "2020-05-10" }, 
  { "description": "Salário",     "amount": "2500.12", "type": "entrada", "frequency": "recorrente", "date": "2020-06-10" }, 
  { "description": "Salário",     "amount": "2500.00", "type": "entrada", "frequency": "recorrente", "date": "2020-07-10" }
];

export const Gains =  [
  {"description":"Energia elétrica",      "amount":"150.55","type":"saída","frequency":"recorrente","date":"2020-01-10"},
  {"description":"Água",                  "amount":"75.55", "type":"saída","frequency":"recorrente","date":"2020-01-15"},
  {"description": "Telefone",             "amount":"99.99", "type":"saída","frequency":"recorrente","date":"2020-01-23"},
  {"description":"Plano de Saúde",        "amount":"300.00","type":"saída","frequency":"recorrente","date":"2020-01-23"},
  {"description":"Compras do mês",        "amount":"625.78","type":"saída","frequency":"recorrente","date":"2020-01-23"},
  {"description":"Lanche",                "amount":"45.70", "type":"saída","frequency":"eventual",  "date":"2020-01-23"},
  {"description":"Blusa",                 "amount":"95.70", "type":"saída","frequency":"eventual",  "date":"2020-01-23"},
  {"description":"Energia elétrica",      "amount":"125.55","type":"saída","frequency":"recorrente","date":"2020-02-10"},
  {"description":"Água",                  "amount":"90.15", "type":"saída","frequency":"recorrente","date":"2020-02-15"},
  {"description":"Telefone",              "amount":"99.99", "type":"saída","frequency":"recorrente","date":"2020-02-23"},
  {"description":"Plano de Saúde",        "amount":"300.00","type":"saída","frequency":"recorrente","date":"2020-02-23"},
  {"description":"Compras do mês",        "amount":"540.00","type":"saída","frequency":"recorrente","date":"2020-02-25"},
  {"description":"Parcela do Celular 1/5","amount":"150.99","type":"saída","frequency":"eventual",  "date":"2020-02-26"},
  {"description":"Cinema",                "amount":"45.00", "type":"saída","frequency":"eventual",  "date":"2020-02-23"},
  {"description":"Energia elétrica",      "amount":"97.00", "type":"saída","frequency":"recorrente","date":"2020-03-10"},
  {"description":"Água",                  "amount":"100.10","type":"saída","frequency":"recorrente","date":"2020-03-15"},
  {"description":"Telefone",              "amount":"99.99", "type":"saída","frequency":"recorrente","date":"2020-03-23"},
  {"description":"Plano de Saúde",        "amount":"300.00","type":"saída","frequency":"recorrente","date":"2020-03-23"},
  {"description":"Compras do mês",        "amount":"800.50","type":"saída","frequency":"recorrente","date":"2020-03-17"},
  {"description":"Parcela do Celular 2/5","amount":"150.99","type":"saída","frequency":"eventual",  "date":"2020-03-18"},
  {"description":"Troca de Oléo do carro","amount":"90.00", "type":"saída","frequency":"eventual",  "date":"2020-03-23"},
  {"description":"Energia elétrica",      "amount":"75.99", "type":"saída","frequency":"recorrente","date":"2020-04-10"},
  {"description":"Água",                  "amount":"80.33", "type":"saída","frequency":"recorrente","date":"2020-04-15"},
  {"description":"Telefone",              "amount":"99.99", "type":"saída","frequency":"recorrente","date":"2020-04-23"},
  {"description":"Plano de Saúde",        "amount":"300.00","type":"saída","frequency":"recorrente","date":"2020-04-23"},
  {"description":"Compras do mês",        "amount":"600.00","type":"saída","frequency":"recorrente","date":"2020-04-25"},
  {"description":"Parcela do Celular 3/5","amount":"150.99","type":"saída","frequency":"eventual",  "date":"2020-04-26"},
  {"description":"Ebook de React Js",     "amount":"85.95", "type":"saída","frequency":"eventual",  "date":"2020-04-13"},
  {"description":"Energia elétrica",      "amount":"125.55","type":"saída","frequency":"recorrente","date":"2020-05-10"},
  {"description":"Água",                  "amount":"90.15", "type":"saída","frequency":"recorrente","date":"2020-05-15"},
  {"description":"Telefone",              "amount":"99.99", "type":"saída","frequency":"recorrente","date":"2020-05-23"},
  {"description":"Plano de Saúde",        "amount":"300.00","type":"saída","frequency":"recorrente","date":"2020-05-23"},
  {"description":"Compras do mês",        "amount":"540.00","type":"saída","frequency":"recorrente","date":"2020-05-25"},
  {"description":"Parcela do Celular 4/5","amount":"150.99","type":"saída","frequency":"eventual",  "date":"2020-05-26"},
  {"description":"Blusa Iron Man",        "amount":"150.00","type":"saída","frequency":"eventual",  "date":"2020-01-23"},
  {"description":"Energia elétrica",      "amount":"200.00","type":"saída","frequency":"recorrente","date":"2020-06-10"},
  {"description":"Água",                  "amount":"150.00","type":"saída","frequency":"recorrente","date":"2020-06-15"},
  {"description":"Telefone",              "amount":"99.99", "type":"saída","frequency":"recorrente","date":"2020-06-23"},
  {"description":"Plano de Saúde",        "amount":"300.00","type":"saída","frequency":"recorrente","date":"2020-06-23"},
  {"description":"Compras do mês",        "amount":"559.15","type":"saída","frequency":"recorrente","date":"2020-06-25"},
  {"description":"Parcela do Celular 5/5","amount":"150.99","type":"saída","frequency":"eventual",  "date":"2020-06-26"},
  {"description":"Perfume",               "amount":"250.00","type":"saída","frequency":"eventual",  "date":"2020-06-21"},
  {"description":"Energia elétrica",      "amount":"250.00","type":"saída","frequency":"recorrente","date":"2020-07-10"},
  {"description":"Água",                  "amount":"90.00", "type":"saída","frequency":"recorrente","date":"2020-07-15"},
  {"description":"Telefone",              "amount":"99.99", "type":"saída","frequency":"recorrente","date":"2020-07-23"},
  {"description":"Plano de Saúde",        "amount":"300.00","type":"saída","frequency":"recorrente","date":"2020-07-23"},
  {"description":"Compras do mês",        "amount":"700.00","type":"saída","frequency":"recorrente","date":"2020-07-25"},
  {"description":"Cafeteira",             "amount":"250.00","type":"saída","frequency":"eventual",  "date":"2020-07-26"},
  {"description":"Pizza",                 "amount":"60.00", "type":"saída","frequency":"eventual",  "date":"2020-07-19"}
];
