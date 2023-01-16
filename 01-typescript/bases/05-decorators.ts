export class NewPokemon {
  constructor(public readonly id: number, public name: string) {}

  scream() {
    console.log(`Bye!`);
  }

  speak() {
    console.log(`Bagh`);
  }
}

const MyDecorator = () => {
  return (target: Function) => {
    return NewPokemon;
  };
};

@MyDecorator()
export class Pokemon {
  constructor(public readonly id: number, public name: string) {}

  scream() {
    console.log(`Hello ${this.name}!!!`);
  }

  speak() {
    console.log(`Whats up`);
  }
}

export const charmander = new Pokemon(23, "Charmander");

charmander.scream();
charmander.speak();
