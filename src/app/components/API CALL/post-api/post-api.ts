import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule],
  templateUrl: './post-api.html',
  styleUrl: './post-api.css',
})
export class PostAPI {
  carList: any[] = [];
  carObj: any = {
    CarId: 0,
    Brand: ' ',
    Model: ' ',
    Year: ' ',
    Color: ' ',
    DailyRate: ' ',
    CarImage: '',
    RegNo: ' ',
  };
  http = inject(HttpClient);

  getAllCars() {
    this.http
      .get('https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars')
      .subscribe((res: any) => {
        this.carList = res.data;
      })
  }

  onSaveCar() {
    debugger;
    this.http
      .post('https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCar', this.carObj)
      .subscribe((res: any) => {
        debugger;
        if (res.result) {
          alert('Car Created Successfully');
        } else {
          alert(res.message);
        }
      })
  }

  onEdit(data: any) {
    this.carObj = data;
  }

  updateCar() {
    this.http
      .put('https://freeapi.miniprojectideas.com/api/CarRentalApp/UpdateCar', this.carObj)
      .subscribe((res: any) => {
        if (res.result) {
          alert('Car Updated Successfully');
        } else {
          alert(res.message);
        }
      })
  }

  onDelete(id: number) {
    const isDelete = confirm('Are you sure to delete this?');
    if (isDelete == true) {
      this.http
        .delete(
          'https://freeapi.miniprojectideas.com/api/CarRentalApp/DeleteCarbyCarId?cardid=' + id,
        )
        .subscribe((res: any) => {
          if (res.result) {
            alert('Car Deleted Successfully');
          } else {
            alert(res.message);
          }
        })
    }
  }
}
