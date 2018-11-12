


			document.addEventListener("DOMContentLoaded", function () {

				console.log(" hey the document is loaded")
				alert(" Document Loaded !!");

				/*updateCurrentTime()*/
			});

			function updateCurrentTime() {
				var currentDate = new Date();
				document.getElementById("current-time").innerHTML = currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds();
				document.getElementById("complete-time").innerHTML = currentDate;
			}



			setInterval(updateCurrentTime, 1000);

			function run() {
				var pig = document.getElementById("pig-image");
				var currentPosition = parseInt(pig.style.paddingLeft);
				//htis below show that appending any number with string results in string only ..
				pig.style.paddingLeft = (currentPosition + 100) + 'px';
			}

			function enlargeText() {
				var title = document.getElementById("header-title");
				title.style.fontSize = '50px';
			}

			function dimishText() {
				var title = document.getElementById("header-title");
				title.style.fontSize = '20px';

				title.innerHTML = " Pigs run run run !!!"
			}

