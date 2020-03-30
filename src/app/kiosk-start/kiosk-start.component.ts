import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-kiosk-start',
  templateUrl: './kiosk-start.component.html',
  styleUrls: ['./kiosk-start.component.css']
})
export class KioskStartComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}
  submitted = false;
  checkin() { this.submitted = true;
               this.router.navigate(['/checkin']); }

  ngOnInit(): void {
  }

}
