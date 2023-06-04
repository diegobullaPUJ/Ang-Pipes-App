import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Diego';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeSindy(): void {
    this.name = 'Sindy';
    this.gender = 'female';
  }

  changeDiego(): void {
    this.name = 'Diego';
    this.gender = 'male';
  }

  // i18nPlural y slice
  public clients: string[] = ['Maria','Pedro','Fernando','Juan David','Diego'];
  public clientsMap = {
    '=0': 'No tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  deleteClient():void {
    this.clients.shift();
  }

  //KeyValue

  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa , Canada'
  }

  //Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap( value => console.log('tap:', value) ),
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject)=> {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa.' );
    }, 3500);
  })


}
