import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  static instance = 0;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.instance += 1;
  }

  static createdRacesInstances(): number {
    return Elf.instance;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;