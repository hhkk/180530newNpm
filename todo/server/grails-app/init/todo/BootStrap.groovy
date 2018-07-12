package todo

class BootStrap {

    def init = { servletContext ->
        2.times { new Todo(description: "Todo of 2 ${it+1}").save() }  // hbk
    }
    def destroy = {
    }
}
