export class DemoRouter {
  configureRouter(config, router) {
    config.title = 'Demos';
    config.map([
      { route: ['', 'demos'], name: 'demos', moduleId: './demo-index', nav: true, title: 'Demos' }
    ]);

    router.baseUrl = "/demos"
    this.router = router;
  }
}
