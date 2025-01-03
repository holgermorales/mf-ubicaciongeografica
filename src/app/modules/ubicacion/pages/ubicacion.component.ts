import {Component, OnInit} from '@angular/core';
import {ProvinciaService} from '../../../core/services/provincia.service';
import {CantonService} from '../../../core/services/canton.service';
import {ParroquiaService} from '../../../core/services/parroquia.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent implements OnInit {

  provincias = [];
  cantones = [];
  parroquias = [];
  formUbicacionGroup: FormGroup = new FormGroup({});

  constructor(private provinciaService: ProvinciaService,
              private cantonService: CantonService,
              private parroquiaService: ParroquiaService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
    this.getProvincias();
  }

  initForm() {
    this.formUbicacionGroup = this.formBuilder.group({
      provincia: [null],
      canton: [null],
      parroquia: [null]
    })
  }

  getProvincias() {
    this.provincias = [];
    this.provinciaService.getProvincias().subscribe((response: any) => {
      this.provincias = response.data ?? [];
    });
  }

  getCantonesByCodigoProvincia() {
    this.cantones = [];
    this.parroquias = [];
    const codigoProvincia = 1;// provicia selected
    this.cantonService.getCantonesByCodigoProvincia(codigoProvincia).subscribe((response: any) => {
      this.cantones = response.data ?? [];
    });
  }

  getParrquiasByCodigoProvinciaAndCodigoCanton() {
    this.parroquias = [];
    const codigoProvincia = 1;// provicia selected
    const codigoCanton = 1;// canton selected
    this.parroquiaService.getParroquiasByCodigoProvinciaAndCodigoCanton(codigoProvincia, codigoCanton).subscribe((response: any) => {
      this.parroquias = response.data ?? [];
    });
  }
}
