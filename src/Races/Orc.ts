import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  static instance = 0;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.instance += 1;
  }

  static createdRacesInstances(): number {
    return Orc.instance;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;