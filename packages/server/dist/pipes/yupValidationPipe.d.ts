import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { Schema } from 'yup';
export declare class YupValidationPipe implements PipeTransform {
    private readonly schema;
    constructor(schema: Schema<{}>);
    transform(value: any, metadata: ArgumentMetadata): Promise<any>;
}
