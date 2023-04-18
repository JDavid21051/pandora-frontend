import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  regex = '[a-zA-Z0-9áéíóúÁÉÍÓÚ -]{3,250}';

  // data
  productForm: FormGroup;

  constructor(private readonly builder: FormBuilder) {
    this.productForm = builder.group({
      name: [null, [Validators.required, Validators.pattern(this.regex)]],
      /*price: [null],
      count: [null],
      description: [null]*/
    })
  }

  ngOnInit(): void {
  }


}
