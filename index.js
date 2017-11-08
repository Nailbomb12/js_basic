
	var years = prompt ('Сколько вам лет?', '');
		if (years >= 18){
			var result = confirm('Вы готовы посетить сайт?');
				if (result){
					alert ('Ваш возраст ' + years)
				}
				else alert ('Досвидания!');
		}
		else 
			alert ('Маловато');