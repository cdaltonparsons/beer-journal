export class Beer {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public brewery: string,
    public imageUrl?: string,
    public abv?: number,
    public ibu?: number,
    public rating?: number,
  ) {}
}
