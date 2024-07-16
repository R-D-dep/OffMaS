/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WorkstationWhereUniqueInput } from "./WorkstationWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { WorkstationUpdateInput } from "./WorkstationUpdateInput";

@ArgsType()
class UpdateWorkstationArgs {
  @ApiProperty({
    required: true,
    type: () => WorkstationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WorkstationWhereUniqueInput)
  @Field(() => WorkstationWhereUniqueInput, { nullable: false })
  where!: WorkstationWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => WorkstationUpdateInput,
  })
  @ValidateNested()
  @Type(() => WorkstationUpdateInput)
  @Field(() => WorkstationUpdateInput, { nullable: false })
  data!: WorkstationUpdateInput;
}

export { UpdateWorkstationArgs as UpdateWorkstationArgs };
