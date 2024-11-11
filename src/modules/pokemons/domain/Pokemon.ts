import { AggregateRoot } from "@src/modules/shared/domain/AggregateRoot";
import { PokemonId } from "./value-object/PokemonId";
import { PokemonName } from "./value-object/PokemonName";

export interface Primitive {
    id: number
    name: string
}

export class Pokemon extends AggregateRoot<Primitive>{
    constructor(
        readonly id: PokemonId,
        readonly name: PokemonName,
    ){
        super()
    }

    static fromPrimitive({ id, name }: Primitive): Pokemon {
        return new Pokemon(
            new PokemonId(id),
            new PokemonName(name)
        )
    }

    toPrimitive(): Primitive {
        return {
            id: this.id.value,
            name: this.name.value
        }
    }
}