import { Component } from '@angular/core';
import { merge, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  defaultImage = '../assets/loader.gif';
  image1 =
    'https://images.unsplash.com/photo-1422004707501-e8dad229e17a?fm=jpg';
  image2 =
    'https://images.unsplash.com/photo-1439931444800-9bcc83f804a6?fm=jpg';
  image3 =
    'https://images.unsplash.com/photo-1417128281290-30a42da46277?fm=jpg';

}
