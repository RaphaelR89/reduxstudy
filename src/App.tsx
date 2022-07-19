import React, { useState } from "react";
import { useAppSelector } from "./redux/hooks/useAppSelector";
import "./App.css";
import { useDispatch } from "react-redux";
import { setName, setAge } from "./redux/reducers/useReducer";
import { setThemeStatus } from "./redux/reducers/themeReducer";

function App() {
  const user = useAppSelector((state) => state.user);
  const theme = useAppSelector((state) => state.theme);
  const dispatch = useDispatch();
  //jeito simples
  const changeName = (newName: String) => dispatch(setName(newName));
  const switchTheme = (newTheme: string) => dispatch(setThemeStatus(newTheme));

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeName(e.target.value);
  };
  const handleSwitchTheme = () => {
    switchTheme(theme.status === "light" ? "dark" : "light");
  };

  //fim jeito simples

  //jeito completo
  const handleAgeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAge(e.target.value));
  };
  return (
    <div>
      Meu nome é : {user.name} e tenho {user.age} anos. <br />
      Tema: {theme.status}
      <hr />
      <input type="text" value={user.name} onChange={handleNameInput} />
      <input type="text" value={user.age} onChange={handleAgeInput} />
      <hr />
      <button onClick={handleSwitchTheme}>Switch Theme</button>
    </div>
  );
}

export default App;
