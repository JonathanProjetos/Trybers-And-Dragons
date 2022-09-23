import Monster from './Monster';
import { SimpleFighter } from './Fighter';

class Dragon extends Monster {
  protected _lifePoints: number;
  protected _strength: number;

  constructor() {
    super();
    this._lifePoints = 999;
    this._strength = 63;
  }

  get lifePoints():number {
    return this._lifePoints;
  }

  get strength():number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._lifePoints;
    
    if (damage > 0) {
      this._lifePoints -= damage;
    }

    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }
}

export default Dragon;
