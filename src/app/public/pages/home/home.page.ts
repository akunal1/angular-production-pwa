import { Component, OnInit } from '@angular/core';
import { Path } from '@app/@core/enums';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  path = Path;

  constructor() {}

  ngOnInit(): void {}
}
