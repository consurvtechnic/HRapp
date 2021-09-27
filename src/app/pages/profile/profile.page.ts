import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  back: boolean;
  displayUserData: any;

  constructor(private router: Router,
  private authService: AuthService, ) { }

  ngOnInit() {
    const data = this.router.url.split('/');
    console.log(data);
    if(data[1] == 'home') this.back = true;
    else this.back = false;
    this.authService.userData$.subscribe((res: any) => {
      this.displayUserData = res;
    })
  }

}
