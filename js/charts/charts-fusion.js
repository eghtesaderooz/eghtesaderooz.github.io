var url = 'https://spreadsheets.google.com/feeds/list/1omezD47q7wW0yUlM-t_m7nMQmw_ZI-sPTCev3MY6gkw/od6/public/values?alt=json';

$.getJSON(url, function(data) {
console.log(data);
//console.log(data['feed']['entry'][2]['content']['$t']);

entry = data.feed.entry;
//console.log(entry);
var data = [];
for(var i = 0, l = entry.length; i < l; i++) {
//console.log(entry[i].gsx$date);
//console.log(entry[i].gsx$dolar);
if (i>l-30){
data.push({
        Label: entry[i].gsx$date.$t,
        value: entry[i].gsx$dolar.$t
    });
}
}
console.log(data);
      FusionCharts.setCurrentRenderer('javascript');

FusionCharts.ready(function () {
	console.log(data);
    var revenueChart = new FusionCharts({
        type: 'Line',
        renderAt: 'chart-container',
        width: '100%',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "نرخ برابری دلار و ریال",
                "subCaption": "بازار غیر رسمی",
				"showvalues": "0",
                "xAxisName": "ماه",
                "yAxisName": "قیمت",
                "numberPrefix": "ریال ",
                "theme": "fint",
				"formatNumberScale":'0',
				//"adjustDiv": "1"
				"yAxisMinValue":'3000'
				    },
            "data": data
        }
    });
    revenueChart.render();
});

});
