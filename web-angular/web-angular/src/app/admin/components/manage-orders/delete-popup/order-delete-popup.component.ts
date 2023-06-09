import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Optional, Inject } from '@angular/core';

@Component({
  selector: 'app-order-delete-popup',
  templateUrl: './order-delete-popup.component.html',
  styleUrls: ['./order-delete-popup.component.scss']
})
export class OrderDeletePopupComponent implements OnInit {
  action: string;
  local_data:any;

  constructor(
    public dialogRef: MatDialogRef<OrderDeletePopupComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.local_data = data;
    this.action = data.action;
  }

  ngOnInit() {
  }

  //Click vào xóa
  doAction(){
    this.dialogRef.close({event: this.action, data: this.local_data});
  }

  //Click vào bỏ qua
  closeDialog(){
    this.dialogRef.close({event:'cancel'});
  }
}
