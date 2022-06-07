import{Component} from '@angular/core'

@Component({
    selector:'app-contador',
    template: `
        <br>
        {{title}}
        <br>
        <hr>
        <br>
        
        <br>
        <button (click)="numero = numero + 1"> +1 </button>
        {{numero}}
        <button (click)="numero = numero - 1"> -1 </button>
    `
})

export class ContadorComponent {

    title = 'Curso Angular Udemy compo';

    numero:number=0;
  


}