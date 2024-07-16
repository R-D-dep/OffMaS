import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WorkstationService } from "./workstation.service";
import { WorkstationControllerBase } from "./base/workstation.controller.base";

@swagger.ApiTags("workstations")
@common.Controller("workstations")
export class WorkstationController extends WorkstationControllerBase {
  constructor(protected readonly service: WorkstationService) {
    super(service);
  }
}
