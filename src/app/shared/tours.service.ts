import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  constructor(private firebase: AngularFireDatabase) { }
  toursList: AngularFireList<any>;
  form = new FormGroup({
    $key: new FormControl(null),
    dest: new FormControl('', Validators.required),
    hotel: new FormControl(''),
    night: new FormControl('', [Validators.required, Validators.minLength(1)]),
    price: new FormControl(''),
    plus: new FormControl(''),
    image: new FormControl('')
  });
  getTours() {
    this.toursList = this.firebase.list('tours');
    return this.toursList.snapshotChanges();
  }
  insertTours(tours) {
    this.toursList.push({
      image: tours.image,
      dest: tours.dest,
      hotel: tours.hotel,
      night: tours.night,
      price: tours.price,
      plus: tours.plus
    });
  }
  populateForm(tours){
    this.form.setValue(tours);
  }
  updateTours(tours){
    this.toursList.update(tours.$key,{
      image: tours.image,
      dest: tours.dest,
      hotel: tours.hotel,
      night: tours.night,
      price: tours.price,
      plus: tours.plus
    });
  }
  
deleteTours($key: string){
  this.toursList.remove($key);
}
}