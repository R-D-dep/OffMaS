import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DeskServiceBase } from "./base/desk.service.base";

@Injectable()
export class DeskService extends DeskServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
