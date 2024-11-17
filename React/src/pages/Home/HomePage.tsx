import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Autocomplete,
  Pagination,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import cat1 from "../../assets/cat1.png";
import cat2 from "../../assets/cat2.png";
import cat3 from "../../assets/cat3.png";
import cat4 from "../../assets/cat4.png";
import cat5 from "../../assets/cat5.png";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const defaultSortedList = ["Пол", "Окрас", "Место", "Здоровье", "Другое"];

export function HomePage() {
  const [sortedList, setSortedList] = useState<string[]>([
    "Пол",
    "Окрас",
    "Место",
    "Здоровье",
    "Другое",
  ]);

  const onChangeSortedListItem = (i: number, newValue: string) => {
    let newList = [...sortedList];
    newList[i] = newValue;
    setSortedList(newList);
  };

  console.log("rendering");
  return (
    <section className="flex w-full min-w-60 flex-col gap-2">
      <h1 className="text-center text-3xl">
        Добро пожаловать на сайт помощи животным
      </h1>

      <div className="mt-2 flex flex-wrap gap-5">
        <div className="mt-2 flex h-full w-80 min-w-32 flex-none flex-col gap-5 rounded-xl bg-slate-200 p-4">
          <h1 className="text-2xl font-semibold">Поиск и сортировка</h1>
          <div className="flex-1">
            <h1 className="text-xl font-medium underline">Поиск по имени</h1>
            <FormControl sx={{ mt: 2 }} variant="outlined" fullWidth>
              <OutlinedInput
                autoComplete="off"
                id="outlined-adornment-pet-name"
                type={"text"}
                endAdornment={
                  <InputAdornment position="start">
                    <IconButton edge="start">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                }
                label="Имя животного"
              />
              <InputLabel htmlFor="outlined-adornment-pet-name">
                Имя животного
              </InputLabel>
            </FormControl>
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-medium underline">Сортировка</h1>

            {!!sortedList &&
              sortedList.map((sortedItem, i) => (
                <div className="flex flex-col" key={i}>
                  <h1 className="mt-2">{sortedItem}</h1>
                  <Autocomplete
                    key={i}
                    disablePortal
                    value={sortedItem}
                    options={defaultSortedList}
                    onChange={(event, newValue) => {
                      if (!!newValue) onChangeSortedListItem(i, newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </div>
              ))}
          </div>
        </div>

        <div className="bg-black-300 flex flex-1 flex-wrap justify-normal gap-10 p-2">
          <div className="min-h-36 w-80 min-w-32 flex-none rounded-xl bg-gray-200 p-2">
            <div className="h-80">
              <img className="w-full" src={cat1} />
            </div>
            <h1 className="text-xl font-semibold">Барсик</h1>
            <div className="flex">
              <Button fullWidth variant="contained" sx={{ mr: 2 }}>
                Подробнее
              </Button>
              <div className="flex-none">
                <Button
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  variant="contained"
                >
                  <StarOutlineIcon />
                </Button>
              </div>
            </div>
          </div>
          <div className="min-h-36 w-80 min-w-32 flex-none rounded-xl bg-gray-200 p-2">
            <div className="h-80">
              <img className="w-full" src={cat2} />
            </div>
            <h1 className="text-xl font-semibold">Дружок</h1>
            <div className="flex">
              <Button fullWidth variant="contained" sx={{ mr: 2 }}>
                Подробнее
              </Button>
              <div className="flex-none">
                <Button
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  variant="contained"
                >
                  <StarOutlineIcon />
                </Button>
              </div>
            </div>
          </div>
          <div className="min-h-36 w-80 min-w-32 flex-none rounded-xl bg-gray-200 p-2">
            <div className="h-80">
              <img className="w-full" src={cat5} />
            </div>
            <h1 className="text-xl font-semibold">Пушок</h1>
            <div className="flex">
              <Button fullWidth variant="contained" sx={{ mr: 2 }}>
                Подробнее
              </Button>
              <div className="flex-none">
                <Button
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  variant="contained"
                >
                  <StarOutlineIcon />
                </Button>
              </div>
            </div>
          </div>
          <div className="min-h-36 w-80 min-w-32 flex-none rounded-xl bg-gray-200 p-2">
            <div className="h-80">
              <img className="w-full" src={cat4} />
            </div>
            <h1 className="text-xl font-semibold">Матроскин</h1>
            <div className="flex">
              <Button fullWidth variant="contained" sx={{ mr: 2 }}>
                Подробнее
              </Button>
              <div className="flex-none">
                <Button
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  variant="contained"
                >
                  <StarOutlineIcon />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 flex justify-center">
        <Pagination
          className="justify-center"
          count={8}
          variant="outlined"
          shape="rounded"
        />
      </div>
    </section>
  );
}
