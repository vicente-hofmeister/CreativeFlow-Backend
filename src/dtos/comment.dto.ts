import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CommentOwnerDTO {
  @ApiProperty({
    example: '9e2b3a8b-3e9f-44b3-b15e-4b7b3e3e3c9a',
  })
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty({
    example: 'Eduardo',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: 'https://thispersondoesnotexist.com/',
  })
  @IsNotEmpty()
  @IsUrl()
  profile_picture_url: string;
}

export class GetCommentResponseDTO {
  @ApiProperty({
    example: '9e2b3a8b-3e9f-44b3-b15e-4b7b3e3e3c9a',
  })
  @IsNotEmpty()
  @IsString()
  comment_id: string;

  @IsNotEmpty()
  owner: CommentOwnerDTO;

  @ApiProperty({
    example: "Comment's body!",
  })
  @IsNotEmpty()
  @IsString()
  content: string;
}

export class CreateCommentDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  postId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  content: string;
}
