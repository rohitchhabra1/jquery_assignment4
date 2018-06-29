$(document).ready(function(){
	$("#btn").click(function(){
		$('div:first').append('<div class="browser"><input type="text" name=""><button>Browser</button><select><option>Secondary image</option></select><button onclick="$(this).parent().remove()">remove</button></div>');
	});
	
})

