package todo

class BootStrap {

    def init = { servletContext ->
        50.times { new Todo(description: "Todo ${it+1}").save() }
    }
    def destroy = {
    }
}
