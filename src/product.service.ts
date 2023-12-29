import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './schemas/Product';
import { ProductDto } from './dtos/ProductDto';

@Injectable()
export class ProductService {
  // model isminde ilgili collection bağlanıp veri işilemleri yapıyoruz.
  // app module tanımındaki isim ile buradaki product aynı olmalı
  constructor(
    @InjectModel('product') private readonly productModel: Model<Product>,
  ) {}

  async getProducts() {
    return await this.productModel.find(); // model üzerinde repositoryler geliyor. mongoose özelliği
  }

  async getProductById(id: string) {
    return await this.productModel.findById(id);
  }

  async create(dto: ProductDto) {
    const doc = new this.productModel(dto);
    const result = await doc.save();
    return result; // eklenen result döner
  }

  async update(id: string, dto: ProductDto) {
    // eğer bu id de bir kayıt yoksa new true ile yeni bir kayıt insert eder.
    const doc = await this.productModel.findByIdAndUpdate(id, dto, {
      new: true,
    });
  }

  async delete(id: string) {
    const doc = await this.productModel.findByIdAndDelete(id);
    return doc;
  }
}
