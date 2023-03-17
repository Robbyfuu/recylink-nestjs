import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { ModelsCarsService } from './models-cars.service';
import { ModelsCar } from './entities/models-car.entity';
import { CreateModelsCarInput, UpdateModelsCarInput } from './dto/inputs';

@Resolver(() => ModelsCar)
export class ModelsCarsResolver {
  constructor(private readonly modelsCarsService: ModelsCarsService) {}

  @Mutation(() => ModelsCar)
  async createModelsCar(
    @Args('createModelsCarInput') createModelsCarInput: CreateModelsCarInput,
  ): Promise<ModelsCar> {
    return this.modelsCarsService.create(createModelsCarInput);
  }

  @Query(() => [ModelsCar], { name: 'modelsCars' })
  async findAll(): Promise<ModelsCar[]> {
    return this.modelsCarsService.findAll();
  }

  @Query(() => ModelsCar, { name: 'modelsCar' })
  findOne(@Args('id', { type: () => String }) id: string): Promise<ModelsCar> {
    return this.modelsCarsService.findOne(id);
  }

  @Mutation(() => ModelsCar)
  updateModelsCar(
    @Args('updateModelsCarInput') updateModelsCarInput: UpdateModelsCarInput,
  ): Promise<ModelsCar> {
    return this.modelsCarsService.update(
      updateModelsCarInput._id,
      updateModelsCarInput,
    );
  }

  @Mutation(() => ModelsCar)
  removeModelsCar(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<ModelsCar> {
    return this.modelsCarsService.remove(id);
  }
}
