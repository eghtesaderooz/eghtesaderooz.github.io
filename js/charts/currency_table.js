google.load("visualization", '1', {packages:['table','corechart','controls']});

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
      'https://docs.google.com/spreadsheets/d/14VUC-tA12DUH1tewlUOodPNOFpS3BXvY1jJBoIm97LA/edit#gid=0');
  query.setQuery('select C, E,H,K,N,Q,T where A>13920618');
  query.send(handleQueryResponse1);
  
  //drawVisualization();
  
}

 var options = {
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
  
  
/*
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Year');
    data.addColumn('number', 'Foo');
    data.addColumn('number', 'Bar');
    data.addColumn('number', 'Baz');
    data.addColumn('number', 'Cad');
    data.addRows([
        ['2005',  45, 60, 89, 100],
        ['2006',  155, 50, 79, 24],
        ['2007',  35, 31, 140, 53],
        ['2008',  105, 23, 43, 82],
        ['2009',  120, 56, 21, 67],
        ['2010',  65, 19, 34, 134],
        ['2011',  80, 23, 130, 40],
        ['2012',  70, 140, 83, 90]
    ]);
*/
    var columnsTable = new google.visualization.DataTable();
    columnsTable.addColumn('number', 'colIndex');
    columnsTable.addColumn('string', 'colLabel');
    var initState= {selectedValues: []};
    // put the columns into this data table (skip column 0)
    for (var i = 1; i < data.getNumberOfColumns(); i++) {
        columnsTable.addRow([i, data.getColumnLabel(i)]);
        // you can comment out this next line if you want to have a default selection other than the whole list
        initState.selectedValues.push(data.getColumnLabel(i));
    }
    // you can set individual columns to be the default columns (instead of populating via the loop above) like this:
    // initState.selectedValues.push(data.getColumnLabel(4));
    
    var chart = new google.visualization.ChartWrapper({
        chartType: 'LineChart',
        containerId: 'chart1',
        dataTable: data,
        options: {
            //title: 'نرخ برابری ارز',
            width: 700,
            height: 400
        }
    });
    
    var columnFilter = new google.visualization.ControlWrapper({
        controlType: 'CategoryFilter',
        containerId: 'control-aghlam',
        dataTable: columnsTable,
        options: {
            filterColumnLabel: 'colLabel',
            ui: {
                label: ' ارز',
				caption: 'انتخاب کنید...',
                allowTyping: false,
                allowMultiple: true,
                allowNone: false,
                selectedValuesLayout: 'belowStacked'
            }
        },
       // state: initState
	       'state': {'selectedValues': ['دلار آمریکا','دلار کانادا']}
    });
    
    function setChartView () {
        var state = columnFilter.getState();
        var row;
        var view = {
            columns: [0]
        };
        for (var i = 0; i < state.selectedValues.length; i++) {
            row = columnsTable.getFilteredRows([{column: 1, value: state.selectedValues[i]}])[0];
            view.columns.push(columnsTable.getValue(row, 0));
        }
        // sort the indices into their original order
        view.columns.sort(function (a, b) {
            return (a - b);
        });
        chart.setView(view);
        chart.draw();
    }
    google.visualization.events.addListener(columnFilter, 'statechange', setChartView);
    
    setChartView();
    columnFilter.draw();
}

