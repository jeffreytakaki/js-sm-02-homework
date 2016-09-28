$(document).ready(function(){

	$('input#makeLetter').click(function(){


		var Adjective = $('input#adjective').val();
		var Friend = $('input#friend').val();


		var texts = new Array();

		var nouns = new Array();

		texts[0] = 	'Dear '+Adjective+':';

		texts[1] =  Friend +' worked for me as my assistant for LENGTH OF TIME. I recommend her without NOUN #1 (PL) for the OCCUPATION program.';

		texts[2] = 'While working in NOUN production, I often relied on FRIENDS NAME to put together ADJECTIVE #1 presentations, for which she described and VERB ENDING IN "ED" the artistic approach to the project, researching NOUN #2 (PL) and photographic ADJECTIVE #2 materials. Her creativity, resourcefulness and ability to see a project through really made these presentations ADJECTIVE #3 and ADJECTIVE #4.';

		texts[3] = 'When we went into production on the feature film NAME OF MOVIE, FRIENDS NAME was able to observe every NOUN #3 of the process, VERB ENDING IN "ING" in on meetings and working with ANIMAL (PL) in all areas of the production from the moment the production was set in motion through the release of the film LENGTH OF TIME later.';

		texts[4] = 'During this time, she was an ADJECTIVE #5 OCCUPATION #2, often serving as my liason to scattered NOUN #3 (PL) of the crew. She also coordinated projects involving ADJECTIVE #6 people, and her ability to work ADVERB #1 while guiding the project quickly and ADVERB #2 was ADJECTIVE #7. For example, when we suddenly needed to reconceive several action NOUN #5 (PL) that had already been storyboarded, FRIENDS NAME quickly found a new storyboard OCCUPATION #3 on location and worked with him, the stunt coordinator and the OCCUPATION #4 thorugh several drafts to make sure the new NOUN #5 (PL) worked, and then VERB ENDING IN "ED" with crew NOUN #3 (PL) from all departments, making sure everyone was up-to-date on the changes that were relevant to them. She even VERB ENDING IN "ED" #2 in to draw a few last-minute ADJECTIVE #8 changes herself.';

		texts[5] = 'FRIENDS NAME\'s sensitivity, NOUN #1, energy and sense of NOUN #2 made working with her a/an NOUN #3. I highly recommend her as a/an ADJECTIVE #9 addition to the program.';

		texts[6] = 'Sincerely,';

		texts[7] = 'YOUR NAME';

		$(texts).each(function(index, text){

			$('div.output').append('<p>' + text + '</p>');

		});

	});


});