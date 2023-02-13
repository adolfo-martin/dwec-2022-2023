import { Component } from '@angular/core';

@Component({
    selector: 'property-binding',
    templateUrl: './property-binding.component.html',
    styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
    protected direccion: string = 'https://angular.io/'
    protected texto: string = 'Sitio web oficial del framework Angular';
    protected objetivo: string = '_blank';
}
