	google.load("visualization", '1', {packages:['corechart']});
	google.setOnLoadCallback(drawChart);
	function drawChart() {
  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1j-hcqwULm7_Lq490CIXdGPwqlygwnIuayReQfqmswJc/edit?pli=1#gid=1304111652');
  query.setQuery('select B, U,V where A>930101');

  query.send(handleQueryResponse);
}
      // Set chart options
      var options = {
                     'width':580,
                     'height':400,
					 };

function handleQueryResponse(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var data = response.getDataTable();
  var chart = new google.visualization.LineChart(document.getElementById('columnchart'));
  chart.draw(data,options);
}
