import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'two-ways-binding',
  templateUrl: './two-ways-binding.component.html',
  styleUrls: ['./two-ways-binding.component.css']
})
export class TwoWaysBindingComponent implements OnInit {

  nombre: string = 'tu nombre';

  constructor() { }

  ngOnInit(): void {
  }

}
