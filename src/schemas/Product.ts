import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;
// class üzerinden veri tabanı dökümanı yaptık. her bir kayıt dökümana denk gelir

// Entity
@Schema() // Table
export class Product {
  @Prop() // Column
  name: string;

  @Prop()
  price: number;

  @Prop()
  stock: number;
}

// ilgili collection'a bağlanmak için şema ismini kullanıyoruz
export const ProductSchema = SchemaFactory.createForClass(Product);
