
		
		function take_snapshot() {
			// snapshot dan upload server
			document.getElementById('upload_results').innerHTML = '<h1>Uploading...</h1>';
			webcam.snap();
			console.log('snapshotted');
		}
		
		function my_completion_handler(msg) {
			// ekstrak URL
			if (msg.match(/(http\:\/\/\S+)/)) {
				var image_url = RegExp.$1;
				// lihat JPEG
				document.getElementById('upload_results').innerHTML = 
					'<h1>Upload Successful!</h1>' + 
					'<h3>JPEG URL: ' + image_url + '</h3>' + 
					'<img src="' + image_url + '">';
				
				// reset kamera, perlu jsnya webcam
				webcam.reset();
			}
			else alert("PHP Error: " + msg);
		}
		
		setInterval(function() {
			// snapshot dan upload server
			document.getElementById('upload_results').innerHTML = '<h1>Uploading...</h1>';
			webcam.snap();
			console.log('snapshotted');
		}, 3000);