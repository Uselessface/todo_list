function onPageLoaded() {
    const input = document.querySelector("input[type='text']");
    const ul = document.querySelector("ul.to_do");
    const addBtn = document.querySelector("button.add_btn");
    const clearButton = document.querySelector("button.delete_all");
    const doneAll = document.querySelector("button.done_all");


        function createTodo() {
	        const li = document.createElement("li");
	        const textSpan = document.createElement("span");
	        textSpan.classList.add("what_todo");
	        const newTodo = input.value;
	        textSpan.append(newTodo);

	        const doneBtn = document.createElement("button");
	        doneBtn.innerHTML = 'Выполнить';
        	doneBtn.classList.add("done");

	        const deleteBtn = document.createElement("button");
	        deleteBtn.innerHTML = 'Удалить';
        	deleteBtn.classList.add("delete");

        	ul.appendChild(li).append(textSpan, doneBtn, deleteBtn);
        	input.value = "";
        	listenDoneTodo(doneBtn)
        	listenDeleteTodo(deleteBtn);
        }



        function listenDeleteTodo(element) {
	        element.addEventListener("click", (event) => {
	            element.parentElement.remove();
	            event.stopPropagation();
	        });

        }

        function listenDoneTodo(element) {
	        element.addEventListener("click", (event) => {
	            element.parentElement.classList.add("checked");
	            element.innerHTML = "Выполнено";
	            event.stopPropagation();
	        });

        }

        input.addEventListener("keypress", (keyPressed) => {
        	const keyEnter = 13;
        	if (keyPressed.which == keyEnter) {
            	createTodo();
        	}	
        }); 


        addBtn.onclick = function () {
        	createTodo();
        }

        clearButton.onclick = function () {
        	ul.innerHTML = "";
       		localStorage.removeItem("to_do", ul.innerHTML);
    	}

    	doneAll.onclick = function () {
    		const spans = document.getElementsByClassName("what_todo");
    		for (var i = 0; i < spans.length; i++) {
    			spans[i].classList.add("checked");
			}		
    		doneAll.innerHTML = "Выполнены все задания";
    	}
	 
}



document.addEventListener("DOMContentLoaded", onPageLoaded);