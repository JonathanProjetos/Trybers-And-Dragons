abstract class Race {
  private readonly _name: string;
  private readonly _dexterity: number;

  constructor(name:string, dexterity: number) {
    this._dexterity = dexterity;
    this._name = name;
  }

  static createdRacesInstances():number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints():number; 

  public get name():string {
    return this.name;
  }

  public get dexterity():number {
    return this.dexterity;
  }
}

export default Race;