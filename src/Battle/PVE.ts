import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

class PVE extends Battle {
  private _monster: Fighter[] | SimpleFighter[];

  constructor(player: Fighter, monsters: SimpleFighter[]) {
    super(player);
    super.fight();
    this._monster = monsters;
  }

  fight(): number {
    this._monster.forEach((b) => {
      while (this.player.lifePoints > 0 && b.lifePoints > 0) {
        this.player.attack(b);
        b.attack(this.player);
      }
    });
    return super.fight();
  }
}

export default PVE;
