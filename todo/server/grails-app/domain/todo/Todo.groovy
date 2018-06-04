package todo

import grails.rest.*

// hbk @Resource(uri = '/todos', readOnly = false, formats = ['json', 'xml'])
// @Resource(uri = '/todos', readOnly = false, formats = ['json', 'xml'])
class Todo {
    String description
    boolean done
}