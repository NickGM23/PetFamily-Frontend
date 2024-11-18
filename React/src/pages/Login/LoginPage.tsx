import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Container,
  Paper,
  TextField,
  Link,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import { getUsers } from "../../api/accounts";

type LoginFields = {
  email: string;
  password: string;
};

export function LoginPage() {
  console.log("render");
  const [users, setUsers] = useState<string[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const users = await getUsers();
        setUsers(users);
        setIsLoading(false);
      } catch (error) {
        setError("Ошибка загрузки данных");
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFields>();

  const onSubmit = (data: LoginFields) => {
    console.log(data);
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

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

  return (
    <Container maxWidth="xs">
      <Paper sx={{ marginTop: 2, padding: 5 }}>
        <Link component={RouterLink} to="/">
          ← Обратно на Главную
        </Link>
        <div className="mt-2 flex flex-col">
          {isLoading ? (
            <div className="bg-gray-300 p-4 text-center">
              <CircularProgress />
            </div>
          ) : (
            <div>
              {users?.map((user, i) => (
                <div className="bg-gray-300 text-center" key={i}>
                  {user}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="container flex flex-col place-content-center">
          <form
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full flex-col items-center gap-7"
          >
            <TextField
              fullWidth
              sx={{ mt: 4 }}
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

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ marginTop: 3, marginBottom: 2 }}
            >
              Войти
            </Button>
          </form>
        </div>
        <div>
          <Typography variant="subtitle1" component="span">
            Нет аккаунта?{" "}
          </Typography>
          <Link component={RouterLink} to="/register">
            Зарегистрируйтесь
          </Link>
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            open={!!error}
            autoHideDuration={3000}
            onClose={() => setError("")}
            message={error}
          >
            <Alert
              onClose={() => setError("")}
              severity="error"
              variant="outlined"
              sx={{ width: "100%", bgcolor: "red", color: "white" }}
            >
              {error}
            </Alert>
          </Snackbar>
        </div>
      </Paper>
    </Container>
  );
}
