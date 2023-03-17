import { Module } from '@nestjs/common';
import { ModelsCarsService } from './models-cars.service';
import { ModelsCarsResolver } from './models-cars.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { ModelsCar, ModelsCarSchema } from './entities/models-car.entity';

@Module({
  providers: [ModelsCarsResolver, ModelsCarsService],
  imports: [
    MongooseModule.forFeature([
      { name: ModelsCar.name, schema: ModelsCarSchema },
    ]),
  ],
})
export class ModelsCarsModule {}
