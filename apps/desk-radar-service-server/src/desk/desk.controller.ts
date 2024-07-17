import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DeskService } from "./desk.service";
import { DeskControllerBase } from "./base/desk.controller.base";

@swagger.ApiTags("desks")
@common.Controller("desks")
export class DeskController extends DeskControllerBase {
  constructor(protected readonly service: DeskService) {
    super(service);
  }
}
