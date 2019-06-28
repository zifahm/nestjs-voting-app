import { ValidationError } from 'yup';
interface Error {
  path: string;
  message: string;
}

export const serializeValidationError = (err: ValidationError) => {
  const invalid: Error[] = [];

  err.inner.map(value => {
    invalid.push({
      path: value.path,
      message: value.message,
    });
  });
  return invalid;
};
