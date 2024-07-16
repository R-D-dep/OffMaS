import * as graphql from "@nestjs/graphql";
import { WorkstationResolverBase } from "./base/workstation.resolver.base";
import { Workstation } from "./base/Workstation";
import { WorkstationService } from "./workstation.service";

@graphql.Resolver(() => Workstation)
export class WorkstationResolver extends WorkstationResolverBase {
  constructor(protected readonly service: WorkstationService) {
    super(service);
  }
}
