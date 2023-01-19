import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/SERVICES/seller.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  // showLogin=false;
  // authError:String='';
  constructor(private seller:SellerService,private router:Router) { }

  ngOnInit(): void {
  }
  signUp(data:object):void{
    console.log(data)
    this.seller.userSignUp(data).subscribe((result)=>{
      // console.log(result)
      if(result){
        this.router.navigate((['seller-home']))
      }

    });

  }

}
