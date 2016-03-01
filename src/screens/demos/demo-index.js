export class DemoIndex {
  // configureRouter() {
  //   console.log('configureRouter');
  // }

  canActivate() {
    console.log('1. router lifecycle - canActivate');
  }

  activate() {
    console.log('2. router lifecycle - activate');
  }

  bind() {
    console.log('3. viewmodel lifecycle - bind');
  }

  attached() {
    console.log('4. viewmodel lifecycle - attached');
  }

  canDeactivate() {
    console.log('5. router lifecycle - canDeactivate');
  }

  deactivate() {
    console.log('6. router lifecycle - deactivate');
  }

  detached() {
    console.log('7. viewmodel lifecycle - detached');
  }

  unbind() {
    console.log('8. viewmodel lifecycle - unbind');
  }
}
