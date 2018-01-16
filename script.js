
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('search_google');
    // onClick's logic below:
    link.addEventListener('keypress', function() {
    	if( event.key == "Enter")
    	{
    		var text = encodeURIComponent(document.getElementById('search_google').value);
    		window.open("https://www.google.co.kr/search?source=hp&ei=XlleWujDOYG68QX4pajoAw&q="+text+"&oq=hello&gs_l=psy-ab.3..0l10.4605.5999.0.6169.9.7.0.0.0.0.93.485.6.7.0....0...1c.1.64.psy-ab..2.6.485.0..0i131k1j0i10k1.70.CkOXDPjrajY","_blank");
    	}
    });

    var link = document.getElementById('img_google');
    // onClick's logic below:
    link.addEventListener('click', function() {
    		window.open("https://www.google.co.kr","_blank");
    });
});



document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('search_naver');
    // onClick's logic below:
    link.addEventListener('keypress', function() {
    	if( event.key == "Enter")
    	{
    		var text = encodeURIComponent(document.getElementById('search_naver').value);
    		window.open("https://search.naver.com/search.naver?query="+text,"_blank");
    	}
    });

    var link = document.getElementById('img_naver');
    // onClick's logic below:
    link.addEventListener('click', function() {
    		window.open("https://www.naver.com","_blank");
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('search_youtube');
    // onClick's logic below:
    link.addEventListener('keypress', function() {
    	if( event.key == "Enter")
    	{
    		var text = encodeURIComponent(document.getElementById('search_youtube').value);
    		window.open("https://www.youtube.com/results?search_query="+text,"_blank");
    	}
    });

    var link = document.getElementById('img_youtube');
    // onClick's logic below:
    link.addEventListener('click', function() {
    		window.open("https://www.youtube.com","_blank");
    });
});