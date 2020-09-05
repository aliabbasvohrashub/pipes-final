import { Component, OnInit } from '@angular/core';
import { FormsDataService } from '../forms-data.service';
import { countries, states, cities } from '../country';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-cascade-dropdowns',
  templateUrl: './cascade-dropdowns.component.html',
  styleUrls: ['./cascade-dropdowns.component.css']
})
export class CascadeDropdownsComponent implements OnInit {
  SelectedCountryId: string = "0";
  SelectedStateId: string = "0";
  SelectedCityId: string = "0";
  CountryList: countries[];
  StateList: states[];
  CityList: cities[];
  FormStudent: FormGroup;

  constructor(private fb: FormBuilder, private formService: FormsDataService) { }


  get g() {
    return this.FormStudent;
  }

  get f() {
    return this.FormStudent.controls;
  }

  ngOnInit() {
    this.FormStudent = this.fb.group({
      StudentName: ['', Validators.required],
      Country: ["", Validators.required],
      State: ["", Validators.required],
      City: ["", Validators.required]
    });
    this.CountryList = this.formService.GetCountries();
  }
  CountryChanged() {
    this.StateList = this.formService.GetStates(this.f.Country.value);
  }

  StateChanged() {
    this.CityList = this.formService.GetCities(this.f.State.value);
  }

  submit() {
    console.log(this.FormStudent.value);
  }

}
