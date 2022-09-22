import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  static instance = 0;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.instance += 1;
  }

  static createdRacesInstances():number {
    return Dwarf.instance;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

// const test = new Dwarf('ola', 2);

export default Dwarf;   