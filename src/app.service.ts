import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './models/product.model';
import { Model } from 'mongoose';
import { PostDto, UpdateDto } from './type/dto';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Product.name)
    private model: Model<ProductDocument>
  ) {}
  
  async get() {
    const result = await this.model.find().exec();
    return result;

  }
  
  async getId(id: string) {
    console.log(id)
    const result = await this.model.findOne({id: Number(id)}).exec();
    return result;

  }

  async post(dto: PostDto) {
    let total = await this.model.find().exec();
    console.log("TOTAL", total)
    let newProduct = new this.model();
    newProduct.id = total.length > 0 ? total[total.length-1].id + 1 : 1;
    newProduct.merk = dto.merk;
    newProduct.type = dto.type;
    newProduct.stock = dto.stock;
    newProduct.price = dto.price;
    newProduct.note = dto.note;
    await newProduct.save();
    return {
      message: "success"
    };
  }

  async update(id: string, dto: UpdateDto) {
    let total = await this.model.findOne({id: Number(id)}).exec();

    const updatedProduct = new UpdateDto();
      Object.keys(dto).forEach((key) => {
        updatedProduct[key] = dto[key];
      });

    await this.model.findByIdAndUpdate(total._id, updatedProduct);
    
    return {
      message: "success"
    };
  }

  async delete(id: string) {
    let total = await this.model.findOne({id: Number(id)}).exec();
    await this.model.findByIdAndDelete(total._id);
    
    return {
      message: "success"
    };
  }
}
