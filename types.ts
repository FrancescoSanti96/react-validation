import { Control, FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod"; // Add new import
 
export const UserSchema = z.object({
  email: z.string().email(),
  date: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), 'Date is required'),
  timeStart: z
    .string()
    .refine((timeStart) => !isNaN(Date.parse(timeStart)), 'Time Start is required'),
  timeEnd: z
    .string()
    .refine((timeEnd) => !isNaN(Date.parse(timeEnd)), 'Time End is required'),
});

export interface FormData {
  email: string;
  date: string;
  timeStart: string;
  timeEnd: string;
}

  export type FormFieldProps = {
    type: string;
    placeholder: string;
    name: ValidFieldNames;
    control: Control<FormData>;
  };
  

  export type ValidFieldNames =
  | "email"
  | "date"
  | "timeStart"
  | "timeEnd";