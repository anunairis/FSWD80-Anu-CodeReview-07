import { Component, OnInit } from '@angular/core';
import { ToursService } from "../shared/tours.service";

@Component({
  selector: 'tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {


  constructor(private toursService: ToursService) { }
  submitted: boolean;
  formControls = this.toursService.form.controls;
  showSuccessMessage: boolean;

  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
    if (this.toursService.form.valid) {
      if (this.toursService.form.get("$key").value == null)
        this.toursService.insertTours(this.toursService.form.value);
      else
        this.toursService.updateTours(this.toursService.form.value);
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000);
      this.submitted = false;
      this.toursService.form.reset();


    }
  }
}
