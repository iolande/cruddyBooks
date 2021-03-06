import {App} from 'src/app';

class RouterStub {
  configure(handler) {
    handler(this);
  }

  map(routes) {
    this.routes = routes;
  }
}

describe('the App module', () => {
  var sut;
  var mockedRouter;

  beforeEach(() => {
    mockedRouter = new RouterStub();
    sut = new App();
    sut.configureRouter(mockedRouter, mockedRouter);
  });

  it('contains a router property', () => {
    expect(sut.router).toBeDefined();
  });

  it('configures the router title', () => {
    expect(sut.router.title).toEqual('Aurelia');
  });

  it('should have a books route', () => {
    expect(sut.router.routes).toContain({ route: ['', 'books'], name: 'books', moduleId: 'screens/books/books', nav: true, title: 'Books' });
  });

  it('should have a demos route', () => {
    expect(sut.router.routes).toContain({ route: 'demos', name: 'demos', moduleId: 'screens/demos/demo-router', nav: true, title: 'Demos' });
  });
});
