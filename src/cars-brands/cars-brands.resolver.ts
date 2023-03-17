import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { CarsBrandsService } from './cars-brands.service';
import { CarsBrand } from './entities/cars-brand.entity';
import { CreateCarsBrandInput, UpdateCarsBrandInput } from './dto/inputs';

@Resolver(() => CarsBrand)
export class CarsBrandsResolver {
  constructor(private readonly carsBrandsService: CarsBrandsService) {}

  @Mutation(() => CarsBrand)
  async createCarsBrand(
    @Args('createCarsBrandInput') createCarsBrandInput: CreateCarsBrandInput,
  ): Promise<CarsBrand> {
    return this.carsBrandsService.create(createCarsBrandInput);
  }

  @Query(() => [CarsBrand], { name: 'carsBrands' })
  async findAll(): Promise<CarsBrand[]> {
    return this.carsBrandsService.findAll();
  }

  @Query(() => CarsBrand, { name: 'carsBrand' })
  async findOne(
    @Args('id', { type: () => String }) id: string,
  ): Promise<CarsBrand> {
    return this.carsBrandsService.findOne(id);
  }

  @Mutation(() => CarsBrand)
  async updateCarsBrand(
    @Args('updateCarsBrandInput') updateCarsBrandInput: UpdateCarsBrandInput,
  ): Promise<CarsBrand> {
    return this.carsBrandsService.update(
      updateCarsBrandInput._id,
      updateCarsBrandInput,
    );
  }

  @Mutation(() => CarsBrand)
  removeCarsBrand(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<CarsBrand> {
    return this.carsBrandsService.remove(id);
  }
}
