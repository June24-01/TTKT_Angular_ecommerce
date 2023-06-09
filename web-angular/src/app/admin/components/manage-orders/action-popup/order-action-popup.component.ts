import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Optional, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-action-popup',
  templateUrl: './order-action-popup.component.html',
  styleUrls: ['./order-action-popup.component.scss']
})
export class OrderActionPopupComponent implements OnInit {
  action:string;
  orderForm: FormGroup;
  order: any;
  status:any[] = [
    {value: 1, name : 'Chờ xác nhận'},
    {value: 2, name : 'Đang giao hàng'},
    {value: 3, name :'Đã giao hàng'}
  ];

  constructor(
    public dialogRef: MatDialogRef<OrderActionPopupComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) { 
    this.action = data.action;
    this.order = data;
  }

  ngOnInit() {
    this.orderForm = this.fb.group({
      idUser: [{value: '', disabled: true}],
      nameUser: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      address: ['', Validators.required],
      orderDate: [ {value: '', disabled: true}],
      totalprice: [{value: '', disabled: true}],
      status: [{value: ''}, Validators.required],
    })
    this.loadData();
  }

  loadData(): void {
    for (const controlName in this.orderForm.controls) {
      this.orderForm.controls[controlName].setValue(this.order[controlName]);
    }
  }

  //Selected status
  changeStatus(event){
    this.order.status = event.value;
  }

  update(){
    //Lấy giá trị từ các FormControl
    for(let controlName in this.orderForm.controls){
      this.order[controlName] = this.orderForm.controls[controlName].value;
    }
    this.dialogRef.close({event: this.action, data: this.order});
  }

  closeDialog(){
    this.dialogRef.close({event: 'cancel'});
  }

}
