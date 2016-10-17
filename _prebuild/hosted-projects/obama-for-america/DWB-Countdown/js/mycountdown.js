$(document).ready(function() {
	$('#countdown_dashboard').countDown({
		targetDate: {
			'day': 		23,
			'month': 	02,
			'year': 	2012,
			'hour': 	00,
			'min': 		00,
			'sec': 		00
		},
		omitWeeks: true
	});
	$('#countdown_dashboard').startCountDown();
});
