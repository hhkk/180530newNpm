package todo


import grails.rest.*
import grails.converters.*

class TodoController extends RestfulController {
    static responseFormats = ['json', 'xml']
    TodoController() {
        super(Todo)
    }

    // had to remove //@Resource in Todo.groovy for this to work
    def pending() {
        respond Todo.findAllByDone(false), view: 'index'
    }


    // had to remove //@Resource in Todo.groovy for this to work but TodoController extends a rest thingy so ...  7
    // urlmappings        "/findall"(controller: 'todo', action: 'findall')
    // ~/utd/180501CAngSecAngular/todo>curl -i 0:8080/findall
    def findall() {

        System.out.println("in TodoController findall");

        respond Todo.findAll(), view: 'index'
    }





}
