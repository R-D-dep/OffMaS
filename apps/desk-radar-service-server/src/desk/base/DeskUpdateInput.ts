/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { RoomWhereUniqueInput } from "../../room/base/RoomWhereUniqueInput";
import { Type } from "class-transformer";
import { BookingUpdateManyWithoutDesksInput } from "./BookingUpdateManyWithoutDesksInput";

@InputType()
class DeskUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  identifier?: string | null;

  @ApiProperty({
    required: false,
    type: () => RoomWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RoomWhereUniqueInput)
  @IsOptional()
  @Field(() => RoomWhereUniqueInput, {
    nullable: true,
  })
  room?: RoomWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => BookingUpdateManyWithoutDesksInput,
  })
  @ValidateNested()
  @Type(() => BookingUpdateManyWithoutDesksInput)
  @IsOptional()
  @Field(() => BookingUpdateManyWithoutDesksInput, {
    nullable: true,
  })
  bookings?: BookingUpdateManyWithoutDesksInput;
}

export { DeskUpdateInput as DeskUpdateInput };
