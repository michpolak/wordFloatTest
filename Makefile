# MakeFile to deploy word cloud
# sudo mkdir /var/www/html/wordFloat
# sudo chown ubuntu /var/www/html/wordFloat
all: PutHTML

PutHTML:
	cp words.html /var/www/html/wordFloat/
	cp words.css /var/www/html/wordFloat/
	cp words.js /var/www/html/wordFloat/

	echo "Current contents of your HTML directory: "
	ls -l /var/www/html/wordFloat/
