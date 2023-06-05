import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'platform'
})
export class RoleSelectService {
  private readonly roles: Readonly<string[]> = [
    'bottom',
    'jungle',
    'middle',
    'support',
    'top'
  ];
  private readonly selected = new Set<string>;

  public random(): string {
    const available = this.roles.filter((role) => !this.selected.has(role));
    return available[Math.floor(Math.random() * available.length)];
  }

  public select(role: string): void {
    if (this.roles.some((aRole) => role === aRole) && !this.selected.has(role)) {
      this.selected.add(role);
    }
  }

  public release(role: string): void {
    if (this.roles.some((aRole) => role === aRole) && this.selected.has(role)) {
      this.selected.delete(role);
    }
  }
}
