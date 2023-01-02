function(instance, properties, context) {

      function convertToCsv(fName, rows) {
        var csv = '';
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            for (var j = 0; j < row.length; j++) {
                var val = row[j] === null ? '' : row[j].toString();
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



    convertToCsv('download.csv', [
        [properties.data_source],
        ['1', 'bawa ji',"name","rollnumber"],
        ['2', 'Español'],
        ['3', 'Français'],
        ['4', 'Português'],
        ['5', 'dubai'],
        ['6', 'Slovenščina'],
        ['7', 'Tiếng Việt'],
        ['8', 'Türkçe'],
        ['9', 'Norsk bokmål'],
        ['10', 'Ελληνικά'],
        ['11', 'беларускі'],
        ['12', 'русский'],
        ['13', 'Українська'],
        ['14', 'հայերեն'],
        ['15', 'עִברִית'],
        ['16', 'اردو'],
        ['17', 'नेपाली'],
        ['18', 'हिंदी'],
        ['19', 'ไทย'],
        ['20', 'ქართული'],
        ['21', '中国'],
        ['22', '한국어'],
        ['23', '日本語'],
    ])
    
}