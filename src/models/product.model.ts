import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ProductDocument = Product & Document;

@Schema({ collection: 'product' })
export class Product {
    @Prop({required: true})
    id: number;
    @Prop({ required: true })
    merk: string;
    @Prop({ required: true })
    type: string;
    @Prop({ required: true })
    stock: number;
    @Prop({ required: true })
    price: number;
    @Prop({ required: true })
    note: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);