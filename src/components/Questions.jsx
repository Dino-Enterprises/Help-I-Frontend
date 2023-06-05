import React from "react";

function Questions() {
  return (
    <div>
      <div className="grid grid-cols-3 outline outline-1 outline-gray-400 bg-[#f0f0f1] mt-5">
        <div className="flex flex-col col-span-2 ">
          <div className="text-2xl pl-5 pt-3 pb-3">Coaching con Help-I</div>
          <div className="text-xl pl-5 pr-5">
            En los últimos años los videojuegos online han tenido una gran
            crecida, es por ello que cada vez más y más jugadores buscan mejorar
            su desempeño y competitividad. Siendo conscientes de esto, te
            presentamos Help-l, una plataforma donde encontrarás la ayuda que
            necesitas para convertirte en eI mejor jugador que llevas en tu
            interior.
          </div>
        </div>
        <div className="col-span-1">
          <img src="../images/apex_q.png" alt="apex" />
        </div>
      </div>
      <div className="grid grid-cols-3 outline outline-1 outline-gray-400 ">
        <div className="col-span-1">
          <img src="../images/dota_q.png" alt="apex" />
        </div>
        <div className="flex flex-col col-span-2 ">
          <div className="text-2xl pl-5 pt-3 pb-3">¿Quieres ser el mejor?</div>
          <div className="text-xl pl-5 pr-5">
            ¿Quieres mejorar tu puntería, obtener más víctimas, morir menos,
            farmear más? Con nuestros coaches aprenderás las mejores formas de
            desenvolverte en el juego que tú decidas, posicionamiento, timing,
            estrategia. Nosotros te proveeremos del conocimiento necesario para
            ganar más partidas.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 outline outline-1 outline-gray-400  bg-[#f0f0f1]">
        <div className="flex flex-col col-span-2 ">
          <div className="text-2xl pl-5 pt-3 pb-3">¿Cómo funciona?</div>
          <div className="text-xl pl-5 pr-5">
            Gracias a nuestra comunidad de entrenadores que han sido puestos a
            prueba para garantizar un nivel óptimo de desenvolvimiento en el
            juego. Son los que te guiarán paso a paso desde los conceptos más
            básicos del juego, hasta los trucos que solo han logrado aprender y
            perfeccionar los jugadores más experimentados para que logres tus
            objetivos.
          </div>
        </div>
        <div className="col-span-1">
          <img src="../images/apex_q.png" alt="apex" />
        </div>
      </div>
      <div className="grid grid-cols-3 outline outline-1">
        <div className="col-span-1">
          <img src="../images/apex_q.png" alt="apex" />
        </div>
        <div className="flex flex-col col-span-2 ">
          <div className="text-2xl pl-5 pt-3 pb-3">¿Por qué Help-I?</div>
          <div className="text-xl pl-5 pr-5">
            Porque te garantizamos los mejores coaches, a quienes hemos evaluado
            y verificado que su rendimiento en los juegos indicados sea el
            óptimo y de igual manera, tenga la destreza necesaria al momento de
            explicar y dar a entender las ideas que desea manifestar y de esta
            forma lograr los mejores avances en el menor tiempo posible.F
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;
