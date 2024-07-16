import { Module } from "@nestjs/common";
import { WorkstationModuleBase } from "./base/workstation.module.base";
import { WorkstationService } from "./workstation.service";
import { WorkstationController } from "./workstation.controller";
import { WorkstationResolver } from "./workstation.resolver";

@Module({
  imports: [WorkstationModuleBase],
  controllers: [WorkstationController],
  providers: [WorkstationService, WorkstationResolver],
  exports: [WorkstationService],
})
export class WorkstationModule {}
