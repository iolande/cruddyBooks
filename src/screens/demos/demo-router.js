export class DemoRouter {
  configureRouter(config, router) {
    config.title = 'Demos';
    config.map([
      { route: ['', 'demos'], name: 'demos', moduleId: 'screens/demos/demo-index', nav: true, title: 'Demos' },
      { route: 'converters', name: 'converters', moduleId: 'screens/demos/demo-converters', nav: true, title: 'Value Converters' },
      { route: 'panels', name: 'panels', moduleId: 'screens/demos/demo-panels', nav: true, title: 'Panels' }
    ]);

    router.baseUrl = "demos";
    this.router = router;
  }
}
