import React from `react`;
import Form from "./Form";

const tasks = [
  { id: 1, content: "przejść na Reacta", done: false },
  { id: 2, content: "zjeść obiad", done: true },
];

function App() {
  return (
    <body className="body">
    <main className="container">
        <header className="header"> 
            <h1 className="header__title">Lista zadań</h1>
        </header>
        <section className="section">
            <h2 className="section__title">Dodaj nowe zadanie</h2>
                <form className="form">
                    <input className="form__input" placeholder="Co jest do zrobienia?" autofocus/>
                    <button className="form__button">Dodaj zadanie</button>
                </form>
        </section>
        <section className="section">
        <header className="section__header">
           <h2 className="section__title"> Lista zadań</h2>
          <div className="stat__button">
            <button className="stat__button js-toggleHideDoneButton">Ukryj ukończone</button>
            <button className="stat__button js-markALLDoneButton">Ukończ wszystkie</button> 
          </div>
        </header>
           <ul className="tasks"></ul>
        </section>
    </main>
    </body>

  );
}

export default App;
