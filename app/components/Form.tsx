import { FormData, UserSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers'



function Form() {
  const {
    handleSubmit,
    formState,
    control,
    
  } = useForm<FormData>({
    mode: "onTouched",
    resolver: zodResolver(UserSchema),
  });

  const onSubmit = async (data: FormData) => {
  	console.log("SUCCESS", data);
  }

  console.log("formState", formState);

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid col-auto">
          <h1 className="text-3xl font-bold mb-4">
            Zod & React-Hook-Form
          </h1>
          <Controller
            name="email"
            control={control}
            render={({
              field: { value, onChange, ref, onBlur },
              fieldState: { error },
            }) => (
              <>
                <TextField
                  fullWidth
                  name="email"
                  label="email"
                  placeholder="Email"
                  inputRef={ref}
                  value={value ?? ""}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={Boolean(error)}
                />
                {error?.message}
              </>
            )}
          />
          <br /><br />
          <Controller
            name="date"
            control={control}
            render={({
              field: { value, onChange,  ref },
              fieldState: { error },
            }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                name="date"
                label="Date"
                inputRef={ref}
                value={value ?? (null as unknown as Date | null | undefined)}
                onChange={(date)=>{
                  console.log(date)
                  onChange(date)
                } }
              />
              {error?.message}
              </LocalizationProvider>
            )}
          />
          <br /><br />
          <Controller
            name="timeStart"
            control={control}
            render={({
              field: { value, onChange,  ref },
              fieldState: { error },
            }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                name="timeStart"
                label="Time Start"
                inputRef={ref}
                value={value ?? (null as unknown as Date | null | undefined)}
                onChange={onChange}
              />
              {error?.message}
              </LocalizationProvider>
            )}
          />
          <br /><br />
          <Controller
            name="timeEnd"
            control={control}
            render={({
              field: { value, onChange, ref },
              fieldState: { error },
            }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                name="timeEnd"
                label="Time End"
                inputRef={ref}
                value={value ?? (null as unknown as Date | null | undefined)}
                onChange={onChange}
              />
              {error?.message}
              </LocalizationProvider>
            )}
          />
          <br /><br />
          <button  type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
  );
}

export default Form;