export class Earning {
  private id: number = 0;
  private name: string = "";
  private isPublic: boolean = true;

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getIsPublic(): boolean {
    return this.isPublic;
  }
}