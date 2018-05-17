import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CarroService } from "../services/carro.service";

@Component({
  selector: 'app-cadastro-carros',
  templateUrl: './cadastro-carros.component.html',
  styleUrls: ['./cadastro-carros.component.css']
})
export class CadastroCarrosComponent implements OnInit {
   formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder , private carrosServ: CarroService) {
    this.formcarros();
   }

  ngOnInit() {
  }

cadastrar() {
  this.carrosServ.insert(this.formGroup.value)
  .subscribe(response =>{
    alert("cadastro realizado com sucesso")
    this.formcarros();

  }, error => {
    alert("erro ao cadastrar!")
  })
 }
 formcarros(){
  this.formGroup = this.formBuilder.group({
       id: ['', [Validators.required]],
       modelo: ['', [Validators.required]],
       marca: ['', [Validators.required]],
       ano: ['', [Validators.required]],
       preco: ['', [Validators.required]]
})
}
}