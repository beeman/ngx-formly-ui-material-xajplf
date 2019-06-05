import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'my-app',
  template: `
    <h1>@ngx-formly/material</h1>
    <form role="form" novalidate [formGroup]="form" (ngSubmit)="submit()">
      <formly-form [model]="model" [fields]="fields" [form]="form">
        <button type="submit" color="primary" [disabled]="!form.valid" mat-raised-button>Submit</button>
      </formly-form>
    </form>
    <h3>Form valid: {{ form.valid }}</h3>
    <pre>{{ model | json }}</pre>
    <p>The form is considered valid because the value of the 'color' property
    is set. However, the initial value of the 'color' property does not
    match any of the valid options. </p>

    <p>It would be nice to have an advanced 'required' check that
    verifies if the value of the property is actually in the list of
    options</p>
  `,
})
export class AppComponent {
  form = new FormGroup({});
  model = { color: 'green' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'color',
      type: 'select',
      templateOptions: {
        required: true,
        label: 'Color',
        options: [
          { value: 'blue', label: 'Blue' },
          { value: 'red', label: 'Red' },
        ]
      }
    },
  ];

  submit() {
    console.log(this.model);
  }
}