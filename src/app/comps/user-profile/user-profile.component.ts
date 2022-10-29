import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { MatTableDataSource } from '@angular/material/table';

export interface user {
  UserProfileId: number
  Name: string;
  Address: string;
  EmailId: string;
  Phone:string;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {  
  dataSource:any;
  
  displayedColumns: string[] = ['Name', 'Address', 'EmailId']

  constructor(private service:UserProfileService) {}

  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      console.log('Result:', data)
      this.dataSource = new MatTableDataSource<user>(data as user[])
    })     
  }
}
