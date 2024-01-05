import React from "react";
import { AuthClient } from "@dfinity/auth-client";
import { pomodoro_forest_backend } from "../../declarations/pomodoro_forest_backend";
import "../assets/main.css";
import Forest from "./forest";

export default function App() {

    return (
        <main>
        <img src="logo2.svg" alt="DFINITY logo" />
        <br />
        <br />
        <form action="#">
            <label for="name">Enter your name: &nbsp;</label>
            <input id="name" alt="Name" type="text" />
            <button type="submit">Click Me!</button>
        </form>
        <section id="greeting"></section>
        </main>
    )
}