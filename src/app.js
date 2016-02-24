export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'books'], name: 'books', moduleId: 'screens/books/books', nav: true, title: 'Books' },
      { route: 'reviews', name: 'reviews', moduleId: 'screens/reviews/reviews', nav: true, title: 'Reviews' }
    ]);

    this.router = router;
  }
}
