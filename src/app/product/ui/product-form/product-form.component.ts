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
  productForm!: FormGroup;

  constructor(private readonly builder: FormBuilder) {
  }

  ngOnInit(): void {
    this.productForm = this.builder.group({
      productName: [null, [Validators.required, Validators.pattern(this.regex)]],
    });
  }


}
