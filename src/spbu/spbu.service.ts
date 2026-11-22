
import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { CreateSpbuDto } from './dto/create-spbu.dto.js';
import { UpdateSpbuDto } from './dto/update-spbu.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class SpbuService {
  constructor(private prisma: PrismaService) {}

  async create(createSpbuDto: CreateSpbuDto) {
    const duplicate = await this.prisma.spbu.findFirst({
      where: {
        nama: { equals: createSpbuDto.nama, mode: 'insensitive' },
        kota: { equals: createSpbuDto.kota, mode: 'insensitive' },
      },
    });

    if (duplicate) {
      throw new ConflictException(
        'SPBU dengan nama tersebut sudah ada di kota ini',
      );
    }

    return this.prisma.spbu.create({
      data: createSpbuDto,
    });
  }

  async findAll() {
    return this.prisma.spbu.findMany();
  }

  async findOne(id: number) {
    const spbu = await this.prisma.spbu.findUnique({
      where: { id },
    });

    if (!spbu) {
      throw new NotFoundException(
        `SPBU dengan ID ${id} tidak ditemukan`,
      );
    }

    return spbu;
  }

  async update(id: number, updateSpbuDto: UpdateSpbuDto) {
    await this.findOne(id);

    const nama = updateSpbuDto.nama;
    const kota = updateSpbuDto.kota;

    if (nama !== undefined || kota !== undefined) {
      const duplicate = await this.prisma.spbu.findFirst({
        where: {
          id: { not: id },
          nama: {
            equals: nama,
            mode: 'insensitive',
          },
          kota: {
            equals: kota,
            mode: 'insensitive',
          },
        },
      });

      if (duplicate) {
        throw new ConflictException(
          'SPBU dengan nama tersebut sudah ada di kota ini',
        );
      }
    }

    return this.prisma.spbu.update({
      where: { id },
      data: updateSpbuDto,
    });
  }

  async remove(id: number) {
    const spbu = await this.findOne(id);

    await this.prisma.spbu.delete({
      where: { id },
    });

    return {
      message: `SPBU ${spbu.nama} berhasil dihapus`,
    };
  }
}
