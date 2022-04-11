import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

function skuValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return { invnulidSku: true };
  } else return {};
}

@Component({
  selector: 'app-demo-form-sku-with-builder',
  templateUrl: './demo-form-sku-with-builder.component.html',
  styles: []
})
export class DemoFormSkuWithBuilderComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      sku: ['', Validators.compose([Validators.required, skuValidator])]
    });

    this.myForm.controls['sku'].valueChanges.subscribe((value: string) => {
      console.log('sku changed to: ', value);
    });

    this.myForm.valueChanges.subscribe((value: string) => {
      console.log('form changed to: ', value);
    });
  }

  ngOnInit(): void {}

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }
}
