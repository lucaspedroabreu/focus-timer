import { Play } from "phosphor-react";

export function Home() {
  return (
    <main className="home-container">
      <form action="" className="home__form">
        <section className="home__form-inputs">
          <div className="flex w-full">
            <label htmlFor="task" className="w-1/4 text-center">Vou trabalhar em</label>
            <input id="task" type="text" className="w-3/4"  />
          </div>
          <div className="home__form-input-group">
            <label htmlFor="duration">durante</label>
            <input id="duration" type="number" />
            <label htmlFor="duration">minutos, </label>
            <label htmlFor="break">com pausa a cada</label>
            <input id="break" type="number" />
            <label htmlFor="break">minutos.</label>
          </div>
        </section>
        <section className="home__form-count-down">
          <span>0</span>
          <span>0</span>
          <div className="count-down-divider">:</div>
          <span>0</span>
          <span>0</span>
        </section>
        <button type="submit" className="home__form-button">
          <Play size={24} />
          Começar
        </button>
      </form>
    </main>
  )
}