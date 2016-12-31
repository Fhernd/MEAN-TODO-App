import {
    Injectable
} from '@angular/core';
import {
    Http,
    Headers
} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {
    constructor(private http: Http) { }

    getTodos() {
        return this.http.get('http://localhost:3000/api/v1/todos');
    }

    saveTodo(todo) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post('http://localhost:3000/api/v1/todo', JSON.stringify(todo), { headers: headers })
            .map(res => res.json());
    }

    updateTodo(todo){
        var headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.put('http://localhost:3000/api/v1/todo/'+todo._id, JSON.stringify(todo),{headers: headers});
    }

    deleteTodo(id){
        return this.http.delete('http://localhost:3000/api/v1/todo/' + id);
    }
}