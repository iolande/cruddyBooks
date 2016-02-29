export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'books'], name: 'books', moduleId: 'screens/books/books', nav: true, title: 'Books' },
      { route: 'reviews', name: 'reviews', moduleId: 'screens/reviews/reviews', nav: true, title: 'Reviews' },
      { route: 'reader', name: 'reader', moduleId: 'screens/reader/about', nav: true, title: 'About reader' },
      { route: 'demos', name: 'demos', moduleId: 'screens/demos/demo-router', nav: true, title: 'Demos' }
    ]);
    this.router = router;
  }
}
