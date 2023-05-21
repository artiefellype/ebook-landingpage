export default function Home() {
  return (
    <main className="flex flex-col w-screen">
      <section className="flex flex-row w-screen text-defaultText1 justify-center items-center max-w-[1990px]">
        <div className=" z-[-1] overflow-x-hidden absolute w-[1333.56px] h-[1333.56px] left-[33rem] top-[-865.89px] bg-gradient-to-b from-[#FF763B] via-transparent to-transparent rounded-[90px] transform rotate-[-219.72deg]"></div>
        <div className=" flex justify-start w-60 h-screen">
          <div className="w-4 h-full rounded-s-none rounded-e-3xl bg-defaultText2"></div>
        </div>
        <div
          id="titles"
          className={`flex flex-col justify-around items-start w-full h-[580px]`}
        >
          <h1 className="font-poppins font-black text-6xl w-[486px]">
            ALCANCE O <span className="text-defaultText2">SUCESSO</span> TENDO
            UMA <span className="text-defaultText2">IA</span> COMO GUIA!
          </h1>
          <h4 className="font-raleway font-semibold text-2xl w-[546px]">
            Transforme sua vida financeira com os segredos revelados por uma IA
            de ponta!
          </h4>
          <button className="w-[374px] h-[70px] bg-defaultText2 flex items-center justify-center font-raleway font-extrabold text-xl text-defaultBg leading-[108%] shadow-defaultBox hover:bg-orange-800 transition-all ease-in-out delay-100">
            <span className=" flex w-[190px] h-[44px] text-center">
              Garantir Minha Transformação
            </span>
          </button>
        </div>

        <div id="book" className="flex justify-center items-center w-full">
          <img src="/book.svg" alt="" width={860} height={790} />
        </div>
      </section>
      <section className="flex flex-row w-screen min-h-screen py-36 bg-defaultText1 text-defaultBg justify-center items-center max-w-[1990px]">
        <div className="flex flex-col w-full justify-around  ">
          <div className="flex justify-center  items-center pb-28">
            <div className="flex flex-col items-start max-w-[475px] w-full">
              <img src="/icon-book.svg" alt="" width={66} height={66} />
              <h1 className="font-poppins font-black text-defaultBg text-6xl w-[288px]">
                <span className="text-defaultText2">SOBRE</span> O E-BOOK
              </h1>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className=" max-w-[475px] font-raleway font-semibold text-xl text-justify">
              <p>
                Cada capítulo deste livro foi cuidadosamente elaborado para
                proporcionar um aprendizado valioso sobre negócios no mundo
                digital. Desde as bases fundamentais até as táticas mais
                avançadas, você terá acesso a informações preciosas que podem
                impulsionar sua jornada rumo à independência financeira.
              </p>
              <p>
                Prepare-se para uma leitura cativante, repleta de dicas e
                orientações que irão impulsionar sua trajetória em direção ao
                sucesso financeiro. Não perca mais tempo, embarque nessa jornada
                transformadora e conquiste sua liberdade financeira no mundo
                digital!.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="w-full flex justify-center items-center">
            <div className=" max-w-[475px] font-raleway font-semibold text-xl text-justify">
              <p>
                Descubra os "Segredos para o Sucesso Financeiro Online" e
                desvende o poder das estratégias reveladas por uma Inteligência
                Artificial neste incrível livro. Prepare-se para uma leitura
                descomplicada e envolvente, escrita por uma IA.
              </p>
              <p>
                A linguagem clara e direta utilizada ao longo do livro é
                perfeitamente adequada para leitores jovens e adultos. Assim, de
                forma envolvente, a IA compartilha seus conhecimentos,
                oferecendo insights práticos e estratégias comprovadas para
                alcançar resultados excepcionais.
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </main>
  );
}
