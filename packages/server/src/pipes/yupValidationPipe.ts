import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { Schema } from 'yup';
import { serializeValidationError } from '../utils/serializeValidationError';

@Injectable()
export class YupValidationPipe implements PipeTransform {
  constructor(private readonly schema: Schema<{}>) {}

  async transform(value: any, metadata: ArgumentMetadata) {
    try {
      await this.schema.validate(value, { abortEarly: false });
    } catch (err) {
      console.log(err);
      throw serializeValidationError(err);
    }
    return value;
  }
}
