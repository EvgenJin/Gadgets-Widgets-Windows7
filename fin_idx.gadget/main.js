// var connection_id = 0;
setInterval(function(){
  getFeaturedArticle();
}, 100000);
function getFeaturedArticle() {
    var indexes = new Array('Dow Jones','Nasdaq','S&P 500');
    var res_arr = []
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET",'https://financialmodelingprep.com/api/v3/majors-indexes', false);
    xhttp.send(null);
    var cpfa_contents =  JSON.parse(xhttp.responseText);
    var array = cpfa_contents['majorIndexesList']
    var array1 = cpfa_contents['majorIndexesList']
    document.getElementById("table2").innerHTML = ''
    for (var i = array.length - 1; i >= 0; i--) {
      // document.getElementById("nq_price").innerHTML = array[1]['price'];
      // if (indexes.indexOf(array[i]['indexName']) != -1) {
        document.getElementById("table2").innerHTML  += '<tr><td>' + array[i]['indexName'] + ' : ' + '</tr></td>' + '<tr><td>' + array[i]['price'] + '</tr></td>' + '<br />'
      // }
      // if (array[i].indexName == 'Nasdaq') {
      //   document.getElementById("nq_price").innerHTML = cpfa_contents['majorIndexesList'][1]['price'];
      //   document.getElementById("nq_name").innerHTML = cpfa_contents['majorIndexesList'][1]['indexName'];
      // }
      // if (array[i].indexName == 'Dow Jones') {
      //   document.getElementById("dj_name").innerHTML = cpfa_contents['majorIndexesList'][0]['indexName'];
      //   document.getElementById("dj_price").innerHTML = cpfa_contents['majorIndexesList'][0]['price'];
      // }
    }
}

        