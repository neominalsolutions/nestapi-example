import { ApiProperty } from '@nestjs/swagger';

// request body olarak maplenmesi için api Property yazdık.
// swagger da görünmesi için yaptık

export class ProductDto {
  @ApiProperty({ required: true })
  name: string;
  @ApiProperty({ required: true })
  price: number;
  @ApiProperty({ required: true })
  stock: number;
}
