import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

type LoginFields = {
  email: string;
  password: string;
};

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFields>();

  const onSubmit = (data: LoginFields) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col h-full w-full py-6 px-10 justify-center items-start  gap-4">
      <NavLink to="/" className="text-lg">
        ← Обратно на Главную
      </NavLink>

      <div className="flex flex-col flex-1 min-w-80 mx-auto items-center justify-center gap-9">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full items-center gap-7"
        >
          <TextField
            variant="standard"
            label="Email"
            error={!!errors.email}
            helperText={errors.email?.message}
            fullWidth
            {...register("email", {
              required: "Это поле обязательно для заполнения",
              validate: (value) => {
                if (!value.includes("@")) {
                  return "Email должен содержать @";
                }
              },
            })}
          />

          <TextField
            variant="standard"
            label="Пароль"
            fullWidth
            {...register("password")}
          />

          <Button type="submit">Войти</Button>
        </form>
      </div>
    </div>
  );
}
