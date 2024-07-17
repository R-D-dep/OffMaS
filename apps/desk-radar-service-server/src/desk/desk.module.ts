import { Module } from "@nestjs/common";
import { DeskModuleBase } from "./base/desk.module.base";
import { DeskService } from "./desk.service";
import { DeskController } from "./desk.controller";
import { DeskResolver } from "./desk.resolver";

@Module({
  imports: [DeskModuleBase],
  controllers: [DeskController],
  providers: [DeskService, DeskResolver],
  exports: [DeskService],
})
export class DeskModule {}
