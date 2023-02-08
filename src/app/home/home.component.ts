import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public formulario!: FormGroup;
  public visualizarFormulario: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
      this.formulario = this.fb.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', Validators.required],
      });
  }

  onSubmit() {
      console.log(this.formulario.value);
  }

  onRegistrarse() {
      console.log('registrando');
  }

}
