export class Champion {
  public name: string;
  public image: string;

  public constructor(defaults?: Partial<Champion>) {
    this.name = defaults?.name ?? 'Unknown';
    this.image = defaults?.image ?? 'https://ddragon.leagueoflegends.com/cdn/13.11.1/img/profileicon/0.png';
  }
}
