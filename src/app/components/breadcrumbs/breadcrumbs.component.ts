import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../commons/services/auth.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.less']
})
export class BreadcrumbsComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}
}
