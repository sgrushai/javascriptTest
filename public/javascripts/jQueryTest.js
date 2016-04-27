(function($){
	function clickHandler(e){
		const $mess = $('#messageDiv');
		$mess.text(`${e.target.innerText} is clicked`).show();
		setTimeout(function(){
			$mess.fadeOut('slow');
		}, 1000);
	}



	$(document).ready(function(){

		const $addBtn = $('#addBtn'),
			$testBtn = $('#testBtn'),
			$container = $('#containerBtns');

		let btnIndex = 1;

		$addBtn.click(() => {
			const $newBtn = $(`<button class="btn">button number ${btnIndex}</button>`);
            $newBtn.click(clickHandler);
			$('<div class="col-md-2"></div>').append($newBtn).appendTo($container);
			btnIndex++;
		});
		$testBtn.click(clickHandler);


        // Get the modal
        var modal = document.getElementById('myModal');

// Get the button that opens the modal
        var btn = document.getElementById("timeBtn");

// Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        var stopTime=false;
// When the user clicks on the button, open the modal
        btn.onclick = function() {
            stopTime=false;
            modal.style.display = "block";
            $('#currentTime').innerHTML=startTime();
        }

// When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            stopTime=true;
            modal.style.display = "none";

        }

// When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                stopTime=true;
                modal.style.display = "none";
            }
        }

        function startTime() {
            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();

            m = checkTime(m);
            s = checkTime(s);
            document.getElementById('currentTime').innerHTML =
                h + ":" + m + ":" + s;
            var t = setTimeout(startTime, 500);
        }
        function checkTime(i) {
            if(!stopTime) {
                if (i < 10) {
                    i = "0" + i
                }
                ;  // add zero in front of numbers < 10
                return i;
            } else{
                return false;
            }
        }




	})
}(jQuery));