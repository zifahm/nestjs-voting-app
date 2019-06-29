import * as yup from "yup";
export declare const signupInputSchema: yup.ObjectSchema<yup.Shape<object, {
    userName: string;
    email: string;
    password: string;
}>>;
