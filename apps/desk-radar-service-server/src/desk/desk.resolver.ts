import * as graphql from "@nestjs/graphql";
import { DeskResolverBase } from "./base/desk.resolver.base";
import { Desk } from "./base/Desk";
import { DeskService } from "./desk.service";

@graphql.Resolver(() => Desk)
export class DeskResolver extends DeskResolverBase {
  constructor(protected readonly service: DeskService) {
    super(service);
  }
}
