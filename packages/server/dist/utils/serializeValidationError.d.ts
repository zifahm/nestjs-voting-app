import { ValidationError } from 'yup';
interface Error {
    path: string;
    message: string;
}
export declare const serializeValidationError: (err: ValidationError) => Error[];
export {};
