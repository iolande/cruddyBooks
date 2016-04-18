import {DemoRouter} from 'src/screens/demos/demo-router';

class RouterStub {
  configure(handler) {
    handler(this);
  }

  map(routes) {
    this.routes = routes;
  }
}

describe('DemoRouter', () => {
  var sut;
  var mockedRouter;

  beforeEach(() => {
    mockedRouter = new RouterStub();
    sut = new DemoRouter();
    sut.configureRouter(mockedRouter, mockedRouter);
  });

  it('contains a router property', () => {
    expect(sut.router).toBeDefined();
  });

  it('configures the router title', () => {
    expect(sut.router.title).toEqual('Demos');
  });

  it('should have a demos route', () => {
    expect(sut.router.routes).toContain({ route: ['', 'demos'], name: 'demos', moduleId: 'screens/demos/demo-index', nav: true, title: 'Demos' });
  });

  it('should have a panels route', () => {
    expect(sut.router.routes).toContain({ route: 'panels', name: 'panels', moduleId: 'screens/demos/demo-panels', nav: true, title: 'Panels' });
  });
});
