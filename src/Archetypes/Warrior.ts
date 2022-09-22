import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  static archeTypeInstances = 0;
      
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.archeTypeInstances += 1;
  }
      
  get energyType(): EnergyType {
    return this._energyType;
  }
      
  static createdArchetypeInstances(): number {
    return Warrior.archeTypeInstances;
  }
}

export default Warrior;