//=============================================================================
//use mediaelementplayer.js
//=============================================================================

$('video').mediaelementplayer({
	features: ['playpause', 'progress', 'volume', 'fullscreen']
});

//=============================================================================
//create highlighting in transcript
//=============================================================================

//variables to target the video tag and span tags

const vid = document.getElementById('internetVid');
const track = document.getElementsByTagName('span');


//Event Listener added to video tag to check for Time Updates
vid.addEventListener('timeupdate', () => {

	//for loop to go through the span elements
	for(i = 0; i < track.length; i++) {

		//conditional statement for highlighting the appropriate span element
		if(track[i].getAttribute("data-start") < vid.currentTime && vid.currentTime < track[i].getAttribute("data-end")) {
			track[i].style.color = '#008080';
		} else {
			track[i].style.color = '#000000';
		  }
	}
});

//=============================================================================
//start playing video where clicked in the transcript
//=============================================================================

for(i = 0; i < track.length; i++) {
	track[i].addEventListener('click', (event) => {
		vid.currentTime = event.target.getAttribute('data-start');
		vid.play();
	})
}

//=============================================================================
//change the skin on meidaelementplayer.js
//=============================================================================
