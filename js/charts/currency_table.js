google.load("visualization", '1', {packages:['table','corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

// Create the data table.
  var queryCurrentCurrency = new google.visualization.Query(
 'https://docs.google.com/spreadsheets/d/1HIVoAVybw5gIr51rUXlZMuotu2xMfYOvqyfHR3-TtKo/edit#gid=0');
  queryCurrentCurrency.setQuery('select B,C,D,E');
  queryCurrentCurrency.send(handleQueryResponse);
  
  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1j-hcqwULm7_Lq490CIXdGPwqlygwnIuayReQfqmswJc/edit?pli=1#gid=1304111652');
  query.setQuery('select B, U,V where A>930101');
    query.send(handleQueryResponse1);


  
}
  
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
 var table = new google.visualization.Table(document.getElementById('currency_table_div'));
 table.draw(data, {showRowNumber: false},{rtlTable: true});
 }


function handleQueryResponse1(response) {
 if (response.isError()) {
 alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
 return;
  }
 var data = response.getDataTable();
  var chart = new google.visualization.LineChart(document.getElementById('columnchart'));
  chart.draw(data,options);
 }