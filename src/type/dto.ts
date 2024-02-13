import { IsNotEmpty, IsString, IsOptional, IsNumber } from 'class-validator';

export class PostDto {
    @IsNotEmpty({ message: 'Merek tidak boleh kosong' })
    @IsString({ message: 'Format Merek salah' })
    merk: string;

    @IsNotEmpty({ message: 'Jenis tidak boleh kosong' })
    @IsString({ message: 'Format Jenis salah' })
    type: string;

    @IsNotEmpty({ message: 'Stok tidak boleh kosong' })
    @IsNumber({}, { message: 'Format Stok salah' })
    stock: number;

    @IsNotEmpty({ message: 'Harga tidak boleh kosong' })
    @IsNumber({}, { message: 'Format Harga salah' })
    price: number;

    @IsNotEmpty({ message: 'Keterangan tidak boleh kosong' })
    @IsString({ message: 'Format Keterangan salah' })
    note: string;
}

export class UpdateDto {
    @IsOptional()
    @IsString({ message: 'Format Merek salah' })
    merk: string;

    @IsOptional()
    @IsString({ message: 'Format Jenis salah' })
    type: string;

    @IsOptional()
    @IsNumber({}, { message: 'Format Stok salah' })
    stock: number;

    @IsOptional()
    @IsNumber({}, { message: 'Format Harga salah' })
    price: number;

    @IsOptional()
    @IsString({ message: 'Format Keterangan salah' })
    note: string;
}

