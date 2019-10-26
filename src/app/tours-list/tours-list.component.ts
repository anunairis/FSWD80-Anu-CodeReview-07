import { Component, OnInit } from '@angular/core';
import { ToursService } from "../shared/tours.service";
@Component({
  selector: 'tours-list',
  templateUrl: './tours-list.component.html',
  styleUrls: ['./tours-list.component.css']
})
export class ToursListComponent implements OnInit {
  toursArray = [];
  showDeletedMessage: boolean;
  searchText: string = "";



  constructor(private toursService: ToursService) { }

  ngOnInit() {
    this.toursService.getTours().subscribe(
      (list) => {
        this.toursArray = list.map((item) => {
          return {
            $key: item.key,
            ...item.payload.val()
          }
        })
      });

  }
  onDelete($key) {
    if (confirm("Are you sure you want to delete this record?")) {
      this.toursService.deleteTours($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000)
    }
  }

  filterCondition(tours) {
    return tours.plus.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ||
    tours.dest.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ||
    tours.night.indexOf(this.searchText) != -1 ||
    tours.hotel.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ||
    tours.price.indexOf(this.searchText) != -1 ||
    tours.image.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 

}

}

