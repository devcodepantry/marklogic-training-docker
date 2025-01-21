function formatDate(date) {
    const d = new Date(date);
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let year = d.getFullYear();

    if (month.toString().length < 2) {
      month = `0${month}`;
    }
    if (day.toString().length < 2) {
      day = `0${day}`;
    }

    return `${year}-${month}-${day}`;
};

function transformDate(content, context) {
    const docType = xdmp.nodeKind(content.value);

    if (docType === 'document' && content.value.documentFormat === 'JSON') {    
    // Convert input to mutable object and add new property
    const newDoc = content.value.toObject();
    const newDate = formatDate(newDoc.date_and_time);
    newDoc['date_and_time'] = newDate;
  
    // Convert result back into a document
    content.value = xdmp.unquote(xdmp.quote(newDoc));
  }
  
  return content;
};

exports.transformDate = transformDate;
