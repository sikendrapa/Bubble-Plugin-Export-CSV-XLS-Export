function(instance, properties, context) {

      function convertToCsv(fName, columns) {
        var csv = '';
        for (var i = 0; i < columns.length; i++) {
            var columns = columns[i];
            for (var j = 0; j < columns.length; j++) {
                var val = columns[j] === null ? '' : columns[j].toString();
                val = val.replace(/\t/gi, " ");
                if (j > 0)
                    csv += '\t';
                csv += val;
            }
            csv += '\n';
        }

        // for UTF-16
        var cCode, bArr = [];
        bArr.push(255, 254);
        for (var i = 0; i < csv.length; ++i) {
            cCode = csv.charCodeAt(i);
            bArr.push(cCode & 0xff);
            bArr.push(cCode / 256 >>> 0);
        }

        var blob = new Blob([new Uint8Array(bArr)], { type: 'text/csv;charset=UTF-16LE;' });
        if (navigator.msSaveBlob) {
            navigator.msSaveBlob(blob, fName);
        } else {
            var link = document.createElement("a");
            if (link.download !== undefined) {
                var url = window.URL.createObjectURL(blob);
                link.setAttribute("href", url);
                link.setAttribute("download", fName);
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
            }
        }
    }
    
    let ab = properties.data_source;
    
    
     let Img = properties.checkbox;

    if(Img == true){
    
        
        const gridOptions = {
    defaultExcelExportParams: {
        addImageToCell: (rowIndex, column, value) => {
            if (rowIndex === 1 && column.colId === 'athlete') {
                const myCompanyLogo = getBase64Image('logo.png');
                return {
                    image: {
                        id: 'company_logo',
                        base64: myCompanyLogo,
                        imageType: 'png',
                        fitCell: true
                    }
                };
            }
        }
    },

onGridReady: (params) => {
    fetch('https://www.ag-grid.com/example-assets/small-olympic-winners.json')
      .then((data) =>
        createBase64FlagsFromResponse(data, countryCodes, base64flags)
      )
      .then((data) => params.api.setRowData(data));
  },
        };
        
        
    };
    

    
    
    
convertToCsv('download.csv', [
        [ab,gridOptions],
        ["gridOptions", 'bawa ji',"name","rollnumber"],
        ['2', 'Espa??ol'],
        ['3', 'Fran??ais'],
        ['4', 'Portugu??s'],
        ['5', 'dubai'],
        ['6', 'Sloven????ina'],
        ['7', 'Ti???ng Vi???t'],
        ['8', 'T??rk??e'],
        ['9', 'Norsk bokm??l'],
        ['10', '????????????????'],-
        ['11', '??????????????????'],
        ['12', '??????????????'],
        ['13', '????????????????????'],
        ['14', '??????????????'],
        ['15', '??????????????'],
        ['16', '????????'],
        ['17', '??????????????????'],
        ['18', '???????????????'],
        ['19', '?????????'],
        ['20', '?????????????????????'],
        ['21', '??????'],
        ['22', '?????????'],
        ['23', '?????????'],
    ]);
    
   
   
     
}