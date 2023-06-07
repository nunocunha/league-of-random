import {CommonModule} from '@angular/common';
import {Component, OnDestroy} from '@angular/core';

import {RoleSelectService} from './services/role-select/role-select.service';

@Component({
  selector: 'lr-role',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnDestroy {
  public readonly role: string;

  public constructor(private roles: RoleSelectService) {
    this.role = this.roles.random();
    this.roles.select(this.role);
  }

  public ngOnDestroy(): void {
    this.roles.release(this.role);
  }
}
