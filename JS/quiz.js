function calculate_total_value()
{

	var total_questions = 10; // Общее число вопросов
	var max_answers = 5; // Максимальное число ответов на любой вопрос
	var result = 0; // Результат (начальное значение - ноль баллов)
	
	for(var i=1; i<=total_questions; i++) // Цикл по номерам вопросов
	{
		for(var j=1; j<=max_answers; j++) // Цикл по номерам ответов
		{
			if (document.getElementById('q'+i+'a'+j)) // Если существует вопрос с номером i и для него есть ответ с номером j
			{
				if(document.getElementById('q'+i+'a'+j).checked == true) // И если он отмечен пользователем
				{
					cur_result = parseInt(document.getElementById('q'+i+'a'+j).value, 10); // Привести значение выбранного ответа к численному типу 
					result += cur_result; // Прибавить значение выбранного ответа к результату
				}
			}
			else
			{
				break;
			}
		}
		
	}
	// Вывести результат
	document.getElementById('quiz-result').innerHTML = 'Ваш результат: '+ result + ' баллов.<br>';
}

