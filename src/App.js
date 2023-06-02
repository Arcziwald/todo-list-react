import React from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";

const tasks = [
  { id: 1, content: "przejść na Reacta", done: false },
  { id: 2, content: "zjeść obiad", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <body className="body">
      <main className="container">
        <header className="header">
          <h1 className="header__title">Lista zadań</h1>
        </header>
        <section className="section">
          <h2 className="section__title">Dodaj nowe zadanie</h2>
          <Form />
        </section>
        <section className="section">
          <header className="section__header">
            <h2 className="section__title"> Lista zadań</h2>

            <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
          </header>
          <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
        </section>
      </main>
    </body>
  );
}

export default App;
