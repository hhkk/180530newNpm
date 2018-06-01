package todo

import grails.testing.gorm.DomainUnitTest
import spock.lang.Specification

class TodoSpec extends Specification implements DomainUnitTest<Todo> {
// hbk
    def setup() {
    }

    def cleanup() {
    }

    void "test something"() {
        expect:"fix me"
        true == false
    }
}
