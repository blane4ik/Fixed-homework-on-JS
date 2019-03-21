(function () {
    /**
	 * Хранение элементов списка
     * @type {Array}
     */
	let todos = [];

    /**
	 * Конструктор для элементов списка
     * @param todo
     * @constructor
     */
	function TodoObject (todo) {
		this.todo = todo;
		this.check = false;
	};

	const addButton = document.getElementById('add');
	const deleteSelectedButton = document.getElementById('delete');

    /**
	 * Добаленик элемента списка
	 * @function addTodo
     */
	let addTodo = () => {

        /**
		 * Получение значения элемента списка
		 * @constant
		 * @type {HTMLElement}
         */
		const taskText = document.getElementById('newTask').value;
		const newTask = new TodoObject(taskText);

        /**
		 * Создание элемента списка
		 * @constant
         * @type {HTMLElement}
         */
		const todoElement = document.getElementById('todoElement');
		const li = document.createElement('li');
		li.className = 'li';

        /**
		 * Создание checkbox для элемента списка
		 * @constant
         * @type {HTMLElement}
         */
		const checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		checkbox.className = 'checkbox';

        /**
		 * Создание кнопки удаления для элемента списка
		 * @constant
         * @type {HTMLElement}
         */
		const clear = document.createElement('span');
		clear.id = 'delete-ico'
		const clearIcon = document.createTextNode('[X]');

        /**
		 * Добавление объекта списка {newTask} в массив{todos}
		 * Стирание значения input
         */
		todos.push(newTask);
		document.getElementById('newTask').value = '';

        /**
		 * Присваивание свойству {newTask.check} значения checkbox
         */
		checkbox.oninput = () => {
			if (checkbox.checked == true){
				newTask.check = true;
			}
		}

        /**
		 * Присоединение checkbox к элементу списка
         */
		li.appendChild(checkbox);

        /**
		 * Присоединение кнопки удаления к элементу списка
         */
		clear.appendChild(clearIcon);

        /**
		 * Присваивание значения input элементу списка
         */
		for (let i = 0; i < todos.length; i++){
			var textNode = document.createTextNode(todos[i].todo);
		};
		li.appendChild(textNode);
		console.log(todos);
		li.appendChild(clear);
		todoElement.appendChild(li);

        /**
		 * Удаление элемента по клику на кнопку удаления
         */
		clear.addEventListener('click', () => {
		li.remove();
		});
	};

	addButton.addEventListener('click', addTodo);

    /**
	 * Множественное удаление элементов
	 * @function deleteSelected
     */
	let deleteSelected = () => {
		// Получение всех значений списка
		const allLiElements = document.querySelectorAll('.li');
		const arr = [...allLiElements];

		[...todos].forEach((todo, i) => {
			if (todo.check == true){
				todos.splice(i, 1);
				arr[i] && arr[i].remove();
			} 
		})
	};

	deleteSelectedButton.addEventListener('click', deleteSelected);
}) ();