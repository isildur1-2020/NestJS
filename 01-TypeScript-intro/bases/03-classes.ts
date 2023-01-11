import {
  PokeApiAdater,
  PokeApiFetchAdapter,
  HttpAdapter,
} from "../api/pokeApi.adapter";
import {
  PokeAPIResponse,
  Move,
} from "../interfaces/pokeapi-response.interface";

export class API {
  static BASE_URL = "https://pokemon.com";
}

export class Pokemon {
  get imageUrl(): string {
    return `${API.BASE_URL}/${this.id}.jpg`;
  }

  constructor(
    public readonly id: number,
    public readonly name: string,
    public age: number,
    private readonly http: HttpAdapter
  ) {}

  public attack = () => {
    console.log("Attacking!".toUpperCase());
  };

  async getMoves(): Promise<Move[]> {
    const URL = `https://pokeapi.co/api/v2/pokemon/4`;
    const data = await this.http.get<PokeAPIResponse>(URL);
    return data.moves;
  }
}

export async function main() {
  const pokeApi = new PokeApiAdater();
  const pokeApiFetch = new PokeApiFetchAdapter();
  const charmander = new Pokemon(1, "Charmander", 34, pokeApi);
  console.log(await charmander.getMoves());
}
