import {
  Container,
  Link,
  Paper,
  TextField,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

type RegistrationFields = {
  lastName: string;
  firstName: string;
  patronymic: string | null;
  email: string;
  password: string;
  passwordConfirm: string;
};

export function RegistrationPage() {
  console.log("render");

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFields>();

  const onSubmit = (data: RegistrationFields) => {
    console.log(data);
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const handleMouseDownConfirmPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const handleMouseUpConfirmPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  return (
    <Container maxWidth="xs">
      <Paper sx={{ marginTop: 2, padding: 5 }}>
        <Link component={RouterLink} to="/">
          ← Обратно на Главную
        </Link>

        <div className="container mt-8 flex flex-col place-content-center">
          <form
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full flex-col items-center gap-7"
          >
            <TextField
              fullWidth
              id="outlined-basic"
              label="Фамилия"
              type="text"
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
              {...register("lastName", {
                required: "Это поле обязательно для заполнения",
              })}
            />

            <TextField
              fullWidth
              id="outlined-basic"
              label="Имя"
              type="text"
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
              {...register("firstName", {
                required: "Это поле обязательно для заполнения",
              })}
            />

            <TextField
              fullWidth
              id="outlined-basic"
              label="Отчество"
              type="text"
              {...register("patronymic")}
            />

            <TextField
              fullWidth
              id="outlined-basic"
              label="Email"
              type="text"
              error={!!errors.email}
              helperText={errors.email?.message}
              {...register("email", {
                required: "Это поле обязательно для заполнения",
                validate: (value) => {
                  if (!value.includes("@")) {
                    return "Email должен содержать @";
                  }
                },
              })}
            />

            <FormControl sx={{ mt: 2 }} variant="outlined" fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">
                Пароль
              </InputLabel>
              <OutlinedInput
                error={!!errors.password}
                {...register("password", {
                  required: "Это поле обязательно для заполнения",
                  validate: (password) => {
                    if (password.length < 6) {
                      return "Пароль должен быть не меньше 6 символов";
                    }
                  },
                })}
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword
                          ? "hide the password"
                          : "display the password"
                      }
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Пароль"
              />
              {!!errors.password && (
                <FormHelperText error id="accountId-error">
                  {errors.password?.message}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl sx={{ mt: 2 }} variant="outlined" fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">
                Подтверждение пароля
              </InputLabel>
              <OutlinedInput
                error={!!errors.passwordConfirm}
                {...register("passwordConfirm", {
                  required: "Это поле обязательно для заполнения",
                  validate: (password) => {
                    errors.email;
                    if (password.length < 6) {
                      return "Пароль должен быть не меньше 6 символов";
                    }
                    if (watch("password") != password) {
                      return "Пароли не совпадают";
                    }
                  },
                })}
                id="outlined-adornment-password"
                type={showConfirmPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showConfirmPassword
                          ? "hide the password"
                          : "display the password"
                      }
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownConfirmPassword}
                      onMouseUp={handleMouseUpConfirmPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Подтверждение пароля"
              />
              {!!errors.passwordConfirm && (
                <FormHelperText error id="accountId-error">
                  {errors.passwordConfirm?.message}
                </FormHelperText>
              )}
            </FormControl>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ marginTop: 3, marginBottom: 2 }}
            >
              Зарегистрироваться
            </Button>
          </form>
        </div>
      </Paper>
    </Container>
  );
}
