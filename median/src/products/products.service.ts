import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma:PrismaService){}
  async create(CreateProductDto: CreateProductDto) {

    return await this.prisma.product.create({data:CreateProductDto})
  }

  async findAll() {
    return await this.prisma.product.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return this.prisma.product.delete({where:{id}})
  }
}
