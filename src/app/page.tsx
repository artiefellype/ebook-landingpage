import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col w-screen">
      <section className="flex flex-row w-screen text-defaultText1 justify-center items-center max-w-[1990px]">
        <div className="hidden sm:inline z-[-1] overflow-x-hidden absolute w-[1333.56px] h-[1333.56px] left-[33rem] top-[-865.89px] bg-gradient-to-b from-[#FF763B] via-transparent to-transparent rounded-[90px] transform rotate-[-219.72deg]"></div>

        <div className="hidden sm:flex justify-start w-60 h-screen">
          <div className="w-4 h-full rounded-s-none rounded-e-3xl bg-defaultText2"></div>
        </div>
        <div
          id="titles"
          className="flex relative flex-col justify-around items-center sm:items-start w-full py-8 sm:py-0  sm:h-[580px]"
        >
          <h1 className="font-poppins font-black text-4xl sm:text-6xl w-[280px] text-center sm:text-left sm:w-[486px]">
            ALCANCE O <span className="text-defaultText2">SUCESSO</span> TENDO
            UMA <span className="text-defaultText2">IA</span> COMO GUIA!
          </h1>
          <div
            id="book"
            className="sm:hidden flex justify-center items-center w-full"
          >
            <Image src="/book.svg" alt="book" width={332} height={306} />
          </div>
          <h4 className="font-raleway text-center text-defaultBg sm:text-defaultText1 sm:text-left font-semibold text-xl sm:text-2xl w-[205px] sm:w-[546px] sm:my-0 my-4">
            Transforme sua vida financeira com os segredos revelados por uma IA
            de ponta!
          </h4>
          <a
            href="https://pay.hotmart.com/L82747605D?checkoutMode=10"
            className=" w-[296px] sm:w-[374px] h-[57px] sm:h-[70px] bg-defaultBg sm:bg-defaultText2 text-defaultText1 sm:my-0 my-4 flex items-center justify-center font-raleway font-extrabold text-base sm:text-xl sm:text-defaultBg leading-[108%] shadow-defaultBox hover:bg-orange-800 transition-all ease-in-out delay-100"
          >
            <span className=" flex w-[190px] sm:h-[44px] text-center">
              Garantir Minha Transformação
            </span>
          </a>

          <a
            href="#more"
            className="flex sm:hidden font-raleway text-center justify-center items-center sm:text-left font-extrabold text-xl sm:text-2xl w-[205px] sm:w-[546px] sm:my-0 my-4 text-defaultBg"
          >
            <span>SABER MAIS</span>
          </a>
          <div className="sm:hidden inline z-[-1] overflow-x-hidden absolute w-screen bottom-0 left-0">
            <Image src="/wave 1.svg" alt="onda" width={1440} height={388} />
            <div className="w-full h-[248px] bg-defaultText2"></div>
          </div>
        </div>

        <div
          id="book"
          className="hidden sm:flex justify-center items-center w-full"
        >
          <Image src="/book.svg" alt="book" width={860} height={790} />
        </div>
      </section>
      <section id="more" className=" min-w-screen min-h-screen ">
        <div className=" flex flex-col xl:flex-row max-w-[1990px] w-full py-36 bg-defaultText1 text-defaultBg justify-center items-center">
          <div className="flex flex-col w-full justify-around  py-28 xl:py-0">
            <div className="flex justify-center  items-center pb-28">
              <div className="flex flex-col items-start max-w-[300px] cel:max-w-[375px] sm:max-w-[475px] w-full">
                <Image
                  src="/icon-book.svg"
                  alt="icon book"
                  width={66}
                  height={66}
                />
                <h1 className="font-poppins font-black text-defaultBg text-6xl w-[288px]">
                  <span className="text-defaultText2">SOBRE</span> O E-BOOK
                </h1>
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <div className=" max-w-[300px] cel:max-w-[375px] sm:max-w-[475px] font-raleway font-semibold text-base cel:text-xl text-justify">
                <p>
                  Cada capítulo deste livro foi&nbsp;
                  <span className="text-defaultText2">
                    cuidadosamente elaborado para proporcionar um aprendizado
                    valioso sobre negócios no mundo digital
                  </span>
                  . Desde as bases fundamentais até as táticas mais avançadas,
                  você terá acesso a informações preciosas que podem&nbsp;
                  <span className="text-defaultText2">
                    impulsionar sua jornada&nbsp;
                  </span>
                  rumo à independência financeira.
                </p>
                <p>
                  Prepare-se para uma leitura cativante, repleta de dicas e
                  orientações que irão impulsionar sua trajetória em direção ao
                  sucesso financeiro. Não perca mais tempo, embarque nessa
                  jornada transformadora e conquiste sua liberdade financeira no
                  mundo digital!.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="w-full flex justify-center items-center">
              <div className=" max-w-[300px] cel:max-w-[375px] sm:max-w-[475px] font-raleway font-semibold text-base cel:text-xl text-justify pb-28">
                <p>
                  Descubra os Segredos para o Sucesso Financeiro Online e
                  desvende o poder das estratégias reveladas por uma
                  Inteligência Artificial neste incrível livro. Prepare-se para
                  uma&nbsp;
                  <span className="text-defaultText2">
                    leitura descomplicada e envolvente
                  </span>
                  , escrita por uma IA.
                </p>
                <p>
                  A linguagem clara e direta utilizada ao longo do livro é
                  perfeitamente adequada para leitores jovens e adultos. Assim,
                  de forma envolvente, a IA compartilha seus conhecimentos,
                  oferecendo insights práticos e&nbsp;
                  <span className="text-defaultText2">
                    estratégias comprovadas&nbsp;
                  </span>
                  para alcançar resultados excepcionais.
                </p>
              </div>
            </div>
            <div className=" w-full flex flex-col items-center gap-8 justify-end font-raleway font-semibold ">
              <div className="text-xl cel:text-2xl text-right max-w-[300px] cel:max-w-[375px] sm:max-w-[475px]">
                <blockquote>
                  <p className="text-defaultText2">
                    A inteligência artificial é a extensão da nossa própria
                    inteligência, permitindo-nos explorar horizontes antes
                    inimagináveis.
                  </p>
                  <footer>- Alan Turing</footer>
                </blockquote>
              </div>
              <a
                href="https://pay.hotmart.com/L82747605D?checkoutMode=10"
                className="w-[236px] h-[42px] bg-defaultText2 flex items-center justify-center font-raleway font-extrabold text-xl text-defaultBg leading-[108%] shadow-defaultBox hover:bg-orange-800 transition-all ease-in-out delay-100"
              >
                <span className=" flex text-center">Adquira Agora!</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
