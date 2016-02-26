$(document).ready(function(){

	var theQuote = "";
	var theAuthor = "";	

	$("#btn1").click(function(){
		createQuote();
	});

	$("#btn3").click(function(){
		createQuoteAPI();
	});

	$("#btn2").click(function(){
		//var myUrl = 'https://twitter.com/intent/tweet?text=' + theQuote + ' ' + theAuthor;
		var myUrl = 'https://twitter.com/intent/tweet?text=' + quotes[randomQuote][0] + ' -' + quotes[randomQuote][1];
    	window.open(myUrl, 'twitter');
    	return false;
	});

	function createQuote(){
		quotes = {
          1: ['If a man does his best, what else is there?', 'Gen. George S. Patton'],
          2: ['Give me chastity and continence, but not yet.', 'Saint Augustine'],
          3: ['You can avoid reality, but you cannot avoid the consequences of avoiding reality.', 'Ayn Rand'],
          4: ['I have always depended on the kindness of strangers.', 'A Streetcar Named Desire']
        };

        randomQuote = Math.ceil(Math.random() * Object.keys(quotes).length);
        console.log(randomQuote);
        $("h3").text(quotes[randomQuote][0]);
        $("p").text(quotes[randomQuote][1]);
	}

	function createQuoteAPI(){
		var quoteAPI = $.ajax({
			url: 'https://api.myjson.com/bins/409y2',
			type: 'GET',
			data: {},
			dataType: 'JSON',
			success: function(data){
				console.log(data);
				var currentQuote;
				var currentAuthor;
				var randomNum = Math.floor(Math.random() * data.length);
				currentQuote = data[randomNum].quote;
				console.log(data[randomNum].quote);
            	currentAuthor = data[randomNum].author;
            	$('h3').text(currentQuote);
            	$('p').text(currentAuthor);
			},
			error: function(){
				console.log("NOT AVAILABLE.");
			}
		});
	}
});

