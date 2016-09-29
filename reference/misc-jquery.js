$(document).ready(function() {
	var click_count = 0,
		$title = $('.jumbotron h1'),
		$button = $('.jumbotron a.btn');
	
	$button.click(function() {
		click_count += 1;
		$('div.hello').html('<h1>' + click_count + '</h1>');
		$title.toggleClass('invisible');
	});
	
	$title.hover(function() {
		$button.text('Over');
	}, function() {
		$button.text('Off');
	});
});
