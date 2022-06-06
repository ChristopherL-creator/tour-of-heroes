import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root', // può essere chiamato come tag
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  //  prima di dichiarare proprietà in this, le devo dichiare in cima
  title: string = 'Lista studenti';
  //metto quadre dopo stringa per indicare che è array
  // students: string[] = ['pippo', 'pluto', 'paperina', 'minnie', 'paperone', 'topolino', 'gastone']
  students2: any[] = [// array di oggetti studente generici
  {
    name: 'pippo',
    grade: 10
  },
  {
    name: 'pluto',
    grade: 6
  },
  {
    name: 'paperina',
    grade: 7
  },
  {
    name: 'paperone',
    grade: 3
  },
  {
    name: 'minnie',
    grade: 4
  }
]


  constructor(){

  }

  ngOnInit(){ // carica tutto l'interfaccia dell'app
    // const container = document.getElementById('app-container'); //  typescrupt non sa se esista container, e ti chiede di confermarlo
    // const h1 = document.createElement('h1');
    // const node = document.createTextNode(this.title);

    // h1.appendChild(node);
    // container?.appendChild(h1); //  ma se container fosse undefined? ci mette punto interrogativo, così che esegua comando solo se container esiste

    // const ul = document.createElement('ul');
    // for (const item of this.students) {
    //   const li = document.createElement('li');
    //   const node = document.createTextNode(item);

    //   li.appendChild(node);
    //   ul.appendChild(li);
    // }

    // container?.appendChild(ul);
  }
}
