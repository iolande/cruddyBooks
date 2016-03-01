export class DemoIndex {
  // configureRouter(config, router) {
  //   console.log('configureRouter');
  // }

  // https://www.danyow.net/inversion-of-control-with-aurelia-part-1/

  canActivate(params, routeConfig, navigationInstruction) {
    console.group('1. canActivate');
    console.log('router lifecycle');
    console.log('args: params, routeConfig, navigationInstruction');
    console.log(params);
    console.log(routeConfig);
    console.log(navigationInstruction);
    console.groupEnd();
  }

  activate(params, routeConfig, navigationInstruction) {
    console.group('2. activate');
    console.log('router lifecycle');
    console.log('args: params, routeConfig, navigationInstruction');
    console.log(params);
    console.log(routeConfig);
    console.log(navigationInstruction);
    console.groupEnd();
  }

  created(view) {
    console.group('3. created');
    console.log('viewmodel lifecycle');
    console.log(view);
    console.groupEnd();
  }

  bind(bindingcontext) {
    console.group('4. bind');
    console.log('viewmodel lifecycle');
    console.log(bindingcontext);
    console.groupEnd();
  }

  attached() {
    console.group('5. attached');
    console.log('viewmodel lifecycle');
    console.groupEnd();
  }

  canDeactivate() {
    console.group('6. canDeactivate');
    console.log('router lifecycle');
    console.groupEnd();
  }

  deactivate() {
    console.group('7. deactivate');
    console.log('router lifecycle');
    console.groupEnd();
  }

  detached() {
    console.group('8. detached');
    console.log('viewmodel lifecycle');
    console.groupEnd();
  }

  unbind() {
    console.group('9. unbind');
    console.log('viewmodel lifecycle');
    console.groupEnd();
  }
}
