

$("#searchBtn").on("click", function() {
  
var query = $("#searchTerm").val();
var begin = $("#startYear").val();
var end = $("#endYear").val();
const numb = $("#numbRecord").val();
  
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "dfd2f5832b464b899010dcf0836e17fa",
  'q': query,
  'begin_date': begin + "0101",
  'end_date': end + "0101"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
var r = result.response.docs;
  for (var i = 0; i < r.length; i++) {
  console.log(r[i].headline.main);
}

}).fail(function(err) {
  throw err;
});

  
});
  
}

results.response.docs[i].headline.main