import { Ng2ProjectPage } from './app.po';

describe('ng2-project App', function() {
  let page: Ng2ProjectPage;

  beforeEach(() => {
    page = new Ng2ProjectPage();
  });

  it('should have the correct title', () => {
    page.navigateTo();
    expect(page.getHeading()).toEqual('4Welcome to Grails');
    expect(page.getTitle()).toEqual('5Welcome to Grails');
  });
});
