import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WorkstationServiceBase } from "./base/workstation.service.base";

@Injectable()
export class WorkstationService extends WorkstationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
