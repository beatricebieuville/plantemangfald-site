$.getJSON("https://spreadsheets.google.com/feeds/list/1RrZrUKaDjsTmtJsS6f2bfUT-J8OvEPTbXkJY_N-6p8w/1/public/full?alt=json", function (data) {

        var sheetData = data.feed.entry;

        var i;
        for (i = 0; i < sheetData.length; i++) {
            if (data.feed.entry[i]['gsx$disponibelt']['$t'] !== '') {
                var latinsk = data.feed.entry[i]['gsx$latin']['$t'];
                var norsk = data.feed.entry[i]['gsx$norsk']['$t'];

                document.getElementById('planteliste').innerHTML += ('<tr>'+'<td class="text-capitalize">'+latinsk+'</td>'+'<td class="text-capitalize">'+norsk+'</td>'+'</tr>');
            }

        }
        });
