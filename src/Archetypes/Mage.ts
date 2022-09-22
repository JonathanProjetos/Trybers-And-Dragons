import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private _energyType: EnergyType;
  static archeTypeInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.archeTypeInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage.archeTypeInstances;
  }
}

export default Mage;