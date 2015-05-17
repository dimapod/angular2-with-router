import { bootstrap } from 'angular2/angular2';
import { RootRouter } from 'angular2/src/router/router';
import { Pipeline } from 'angular2/src/router/pipeline';
import { bind } from 'angular2/di';
import { Router } from 'angular2/router';
//import { PipeRegistry } from 'angular2/change_detection';

import { Hello } from './hello';
//import { pipes } from './utils/pipes/pipes';
import {routerInjectables} from 'angular2/router'

//@Component({
//  selector: 'app'
//})
//@View({
//  templateUrl: 'app.html'
//})
//export class App {
//  constructor(router:Router) {
//    this.router = router;
//    router
//      .config('/home', Home)
//      .then((_) => router.config('/login', Login, 'login'))
//      .then((_) => router.config('/signup', Signup, 'signup'))
//      .then((_) => router.navigate('/home'))
//  }
//}


bootstrap(Hello, [
  routerInjectables    // instead of: bind(Router).toValue(new RootRouter(new Pipeline()))
//  bind(PipeRegistry).toValue(new PipeRegistry(pipes))
]);

