export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'books'], name: 'books', moduleId: 'screens/books/books', nav: true, title: 'Books' },
      { route: 'demos', name: 'demos', moduleId: 'screens/demos/demo-router', nav: true, title: 'Demos' }
    ]);
    this.router = router;
  }
}
