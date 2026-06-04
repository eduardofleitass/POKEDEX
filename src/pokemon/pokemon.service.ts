import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from './entities/pokemon.entity';
import { Model, isValidObjectId  } from 'mongoose';
import { error } from 'console';

@Injectable()
export class PokemonService {
  constructor(
  @InjectModel(Pokemon.name)
  private readonly pokemonModel: Model<Pokemon>,
) {}
async create(createPokemonDto: CreatePokemonDto) {
  createPokemonDto.name = createPokemonDto.name.toLocaleLowerCase();
  try{
  const pokemon = await this.pokemonModel.create(createPokemonDto);

  return pokemon;

  }catch (error){
    this.handleExceptions(error);
  }
}
  findAll() {
    return `This action returns all pokemon`;
  }

  async findOne(term: string) {
    let pokemon:Pokemon | null= null;
    //ID
    if ( !isNaN(+term) ){
      pokemon = await this.pokemonModel.findOne({ no: +term })
    }
    //Mongo ID
      if ( !pokemon && isValidObjectId (term)){
    pokemon = await this.pokemonModel.findById (term);
  }
    //Name
      if (!pokemon){
        pokemon = await this.pokemonModel.findOne({name: term.toLocaleLowerCase()});
      }
    if(!pokemon) throw new NotFoundException(`Pokemon with id , name or no ${"not found"}`)
    return pokemon; 

  }
  //MongoID


    //Actualizar pokemon
  async update(term: string, updatePokemonDto: UpdatePokemonDto) {

    const pokemon= await this.findOne(term);
    if (updatePokemonDto.name){
      updatePokemonDto.name= updatePokemonDto.name.toLocaleLowerCase();
    } try{
      await pokemon.updateOne(updatePokemonDto)
      return {...pokemon.toJSON(),...updatePokemonDto};
    } catch (error: any){ //logica para capturar errores pero llamada a travez del handleExceptions
        this.handleExceptions(error);
      }
      return `This action updates a #${term} pokemon`;
  }

    //Para borrar Pokemones
  async remove(id: string) {
    const pokemon = await this.findOne(id);
    await pokemon.deleteOne();
  }
  private handleExceptions(error : any){ // metodo para capturar errores y lanzar el mensaje de error al usuario
      if ( error.code === 11000){
        throw new BadRequestException (`Can't Update, this register exists in db ${JSON.stringify(error.keyValue)}`)
      }
      console.log(error);
      throw new InternalServerErrorException(`Can't create Pokemon - Check server logs`)
  }

}
