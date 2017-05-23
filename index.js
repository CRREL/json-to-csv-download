function json2csv(json, title, labelColumns, addTitleToBody) {
  var arrData = typeof json !== 'object' ? JSON.parse(json) : json;

  var CSV = '';

  if(title && addTitleToBody) CSV += title + '\r\n\n';

  if(labelColumns){
    var row = '';
    for(var key in arrData[0]){
      row += key + ',';
    }
    row = row.slice(0, -1);
    CSV += row + '\r\n';
  }

  for(var i = 0; i < arrData.length; i++){
    var row = '';
    for(var key in arrData[i]){
      row += '"' + arrData[i][key] + '",';
    }
    row = row.slice(0, -1);
    CSV += row + '\r\n';
  }

  if(CSV === ''){
    return;
  }

  var fileName = 'CSV_EXPORT';
  if(title) fileName = title.replace(/ /g, '_');

  var uri = 'data:text/csv;charset=utf-8,' + encodeURI(CSV);
  
  var link = document.createElement('a');
  link.href = uri;
  link.style = 'visibility:hidden';
  link.download = fileName + '.csv';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

module.exports = json2csv;