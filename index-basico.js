// esperar a que cargue el documento
document.addEventListener('DOMContentLoaded', function() {
    const title = document.getElementById('title');
    const description = document.getElementById('description');

    const table = document.getElementById('table');
    const alert = document.getElementById('alert');

    const btn = document.getElementById('add');

    let id = 1;

    function removeTodo(id) {
        document.getElementById(id).remove();
    }

    btn.onclick = addTodo;

    function addTodo() {







    }
});