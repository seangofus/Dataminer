# Dataminer
A lightweight, easy-to-use jQuery plugin to get all the data from a form and format it into an JSON object.

Dataminer makes it easy to take form values, turn them into JSON and POST them to a server using AJAX.

## How Do I Use Dataminer?
Include jQuery 1.7+ and dataminer.js in your layout.

```javascript
<script src="your/path/jquery.min.js"></script>
<script src="your/path/jquery.dataminer.js"></script>
```

Then in the standard jQuery $.ajax method you can target the form as the selector for the Dataminer function.

```javascript
<script>
  $(document).ready(function(){
    // Target the form that you wish to run the Dataminer on.
    $.ajax({
		type: 'POST',
		url: '/your/cool/script.php',
		dataType: 'json',
		data: $('#formid').dataMiner(),
		success: function( data ) {		
			if(data.errors != '')
	  		{
	  			alert('SUCCESS');
	  		}else{
	  			alert('FAIL!');
	  		}
		}
	});
  });
</script>
```

What Dataminer does when called is it takes the values enter in the form, and makes a JSON object from them using the 'name' attribute as the key.

```html
<form>
	<input type="text" name="firstInput" value="This is the first value" />
	<input type="text" name="secondInput" value="This is the second value" />
	<input type="text" name="thirdInput" value="This is the third value" />
	<input type="submit" value="SUBMIT" />
</form>
```
Upon submission the returned JSON object looks like this.

```javascript
{"firstInput":This is the first value,"secondInput":This is the second value,"thirdInput":This is the third value}
```

Dataminer makes it easy to POST JSON data on large forms with having to explicitly set it in the 'parameter'.

## Whats the catch?
The only catch is that Dataminer does not work with file inputs right now.  Sorry.

## Dataminer has options!
So you don't want to use the 'name' attribute as the key in you JSON object? No problem.  With Dataminer you can specify what attribute you do want to use.

```javascript
 $('#formid').dataMiner({customSelector:'id'});
  // This will now make the id attribute the key.
  
  $('#formid').dataMiner({customSelector:'class'});
  // This will now make the class attribute the key.
```

## Changelog
* _09.0 - v1 - 1kb_
	* Initial release

## Credits
[Sean Gofus](http://www.seangofus.com) | @seangofus
