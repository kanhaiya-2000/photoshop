var d = document.getElementById('bg_setter');
		var m = document.getElementById("modified_image");
		var vid ;
		alert("Never block dialogue else you will miss instruction guide on how to use it");
		    var clip_his=[];
		    var clip_index=0;
		    var index_store = clip_index;
    		var i1 = document.getElementById('i1');	
    		var v1 = document.getElementById('v1');					
    		var g1 = 100 ,g11=100;
    		var i2 = document.getElementById('i2');
    		var v2 = document.getElementById('v2');
    		var g2 = 100 ,g12 = 100;
    		var i3 = document.getElementById('i3');
    		var v3 = document.getElementById('v3');
    		var g3 = 100 ,g13 = 100;
    		var i4 = document.getElementById('i4');
    		var v4 = document.getElementById('v4');
    		var g4 = 0 ,g14 = 0;
    		var i5 = document.getElementById('i5');
    		var v5 = document.getElementById('v5');
    		var g5 = 0 ,g15 = 0;
    		var i6 = document.getElementById('i6');
    		var v6 = document.getElementById('v6');
    		var g6 = 0 ,g16 = 0;
    		var i7 = document.getElementById('i7');
    		var v7 = document.getElementById('v7');
    		var g7 = 0 ,g17 = 0;
    		var i8 = document.getElementById('i8');
    		var i9 = document.getElementById('i9');
    		var i10 = document.getElementById('i10');
    		var i11= document.getElementById('i11');
    		var i12 = document.getElementById('i12');
    		var i13 = document.getElementById('i13');
    		var i14 = document.getElementById('i14');
    		var i15 = document.getElementById('i15');
    		var i16 = document.getElementById('i16');
    		var i17 = document.getElementById('i17');
    		var i18 = document.getElementById('i18');
    		var i19 = document.getElementById('i19');
    		var v8 = document.getElementById('v8');
    		var v9 = document.getElementById('v9');
    		var v10 = document.getElementById('v10');
    		var v11 = document.getElementById('v11');
    		var v12 = document.getElementById('v12');
    		var v13 = document.getElementById('v13');
    		var v14 = document.getElementById('v14');
    		var v15 = document.getElementById('v15');
    		var v16 = document.getElementById('v16');
    		var v17 = document.getElementById('v17');
    		var g19 = 100;
    		var do_not_change = false;
    		document.getElementById('ti').checked= false;
		  	document.getElementById('ti2').checked= false;
    		document.getElementById('result_img').style.transform="none";
    		var g8 = 0 ,g18 = 0;
    		var g9 = 100;
    		var i_type, v_type;
    		var g = document.getElementById('result_img');
		  var gv = document.getElementById('result_vid');
		  var sn = 0;
		  var songs = document.querySelectorAll('#d4 audio');		  		  
		  if(confirm('Enable background song?\nLater,you can also control whether to play or not?')){		  			
		  			songs[sn].load();
		  			songs[sn].play();								
				}
				else{
					//kuch ny
				}
				let startStop = document.getElementById('div2');
				if(songs[sn].paused){
		  				startStop.className = 'fa fa-play w3-btn w3-circle';
		  				$('#div2').attr('title','Play song');
		  			}
		  			else{
		  				$('#div2').attr('title','stop song');
		  			}
		  			$('#div1').attr('title','Previous song');
				function z2(e){
						if(songs[sn].paused){
							songs[sn].play();							
							e.className = 'fa fa-pause w3-btn w3-circle';
							$('#div2').attr('title','Stop song');
						}
						else{
							songs[sn].pause();							
							e.className = 'fa fa-play w3-btn w3-circle';
							$('#div2').attr('title','Play song');
						}
					}
					function z1(){
						songs[sn].pause();
						sn = (sn==0)?songs.length-1:sn-1 ;
						startStop.className = 'fa fa-pause w3-btn w3-circle';
		  				$('#div2').attr('title','stop song');
						songs[sn].load();
						songs[sn].play();
					}
					function z3(){
						songs[sn].pause();
						sn = (sn==songs.length-1)?0:sn+1 ;
						startStop.className = 'fa fa-pause w3-btn w3-circle';
		  				$('#div2').attr('title','stop song');
						songs[sn].load();
						songs[sn].play();
					}
					function z4(input){						
						//let divs = $('#d4');
						let fReader = new FileReader();
						fReader.readAsDataURL(input.files[0]);
						fReader.onloadend = function(e){
			   			let s = (e.target.result.split(';')[0]).split('/');
						let ext = s[s.length-1].toLowerCase();						
						s_kk_p_e();
						if(ext=='mpeg'||ext=='x-wav'||ext=='ogg'){
						   if((input.files.item(0).size)/1024 > 25000)
								alert("Ya mae la!Your file is too bigger,\nmax-limit:50 MB");
						else{							
							$('#d4').append($("<audio loop autoplay><source src='"+e.target.result+"'></audio>").css('display','none'));
							songs[sn].pause();							
							songs = document.querySelectorAll('#d4 audio');
							sn = songs.length - 1;
						}												
				}				
  		       			else
  			        		alert("Invalid file type!\nSelect an audio file(.mp3 or .ogg or.wav extension only)");
  			    			s_kk_p_e();  		
  	}
  }					
		  function back(){
		  	if(confirm('You are about to lose all saved changes!\nSure to quit?')){
		  	document.getElementById('modified_image').style.display="none";
		  	document.getElementById('original_image').style.display="none";
		  	document.getElementById('modified_video').style.display="none";
		  	document.getElementById('result_img').style.clipPath = "polygon(0px 0px,480px 0px,480px 640px, 0px 640px)";
		  	document.getElementById('result_vid').style.clipPath = "polygon(0px 0px,480px 0px,480px 600px, 0px 600px)";
		  	document.getElementById('original_video').style.display="none";
		  	document.getElementById('ins_crop').style.display="none";
		  	document.getElementById('ins_crop-v').style.display="none";
		  	document.getElementById('img_tools').style.display="none";
		  	document.getElementById('vid_tools').style.display="none";
		  	document.getElementById('c1').style.display="none";
		  	document.getElementById('advanced_img_tools').style.display="none";
		  	document.getElementById('advanced_vid_tools').style.display="none";
		  	document.getElementById('adv').style.display="none";
		  	document.getElementById('adv2').style.display="none";
		  	document.getElementById('ask').style.display="block";
		  	document.getElementById('result_vid').setAttribute('src','images/pic.mp4');
		  	document.getElementById('outVideo').setAttribute('src','images/pic2.mp4');
		  	document.getElementById('outImage').src = "images/pic.png";
		  	document.getElementById('result_img').src = "images/pic.gif";
		  	document.getElementById('modified_video').style.background="none";
		  	document.getElementById('modified_image').style.background="none";
		  	document.getElementById('result_img').style.filter ="none";
		  	document.getElementById('result_img').style.mixBlendMode ="normal";
		  	document.getElementById('result_img').style.borderRadius ="0";
		  	document.getElementById('result_vid').style.filter ="none";
		  	document.getElementById('result_vid').style.mixBlendMode ="normal";
		  	document.getElementById('result_img').style.transform = "none";
		  	document.getElementById('result_vid').style.transform = "none";
		  	document.getElementById('ti').checked= false;
		  	document.getElementById('ti2').checked= false;
		  	document.getElementById('text2').style.display="none";
		  	document.getElementById('text21').style.display="none";
		  	document.getElementById('text1').style.display="none";
		  	document.getElementById('text11').style.display="none";
		  	document.getElementById('result_img').style.width ="100%";
		  	document.getElementById('result_vid').style.height ="100%";
		  	document.getElementById('result_img').style.top ="0";
		  	document.getElementById('result_img').style.left ="0";
		  	document.getElementById('result_vid').style.top ="30px";
		  	document.getElementById('result_vid').style.right ="10px";
		  	document.getElementById('result_img').style.height ="100%";
		  	document.getElementById('result_vid').style.width ="100%";
		  	document.getElementById('modified_image').style.backgroundSize = "100% 100%";
			document.getElementById('modified_image').style.backgroundRepeat = "no-repeat";
			document.getElementById("ho-gelo").style.display="none";
			document.getElementById("ho-gelo2").style.display="none";
			document.getElementById("ho-gelo-v").style.display="none";
			document.getElementById("ho-gelo2-v").style.display="none";
			updateSliderv(100,100,100,0,0,0,0,0,100);
			gv.style.cursor= "-webkit-grab" ;
			gv.style.cursor= "grab";
			g.style.cursor= "-webkit-grab";
			g.style.cursor= "grab";
			$(".dots").remove();
			clip_his = [];
			clip_index = 0;
			index_store = 0;
		    }
		  }
		  function Record(st){
		  	$('#d2').hide();
		  	$('#recorder-tools').hide();
		  	$('#upload').hide();
		  	$('#upload2').hide();		  	
		  	document.getElementById('result_vid').pause();
		  	document.getElementById('outVideo').pause();
		  	var source_gen;
		  	if(st=='video'){
		  		var audio_confirm = confirm('Do u want to include audio recording as well?');
		  		if(audio_confirm){
		  			songs[sn].pause();
		  			startStop.className = 'fa fa-play w3-btn w3-circle';
					$('#div2').attr('title','play song');
		  		}
		  		var video = document.querySelector('#upload');
		  		var video2 = document.querySelector('#upload2');
		  		video.controls = false;
		  		video.style.display = 'block';
		  		video2.style.display = 'none';
		  		video.poster = 'images/welcome.gif';
		  		let chunks = [];		  		
		  		var recorder;
    			let upload = document.querySelector('#uploadvdo');
    			let download = document.querySelector('#downloadvdo');
    			let start = document.querySelector('#startrecord');
    			let stop = document.querySelector('#stoprecord');
    			let finish= document.querySelector('#finishrecord');    			
    			let again= document.querySelector('#rerecord');
    			let quitv = document.querySelector('#quit2');
    			quitv.onclick = function(){
    				$('#d3').hide();				 
					$('#recorder-tools').hide();
					$('#camera-tools').hide();				
					video2.style.display = "none";
					video.style.display = "none";					
					video2.pause();
					video.pause();								
    				$('#upload').hide();
    				document.getElementById('result_vid').play();      									
					$('#d2').show();				
					s_kk_p_e();
					$('html,body').animate({
                     	scrollTop: $("#top").offset().top},
                      	'slow');
			
    		}
    			
		  		$('#recorder-tools').css('display','flex');
		  		$('#camera-tools').hide();
		  		$('#d3').show();
		  		$('#uploadvdo').hide();
		  		$('#downloadvdo').hide();
		  		$('#stoprecord').hide();
		  		$('#quit2').show();
		  		$('#logmsg').hide();
		  		$('#startrecord').show();
		  		$('#finishrecord').hide();
		  		$('#rerecord').hide();   		
    		function startRecord(stream,time){
    			recorder = new MediaRecorder(stream);
    			localstream = stream;    			
    			alert("Recording-limit:30 sec"); 
    			chunks = [];   			
    			recorder.ondataavailable = event => chunks.push(event.data);
  				recorder.start();
  				let stopped = new Promise((resolve, reject) => {
    			recorder.onstop = resolve;
    			recorder.onerror = event => reject(event.name);
 				 });
  				let recorded = wait(time).then(
    			() => 
    			recorder.state == "recording" && recorder.stop() 
  				);
 
  				return Promise.all([
    			stopped,
    			recorded
  				])
  				.then(() => chunks);
			}
    		function wait(time) {
    			setTimeout(function(){$('#logmsg').hide()},time);
  				return new Promise(resolve => setTimeout(resolve, time));
			} 
    		start.onclick = function(){
    			$('#uploadvdo').hide();
    			$('#downloadvdo').hide();
    			$('#logmsg').hide();
		  		$('#stoprecord').show();
		  		$('#startrecord').hide();
		  		$('#finishrecord').show();
		  		$('#rerecord').hide();
		  		$('#quit2').hide();
    			if (navigator.mediaDevices.getUserMedia) {		  		
		  		$('#upload').show();
		  		video.controls = true;		  				  		
		  		 navigator.mediaDevices.getUserMedia({ video: true,audio:audio_confirm})
    			.then(function (stream) {    			
      			video.srcObject = stream; 
      			video.captureStream = video.captureStream || video.mozCaptureStream;
      			return new Promise(resolve => video.onplaying = resolve);
      			}).then(() => startRecord(video.captureStream(), 30000)).then (chunks => {    			
    			let recordedBlob = new Blob(chunks, { type: "video/webm" });
    			video2.src = URL.createObjectURL(recordedBlob);   	
    			video.style.display = 'none';
    			video2.style.display = 'block';
    			if(audio_confirm){
    			songs[sn].pause();
    			startStop.className = "fa fa-play w3-btn w3-circle";
    			$('#div2').attr('title','play song');}
    			$('#recorder-tools').show();
    			$('#logmsg').hide();
    			$('#uploadvdo').show();
    			$('#downloadvdo').show();
    			$('#quit2').show();
		  		$('#stoprecord').hide();
		  		$('#startrecord').hide();
		  		$('#finishrecord').hide();
		  		$('#rerecord').show();		  		
    			 })    			
    		.catch(function (err0r) {
      		alert(err0r.message+"\nRefresh the page and Retry");
      		$('#d2').show();
      		$('#upload').hide();
      		stops(video.srcObject,chunks);
      		$('#d3').hide();
      		return;
    });    	
    		}
    		finish.addEventListener("click", function() {
  			stops(video.srcObject,chunks);
  			$('#logmsg').show();  							
  				$('#logmsg').html("Preparing your video...<br>Please wait").css('background','white').css('font-weight','bold').css('color','green');
  			});
			
    		
    		function stops(streams,chunks){    			
    			streams.getTracks().forEach(track => track.stop());      			    			
    			video.style.display = 'block';
    			video2.style.display = 'none';    			
    			video.load();
    			video.controls = false;
    			video.poster = 'images/wait.gif';
    			songs[sn].play();
    			startStop.className = "fa fa-pause w3-btn w3-circle";
    			$('#div2').attr('title','Stop song');    			   			
    			$('#recorder-tools').hide();		  	 
    		}
    		stop.onclick = function(){
    			if(recorder.state=='recording'){
    				recorder.pause();
    				video.pause();
    				stop.innerHTML = "Play Recording <i class='fa fa-play'></i>";
    			}
    			else if(recorder.state=='paused'){
    				recorder.resume();
    				video.play();
    				stop.innerHTML = "Pause Recording <i class='fa fa-stop'></i>";
    			}
    		}
    		again.onclick = function(){    			
    			$('#upload2').hide();
    			video2.muted = true;
    			video.controls = false;
    			video2.pause();
    			video.poster = 'images/welcome.gif';
    			$('#upload').show();
    			alert("Click the start button to start recording again");    			
    			$('#uploadvdo').hide();
    			$('#logmsg').hide();
    			$('#downloadvdo').hide();
		  		$('#stoprecord').hide();
		  		$('#quit2').show();
		  		$('#startrecord').show();
		  		$('#finishrecord').hide();
		  		$('#rerecord').hide();
    		}
    		upload.onclick = function(){
    			$('#d3').hide();				 
				$('#recorder-tools').hide();
				$('#upload2').hide();
    			$('#upload').hide();
    			video2.pause();
				video.pause();				
    			document.getElementById('outVideo').setAttribute('src',video2.src);
    			document.getElementById('result_vid').setAttribute('src',video2.src);
    			stops(video.srcObject,chunks); 
    			video.src = "";
				video2.src = "";				 						
    			$('#vid_tools').show();
    			$('#advanced_vid_tools').css('display','flex');							
				$('#d2').show();				
				s_kk_p_e();
				$('html,body').animate({
                     scrollTop: $("#top").offset().top},
                      'slow');
    		}
    		download.onclick = function(){ 
    		    let a = document.createElement('a') ;
    		    a.id = 'dwn';   		    
    			a.href = video2.src;
    			a.download = 'kk_p_vd'+Math.floor(Math.random()*(1000000))+'.webm';
    			a.click();
    			$('#dwn').remove();
    		}
    		
    		quitv.onclick = function(){
    			$('#d3').hide();				 
				$('#recorder-tools').hide();				
				video2.style.display = "none";				
				video2.pause();
				video.pause();
				video.src = "";
				video2.src = "";	
				stops(video.srcObject,chunks);				
    			$('#upload').hide();    						
    			document.getElementById('result_vid').play();    			
    			video2.muted = true;					
				$('#d2').show();				
				s_kk_p_e();
				$('html,body').animate({
                     scrollTop: $("#top").offset().top},
                      'slow');
			
    	}
    }		  	
	}		  
		  	if(st=='photo'){
		  		$('#preview').show();
		  		$('#recorder-tools').hide();
		  		$('#upload').hide();
		  		$('#upload2').hide();
		  		$('#d3').show();			  		
		  		$('#camera-tools').css('display','flex');		  		
		  		$('.bt-show-i').show();
		  		$('.bt-hide-i').hide();
		  		try{
		  		Webcam.set({
  					width: 600,
  					height: 550,
  					dest_width: 600,
    				dest_height: 550,
  					image_format: 'jpeg',
  					jpeg_quality: 90
 			});
		  		Webcam.set("constraints", {
  					optional: [{ minWidth: 600 }]
			});
 			Webcam.attach( '#preview' ); 
 			var sound = new Audio();
 			sound.autoplay = false;
 			sound.src = 'sounds/shutter.mp3';}
 			catch(e){
 				alert(e.message+"\nRefresh the page and try again");
 			}
			$('#takesnapshot').click(function(){ 
 			sound.play();
 			$('.bt-hide-i').show(); 
 			$('.bt-show-i').hide();
 			Webcam.snap( function(data_uri) { 
 				source_gen = data_uri;
 				$('#preview').hide();
 				$('#preview2').show();
 			document.getElementById('preview2').innerHTML = 
  		   '<img src="'+data_uri+'"width="600" height="550"/>';
 		} );
		  });
			Webcam.on( 'error', function(err) {
    		alert("\nSomething went wrong!\nDetails:"+err);
    		Webcam.reset();
    		$('#d2').show();      		
      		$('#d3').hide();
} );
			$('#recapture').click(function(){
				$('#takesnapshot').show();
				$('.bt-hide-i').hide();
				$('#preview2').hide();
 				$('#preview').show();
			});
			$('#upload_photo').click(function(){
				$('#d3').hide();
				Webcam.reset();
				$('html,body').animate({
                     scrollTop: $("#top").offset().top},
                      'slow');
				$('.bt-hide-i').hide(); 
 				$('.bt-show-i').show();
 				$('#camera-tools').hide();
 				$('#preview2').hide();
				$('#d2').show();
				document.getElementById('result_img').setAttribute('src',source_gen);
				document.getElementById('outImage').setAttribute('src',source_gen);
				document.getElementById("img_tools").style.display="block";
				$('#advanced_img_tools').css('display','flex');
				s_kk_p_e();
			});
			$('#downloadimg').click(function(){
				let a = document.createElement('a');
				a.id = 'vah';
				document.body.appendChild(a);
				a.href = source_gen;
				a.download = 'kk_p_ph'+Math.floor(Math.random()*(1000000))+'.jpeg';
				a.click();
				$('#vah').remove();
			})
			$('#quit').click(function(){
				$('#d3').hide();
				Webcam.reset();
				$('#camera-tools').hide();
				$('html,body').animate({
                     scrollTop: $("#top").offset().top},
                      'slow');
    		
				$('.bt-hide-i').hide(); 
 				$('.bt-show-i').show();
 				$('#preview2').hide();
				$('#d2').show();				
				s_kk_p_e();

			});
		}
	}
    		  $( function() {
    			$( "#text1" ).draggable();
    			$( "#text21" ).draggable();
    			$( "#text11" ).draggable();
    			$( "#text2" ).draggable();
    			$( "#result_img" ).draggable();
    			$( "#result_vid" ).draggable();
 				 } ); 		
		var factor = 0;
		var factor2 = 0;
		function clip_h(e){
			s_kk_p_e();
			if(e.innerText.toString().indexOf("Previous clip")>-1){
				if(clip_his.length>0){
					if(clip_index>0){
				clip_index-- ;
				$(".dots").remove();
				do_not_change = true;
				clip_str = "";
				clip_str2 = "";
				document.getElementById("result_img").style.clipPath ='polygon('+clip_his[clip_index]+')';
				document.getElementById("result_vid").style.clipPath ='polygon('+clip_his[clip_index]+')';
				}
				else{
					alert("No more history!!");
					do_not_change = true;
					s_kk_p_e();
				}				
			}
			else
				alert("There is no former history for any clipping!");
			    s_kk_p_e();
			}
			if(e.innerText.toString().indexOf("Next clip")>-1){
				if(clip_index<clip_his.length-1){
				clip_str = "";
				clip_str2 = "";	
				clip_index++ ;
				$(".dots").remove();
				do_not_change = true;
				document.getElementById("result_img").style.clipPath ='polygon('+clip_his[clip_index]+')';
				document.getElementById("result_vid").style.clipPath ='polygon('+clip_his[clip_index]+')';								
			}
			else{
				alert("No more recent clips!");
				s_kk_p_e();
				clip_index = clip_his.length ;
				do_not_change = false;
				document.getElementById('result_img').style.clipPath = "polygon(0px 0px,480px 0px,480px 640px, 0px 640px)";
		  		document.getElementById('result_vid').style.clipPath = "polygon(0px 0px,480px 0px,480px 600px, 0px 600px)";
			}
		}
		}
		function clip(){
			let c = document.getElementsByClassName("non-crop");
			factor++ ;
			s_kk_p_e();
			let btn = document.getElementById("ho-gelo");
			let btn2 = document.getElementById("ho-gelo2");
			document.getElementById("result_img").style.transform="scale(1,1)";
			$("#clip_hi2").text(clip_his.length);
			$(".dots").remove();
			g.draggable = "false";
			btn.style.display ="block";
			btn2.style.display ="block";
			let clip_str ="";
			let l_x,l_y;
			g.style.clipPath = "polygon(0px 0px,"+g.width+"px 0px,"+g.width+"px "+g.height+"px, 0px "+g.height+"px)";
			for(x of c)
				x.style.display = "none";
			g.style.cursor="crosshair";			
			$(document).ready(function() {
			$("#ins_crop").show();
			$( "#result_img" ).draggable( "disable" );
			$("#result_img").click(function (ev) {          		
          		let color = 'rgba(0,0,255,0.6)';
          		let size = '3.6px';
          		$("body").append(
          		$('<div class="dots"></div>')
              		.css('position', 'fixed')
              		.css('top', (ev.clientY-1.8) + 'px')
              		.css('left', (ev.clientX-1.8) + 'px')
              		.css('width', size)
              		.css('height', size)
              		.css('background-color', color));
      });
			$('#result_img').click(function(e) {
    		let offset = $(this).offset();
    		do_not_change = false;
    		l_x = (e.pageX - offset.left);
    		l_y = (e.pageY - offset.top);
    		clip_str += ""+(e.pageX - offset.left)+"px "+(e.pageY - offset.top)+"px,";
    		
  		});
		});
			btn.onclick = function(){
				this.style.display ="none";
				btn2.style.display="none";
				$('html,body').animate({
        		scrollTop: $('#top').offset().top},
        		'slow');
				$( function() {
    			$( "#result_img" ).draggable();
    			$("#ins_crop").hide();
    			$(".dots").hide();
    			$(".dots").remove();
    		});				
				for(x of c)
				  x.style.display = "initial";
			$("#adv").hide();
			clip_index = index_store ;
			if(clip_str.split(',').length>3)
			clip_his[clip_index++] = clip_str.substr(0,clip_str.length-1);
			index_store = clip_index ;
			if((clip_str.split(',').length>3)&&(!do_not_change)){
			g.style.clipPath = "polygon("+clip_str.substr(0,clip_str.length-1)+")";}
			if(clip_str.split(',').length<=3&&(!do_not_change))
		    	alert("you need to select atleast 3 dots");
			if(do_not_change){do_not_change = false;}
			s_kk_p_e();
		   	$("#clip_hi2").text(clip_his.length);
			$( "#result_img" ).draggable( "enable" );
			g.style.cursor ="-webkit-grab";
			g.style.cursor = "grab";
			document.getElementById("advanced_img_tools").style.display="flex";
			document.getElementById("advanced_vid_tools").style.display="none";
			}
			btn2.onclick = function(){
				let k = $(".dots");
				clip_index = index_store ;
				if(k.length/factor>3){
					for(let i =0;i<factor;i++)
						$(".dots:last").remove();
				let s =clip_str.split(',');
				clip_str="";
				for(let i =0;i<s.length-2;i++)
					clip_str += s[i]+",";
			}				
			}
		}
		 
		function clip2(){
			factor2++ ;
			s_kk_p_e();
			let d = document.getElementsByClassName("non-crop-v");
			let Btn = document.getElementById("ho-gelo-v");
			let Btn2 = document.getElementById("ho-gelo2-v");
			document.getElementById("result_vid").style.transform="scale(1,1)";
			$("#clip_hi").text(clip_his.length);
			$("#result_vid").click(function (ev) {
          		do_not_change = false;
          		let color = 'rgba(255,255,0,0.6)';
          		let size = '3.6px';
          		$("body").append(
          		$('<div class="dots"></div>')
              		.css('position', 'fixed')
              		.css('top', (ev.clientY-1.8) + 'px')
              		.css('left', (ev.clientX-1.8) + 'px')
              		.css('width', size)
              		.css('height', size)
              		.css('background-color', color));
      });
			$(".dots").remove();
			//document.getElementById("result_vid").style.transform="scale(1,1)";
			$( "#result_vid" ).draggable("disable");
			Btn.style.display ="block";
			Btn2.style.display ="block";
			let clip_str2 ="";
			let l_xv,l_yv;
			gv.style.clipPath = "polygon(0px 0px,480px 0px,480px 500px, 0px 500px)";
			for(x of d)
				x.style.display = "none";
			gv.style.cursor="crosshair";
			gv.onclick = function(){};
			//$( "#result_vid" ).draggable( "disable" );
			$(document).ready(function() {
			$("#ins_crop-v").show();
			$('#result_vid').click(function(e) {
    		let offset = $(this).offset();
    		l_xv = (e.pageX - offset.left);
    		l_yv = (e.pageY - offset.top);
    		clip_str2 += ""+(e.pageX - offset.left)+"px "+(e.pageY - offset.top)+"px,";
    		
  		});
		});
			Btn.onclick = function(){
				this.style.display ="none";
				Btn2.style.display="none";
				$('html,body').animate({
        		scrollTop: $('#top').offset().top},
        		'slow');
				$( "#result_vid" ).draggable("enable");
				$( function() {
    			
    			$("#ins_crop-v").hide();
    			$(".dots").hide();
    			$(".dots").remove();
    		});
				for(x of d)
				x.style.display = "block";
			$('#original_video').css('display','flex').css('align-items','center').css('height','90%');
			$("#adv2").hide();
			clip_index =index_store;
			if(clip_str2.split(',').length>3)
			clip_his[clip_index++] = clip_str2.substr(0,clip_str2.length-1);
			index_store = clip_index ;
			if(clip_str2.split(',').length>3&&(!do_not_change))
			gv.style.clipPath = "polygon("+clip_str2.substr(0,clip_str2.length-1)+")";
		    if(clip_str2.split(',').length<=3&&(!do_not_change))
		    	alert("You need to select atleast 3 points");
			if(do_not_change){do_not_change=false;}
		    s_kk_p_e();		
			$("#clip_hi").text(clip_his.length);
			//$( "#result_vid" ).draggable( "enable" );
			gv.style.cursor = "-webkit-grab";
			gv.style.cursor = "grab";
			document.getElementById("advanced_vid_tools").style.display="flex";
			document.getElementById("advanced_img_tools").style.display="none";
			}
			Btn2.onclick = function(){
				let k = $(".dots");
				clip_index = index_store;
				if(k.length/factor2>3){
					for(let i =0;i<factor2;i++)
						$(".dots:last").remove();
				let s =clip_str2.split(',');
				clip_str2="";
				for(let i =0;i<s.length-2;i++)
					clip_str2 += s[i]+",";
			}
				
			}
		}
		function s_kk_p_e(){
			if(screen.availWidth < 1000){
				document.getElementById('d2').style.display="none";
				document.getElementById('d1').style.display="none";
				alert("Incompatible device-error!\nTry in your laptop");
				document.getElementById('aud').play();
			document.write("<img src='images/oops.jpeg' style='width:100%;height:100%'><p style='font-weight:bold;text-align:center;position:fixed;top:0%;right:30%;color:red;width:200px;'>Your current device is not adjustable to deal with all equipments.<br>This is for laptop only<br>Use it in laptop only</p>");}
			else{
			document.getElementById("d1").style.display="none";
			document.getElementById("d2").style.display="block";
			let elem = document.documentElement;
			try{if (elem.requestFullscreen) 
  				  elem.requestFullscreen();
  		    else if (elem.mozRequestFullScreen)  
    			  elem.mozRequestFullScreen();
   			else if (elem.webkitRequestFullscreen) 
   				  elem.webkitRequestFullscreen();
            else if (elem.msRequestFullscreen) 
    			  elem.msRequestFullscreen();}
    			catch(e){
    				//No-problem dude!!
    			};
  }}
    
		
  		function change_bg() {
  			let input = document.getElementById("u1");
			let fReader = new FileReader();
			fReader.readAsDataURL(input.files[0]);
			fReader.onloadend = function(e){
			   let s = (e.target.result.split(';')[0]).split('/');
				let ext = s[s.length-1].toLowerCase();
				s_kk_p_e();
				     if(ext=='jpg'||ext=='jpeg'||ext=='png'||ext=='gif')
					      document.getElementById('modified_image').style.backgroundImage ="url("+fReader.result+")";				
  		       else
  			        alert("Invalid file type!Can't be set as background-image");
  			     s_kk_p_e();
  		
  	}
  }
  	  function change_bg2() {
  			let input = document.getElementById("u2");
			  let fReader = new FileReader();
			  fReader.readAsDataURL(input.files[0]);
			  fReader.onloadend = function(e2){
			  let s = (e2.target.result.split(';')[0]).split('/');
				let ext = s[s.length-1].toLowerCase();
				s_kk_p_e();
				if(ext=='jpg'||ext=='jpeg'||ext=='png'||ext=='gif')
					  document.getElementById('modified_video').style.backgroundImage ="url("+fReader.result+")";					

  				else
  			    alert("Invalid file type!Can't be set as background-image");
  		      s_kk_p_e();
  	}
  }
		function T_img(){
			//alert("Tap the browse button to select a video from your device");
			$( "#result_vid" ).draggable("enable");
			document.getElementById('c1').style.display="block";
			document.getElementById("ask").style.display="none";
			document.getElementById("ho-gelo-v").style.display="none";
			document.getElementById("ho-gelo2-v").style.display="none";
			document.getElementById("ho-gelo").style.display="none";
			document.getElementById("ho-gelo2").style.display="none";
			s_kk_p_e();
			document.body.style.overflow = "auto";
			document.getElementById("original_video").style.display="flex";
			document.getElementById("modified_video").style.display="flex";			
		}
    
		function T_vdo(){
			//alert("Tap the browse button to select a photo from your device");
			$( "#result_img" ).draggable("enable");
			document.getElementById("ask").style.display="none";
			document.getElementById('c1').style.display="block";
			document.getElementById("ho-gelo").style.display="none";
			document.getElementById("ho-gelo2").style.display="none";
			document.getElementById("ho-gelo").style.display="none";
			document.getElementById("ho-gelo2").style.display="none";
			s_kk_p_e();
			document.body.style.overflow = "auto";
			document.getElementById("original_image").style.display="block";
			document.getElementById("modified_image").style.display="flex";				
		}
    
		 function preview() {
    		let input = document.getElementById("picField");
			let fReader = new FileReader();
			fReader.readAsDataURL(input.files[0]);
			s_kk_p_e();			
			fReader.onloadend = function(event){
			   let s = (event.target.result.split(';')[0]).split('/');
				let ext = s[s.length-1].toLowerCase();
				i_type = ext;
				if(ext=='jpg'||ext=='jpeg'||ext=='png'||ext=='gif'){
  					var img1 = document.getElementById("outImage");
  					if((input.files.item(0).size)/1024 > 50000)
							alert("Ya mae la!Your file is too bigger,\nmax-limit:50 MB");
					else{
    				img1.src = event.target.result;
    				document.getElementById("result_img").src = img1.src;
	   				document.getElementById("advanced_img_tools").style.display="flex";
	   				document.getElementById("img_tools").style.display="block";
	   				$('html,body').animate({
                     scrollTop: $("#top").offset().top},
                      'slow');
	   			}
    		}
    		else
    			alert("invalid file-type!");
    		s_kk_p_e();
		
    }
}
    function preview_2() {
    		let input2 = document.getElementById("picField2");
			let fReader2 = new FileReader();
			fReader2.readAsDataURL(input2.files[0]);
			fReader2.onloadend = function(event2){
				s_kk_p_e();
				let s2 = (event2.target.result.split(';')[0]).split('/');
				let ext2 = s2[s2.length-1].toLowerCase();
				v_type = ext2;				
				if(ext2=='mp4'||ext2=='m4v'||ext2=='avi'||ext2=='mpg'||ext2=='webm'){
					if((input2.files.item(0).size)/1024 > 50000)
							alert("Ya mae la!Your file is too bigger,\nmax-limit:50 MB");
					else{
  			 	vid = document.getElementById("outVideo");
    			vid.setAttribute('src', event2.target.result) ;
    			gv.setAttribute('src',event2.target.result);
    			songs[sn].pause();
    			startStop.className = 'fa fa-play w3-btn w3-circle';
    			$('#div2').attr('title','play song');
	   			document.getElementById("advanced_vid_tools").style.display="flex";
	   			$('html,body').animate({
        		scrollTop: $("#top").offset().top},
        		'slow');
	   			document.getElementById("vid_tools").style.display="block";
	   	}
	   }
	   	else
	   		alert("Invalid file-type!");
		s_kk_p_e();
    }
}
    
    function f1(){    	
    	g1 = Number(i1.value);
    	document.getElementById('s1').innerHTML = g1 +"/100" ;
    	document.getElementById('mb').style.display = "block";
    	update();    	
    }
    function f2(){    	
    	g2 = Number(i2.value);
    	document.getElementById('s2').innerHTML = g2 +"/100";
    	document.getElementById('mb').style.display = "block";
    	update();    	
    }
    function f3(){    	
    	g3 = Number(i3.value);
    	document.getElementById('s3').innerHTML = g3 +"/100";
    	document.getElementById('mb').style.display = "block";
    	update();    	
    }
    function f4(){    	
    	g4 = Number(i4.value);
    	document.getElementById('s4').innerHTML = g4 +"/0";
    	document.getElementById('mb').style.display = "block";
    	update();
    	
    }
    function f5(){    	
    	g5 = Number(i5.value);
    	document.getElementById('s5').innerHTML = g5 +"/0";
    	document.getElementById('mb').style.display = "block";
    	update();
    	
    }
    function f6(){    	
    	g6 = Number(i6.value);
    	document.getElementById('s6').innerHTML = g6 +"/0";
    	document.getElementById('mb').style.display = "block";
    	update();
    }
    function f7(){    	
    	g7 = Number(i7.value);
    	document.getElementById('s7').innerHTML = g7 +"/0";
    	document.getElementById('mb').style.display = "block";
    	update();
    }
    function f8(){    	
    	g8 = Number(i8.value);
    	document.getElementById('s8').innerHTML = g8 +"/0";
    	document.getElementById('mb').style.display = "block";
    	update();
    }
    function f9(){    	
    	g9 = Number(i9.value);
    	document.getElementById('s9').innerHTML = g9 +"/100";
    	update();
    }
    function f10(){
    	document.getElementById('result_img').style.width = i10.value+"%";
    	document.getElementById('s10').innerHTML = i10.value+"%";
    }
    function f11(){
    	document.getElementById('result_img').style.height = i11.value+"%";
    	document.getElementById('s11').innerHTML = i11.value+"%";
    }
    function f12(){    	
    	document.getElementById('result_img').style.top = (i12.value-50)+"%";
    	document.getElementById('s12').innerHTML = i12.value+"%";
    }
    function f13(){    	
    	document.getElementById('result_img').style.left = (i13.value-50)+"%";
    	document.getElementById('s13').innerHTML = i13.value+"%";
    }
    function f14(){
    	let f =(i14.checked)?-1:1 ;
    	let f1 =(i15.checked)?-1:1 ;
    	document.getElementById('result_img').style.transform =  'scale('+f*i16.value+','+f1*i17.value+') rotate('+i19.value+'deg)';
    	document.getElementById('s14').innerHTML = i16.value;
    	document.getElementById('s15').innerHTML = i17.value;
    }
    function f15(){
    	document.getElementById('result_img').style.borderRadius = i18.value+"%";
    	document.getElementById('s16').innerHTML = i18.value;
    }
    function f16(){
    	let f =(i14.checked)?-1:1 ;
    	let f1 =(i15.checked)?-1:1 ;
    	document.getElementById('result_img').style.transform =  'scale('+f*i16.value+','+f1*i17.value+') rotate('+i19.value+'deg)';
    	document.getElementById('s17').innerHTML = parseInt((i19.value)/3.6)+"%";
    }
    function modify_bg(){
	s_kk_p_e();
    	document.getElementById('adv').style.display="block";
    }

    function update(){
    	g.style.filter = "brightness("+g1+"%) contrast("+g2+"%) saturate("+g3+"%) grayscale("+g4+"%) blur("+g5+"px) hue-rotate("+g6+"deg) invert("+g7+"%) sepia("+g8+"%) opacity("+g9+"%)" ;    	
    }
    function x1(){
    	g11 = Number(v1.value);
    	document.getElementById('sv1').innerHTML = g11 +"/100" ;
    	document.getElementById('mb').style.display = "block";
    	update2();    	
    }
    function x2(){
    	g12 = Number(v2.value);
    	document.getElementById('sv2').innerHTML = g12 +"/100";
    	document.getElementById('mb').style.display = "block";
    	update2();    	
    }
    function x3(){
    	g13 = Number(v3.value);
    	document.getElementById('sv3').innerHTML = g13 +"/100";
    	document.getElementById('mb').style.display = "block";
    	update2();    	
    }
    function x4(){
    	g14 = Number(v4.value);
    	document.getElementById('sv4').innerHTML = g14 +"/0";
    	document.getElementById('mb').style.display = "block";
    	update2();    	
    }
    function x5(){
    	g15 = Number(v5.value);
    	document.getElementById('sv5').innerHTML = g15 +"/0";
    	document.getElementById('mb').style.display = "block";
    	update2();    	
    }
    function x6(){
    	g16 = Number(v6.value);
    	document.getElementById('sv6').innerHTML = g16 +"/0";
    	document.getElementById('mb').style.display = "block";
    	update2();
    }
    function x7(){
    	g17 = Number(v7.value);
    	document.getElementById('sv7').innerHTML = g17 +"/0";
    	document.getElementById('mb').style.display = "block";
    	update2();
    }
    function x8(){
    	g18 = Number(v8.value);
    	document.getElementById('sv8').innerHTML = g18 +"/0";
    	document.getElementById('mb').style.display = "block";
    	update2();
    }
    function x9(){
    	g19 = Number(v9.value);
    	document.getElementById('sv9').innerHTML = v9.value +"/100";
    	update2();
    }
    function x10(){
    	document.getElementById('result_vid').style.width = v10.value+"%";
    	document.getElementById('sv10').innerHTML = v10.value+"%";
    }
    function x11(){
    	document.getElementById('result_vid').style.height = v11.value+"%";
    	document.getElementById('sv11').innerHTML = v11.value+"%";
    }
    function x12(){    	
    	document.getElementById('result_vid').style.top = (v12.value-100)+"%";
    	document.getElementById('sv12').innerHTML = v12.value+"%";
    }
    function x13(){    	
    	document.getElementById('result_vid').style.left = (v13.value-100)+"%";
    	document.getElementById('sv13').innerHTML = v13.value+"%";
    }
    function x14(){    	
    	document.getElementById('modified_video').style.backgroundSize =  (100/v14.value)+"% "+(100/v15.value)+"%";    	
    }
    function x15(){
    	document.getElementById('result_vid').style.transform =  'scale('+v16.value+','+v17.value+')';
    	document.getElementById('sv14').innerHTML = v16.value;
    	document.getElementById('sv15').innerHTML = v17.value;
    }
    function update2(){
    	gv.style.filter = "brightness("+g11+"%) contrast("+g12+"%) saturate("+g13+"%) grayscale("+g14+"%) blur("+g15+"px) hue-rotate("+g16+"deg) invert("+g17+"%) sepia("+g18+"%) opacity("+g19+"%)" ;
    	
    }
    function T_i(){
	if(document.getElementById('ti').checked){
    	document.getElementById('text-tool').style.display="block";
	document.getElementById('text1').style.display="block";
	document.getElementById('text2').style.display="block";
}
	else{
	document.getElementById('text-tool').style.display="none";
	document.getElementById('text1').style.display="none";
	document.getElementById('text2').style.display="none";
}
    	
    }
    function T_i2(){
	if(document.getElementById('ti2').checked){
    	document.getElementById('text-tool2').style.display="block";
	document.getElementById('text11').style.display="block";
	document.getElementById('text21').style.display="block";
}
	else{
	document.getElementById('text-tool2').style.display="none";
	document.getElementById('text11').style.display="none";
	document.getElementById('text21').style.display="none";
}
    	
    }
    function updateText(){
    	document.getElementById('text1').style.fontFamily = document.getElementById('myS').value ;
    	document.getElementById('text1').style.fontSize = document.getElementById('text-size').value+"em";
    	document.getElementById('text1').style.color = document.getElementById('text-color').value;
    	var cb = document.getElementById("cb");
    	if(!cb.checked){
    	document.getElementById('text1').style.backgroundColor = document.getElementById('text-color-b').value;
        document.getElementById('text2').style.backgroundColor = document.getElementById('text-color-b').value;}
    	document.getElementById('text2').style.fontFamily = document.getElementById('myS').value ;
    	document.getElementById('text2').style.fontSize = document.getElementById('text-size').value+"em";
    	document.getElementById('text2').style.color = document.getElementById('text-color').value;
    	
    }
    function updateText2(){
    	document.getElementById('text11').style.fontFamily = document.getElementById('myS2').value ;
    	document.getElementById('text11').style.fontSize = document.getElementById('text-size2').value+"em";
    	document.getElementById('text11').style.color = document.getElementById('text-color2').value;
    	var cb2 = document.getElementById("cb2");
    	if(!cb2.checked){
    	document.getElementById('text11').style.backgroundColor = document.getElementById('text-color-b2').value;
        document.getElementById('text21').style.backgroundColor = document.getElementById('text-color-b2').value;}
    	document.getElementById('text21').style.fontFamily = document.getElementById('myS2').value ;
    	document.getElementById('text21').style.fontSize = document.getElementById('text-size2').value+"em";
    	document.getElementById('text21').style.color = document.getElementById('text-color2').value;
    	
    }
 function updateSliderv(a1,a2,a3,a4,a5,a6,a7,a8,a9){
   i1.value = a1;
   v1.value = a1;
   g1 = g11 = a1;
   $('#s1').text(a1+'/100');
   $('#sv1').text(a1+'/100');
   i2.value = a2;
   v2.value = a2;
   g2 = g12 = a2;
   $('#s2').text(a2+'/100');
   $('#sv2').text(a2+'/100');
   i3.value = a3;
   v3.value = a3;
   g3 = g13 = a3;
   $('#s3').text(a3+'/100');
   $('#sv3').text(a3+'/100');
   i4.value = a4;
   v4.value = a4;
   g4 = g14 = a4;
   $('#s4').text(a4+'/0');
   $('#sv4').text(a4+'/0');
   i5.value = a5;
   v5.value = a5;
   g5 = g15 = a5;
   $('#s5').text(a5+'/0');
   $('#sv5').text(a5+'/0');
   i6.value = a6;
   v6.value = a6;
   g6 = g16 = a6;
   $('#s6').text(a6+'/0');
   $('#sv6').text(a6+'/0');
   i7.value = a7;
   v7.value = a7;
   g7 = g17 = a7;
   $('#s7').text(a7+'/0');
   $('#sv7').text(a7+'/0');
   i8.value = a8;
   v8.value = a8;
   g8 = g18 = a8;
   $('#s8').text(a8+'/0');
   $('#sv8').text(a8+'/0');
   i9.value = a9;
   v9.value = a9;
   g9 = g19 = a9;
   $('#s9').text(a9+'/100');
   $('#sv9').text(a9+'/100');
 }
  function change_b(e){
    if(e.checked){
    	document.getElementById("text1").style.backgroundColor="transparent";
    	document.getElementById("text2").style.backgroundColor="transparent";
    	document.getElementById("text21").style.backgroundColor="transparent";
    	document.getElementById("text11").style.backgroundColor="transparent";
    }
    else{
    	updateText();
    	updateText2();
    }
  }
     function Dwnload(){	 
     alert("currently! Downloading is not supported!\nstay tuned for update!But you can take screenshots for your purpose\nLinux:press shift+prtSc\nWindow:Press win+shift+s\nMac:command+shift+4 ");
 }
  function Dwnload2(){
     alert("currently! Downloading is not supported!\nstay tuned for update!");
     s_kk_p_e();
  }
