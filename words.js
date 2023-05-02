window.onload = function(argument) {
	String.fromCodePoint(128512)

	var moby = String.fromCodePoint(128151, 128512, 128514, 128523, 128525);
	//var moby = "anger a fear sadness disgust enjoyment happiness love relief contentment amusement joy pride excitement peace satisfaction lonely heartbroken gloomy disappointed hopeless grieved unhappy lost troubled resigned miserable worried doubtful nervous anxious terrified panicked horrified desperate confused stressed annoyed frustrated peeved contrary bitter infuriated irritated mad cheated vengeful insulted dislike revulsion loathing disapproving offended horrified uncomfortable nauseated disturbed withdrawn aversion";
	var words = {};
	var words_attr = [];
	string_handle(moby);

	var canvas = document.getElementById('c');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	if (canvas.getContext) {
		var c = canvas.getContext('2d'),
			w = canvas.width,
			h = canvas.height;

		c.strokeStyle = 'red';
		c.fillStyle = '255,255,0';
		//c.fillStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
		c.lineWidth = 5;

		function colorAssign(){
			var colorArray = ['#648FFF', '#785EF0', '#DC267F', '#FE6100', '#FFB000'];
			var colorRand = colorArray[Math.floor(Math.random()* 5)]; 
			return colorRand; 
		}
		
		// constructor
		Word = function(key) {
			this.text = key;
			this.x = Math.random() * w;
			this.y = Math.random() * h;
			this.font = words[key] * 50 + 'px arial'
			this.speed = (words[key]);
			//this.color = c.fillStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
			this.color = colorAssign(); 
		}
		for (key in words) {
			words_attr.push(new Word(key));
		}
		console.log(words_attr.length);

		function animation() {
			for (var i = 0; i < words_attr.length; i++) {
				c.font = words_attr[i].font;
				c.fillText(words_attr[i].text, words_attr[i].x, words_attr[i].y);
				words_attr[i].width = c.measureText(words_attr[i].text).width;
				c.fillStyle = words_attr[i].color; 
				c.stroke();
			}
			move();
		}

		function move() {
			for (var i = 0; i < words_attr.length; i++) {
				if (words_attr[i].x > w) {
					words_attr[i].x = -words_attr[i].width;
					words_attr[i].y = Math.random()*h;
				}else{
					words_attr[i].x += words_attr[i].speed;
				}
			}
		}

		setInterval(function() {
			c.clearRect(0,0,w,h);
			animation();
		},24);

	}

	function string_handle(str) {
    var lamda = 1;
		var word_array = str.split(" ");
    // Give each word a random occurance counrt
		for (var i = 0; i < word_array.length; i++) {
      var u = Math.random();
      occurance =  -Math.log(u)/(lamda);
      // Should set. this to the number of occurances of word
			words[word_array[i]] = occurance;
      console.log(occurance);
		}
		return words;
	}

}
