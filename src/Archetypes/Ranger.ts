import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  static archeTypeInstances = 0;
    
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.archeTypeInstances += 1;
  }
    
  get energyType(): EnergyType {
    return this._energyType;
  }
    
  static createdArchetypeInstances(): number {
    return Ranger.archeTypeInstances;
  }
}

export default Ranger;