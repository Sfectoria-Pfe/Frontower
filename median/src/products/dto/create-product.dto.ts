import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
 
  @ApiProperty()
  title: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  imageUrl: string;
  @ApiProperty()
  category: string;
  @ApiProperty()
  stock: number;
  
}
