package todo

class BootStrap {

    def init = { servletContext ->
        2.times { new Todo(description: "from /Users/hkon/utd/180530newNpm/todo/server/grails-app/init/todo/BootStrap.groovy Todo of 2 ${it+1}").save() }  // hbk
    }
    def destroy = {
    }
}
