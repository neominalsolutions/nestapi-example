import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './schemas/Product';
import { ApiTags } from '@nestjs/swagger';
import { ProductDto } from './dtos/ProductDto';
import { Response } from 'express'; // Dikkat et Response expressten gelecek

@Controller('products')
@ApiTags('products/api')
// apiRoute yerine bunu yazıyoruz.
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  list() {
    return this.productService.getProducts();
  }

  @Get(':id')
  detail(@Param('id') id: string) {
    // dışarıdan gelecek id route dili
    return this.productService.getProductById(id);
  }

  @Post()
  create(@Body() model: ProductDto) {
    return this.productService.create(model);
  }

  @Put(':id')
  @HttpCode(204)
  update(@Param('id') id: string, @Body() model: ProductDto) {
    return this.productService.update(id, model);
  }

  @Delete(':id')
  delete(@Param('id') id: string, @Res() res: Response) {
    const result = this.productService.delete(id);

    // res.status(HttpStatus.OK).json(result);

    res.json(result);
  }

  // npm run start:dev ile hot reload özelliği açılıyor aynı reactdaki gibi. dosyadaki değişikliği algılar.

  
}
