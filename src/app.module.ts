import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './schemas/Product';

// name de model ismi
// MongooseModule.forFeature ile veri tabanı nesnelerini tanımlıyoruz. dbset oluyor
//  MongooseModule.forRoot ile connection String yapıyoruz.testdb database bağlan.

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/testDb'), // addDbContext
    MongooseModule.forFeature([{ name: 'product', schema: ProductSchema }]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class AppModule {}
