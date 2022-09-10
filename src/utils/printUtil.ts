export const handlePrint = (params: { id: string, title: string }) => {
  var win = window.open('', '', 'location=no,width=1200,height=800');

  var printContent = document.getElementById(params.id);

  var style = '@page { size: landscape !important;  margin: 1cm; }';

  var html = `<html><head><title>${params.title}</title><style media="print">`
    .concat(style)
    .concat(`</style></head><body><div class="graphTitle">${params.title}</div><br />`)
    .concat('<div class="graphContent">')
    .concat(printContent?.innerHTML || '')
    .concat('</div></body></html>');

  win?.document.write(html);

  win?.document.close();

  win?.focus();

  win?.print();

  win?.close();
};
