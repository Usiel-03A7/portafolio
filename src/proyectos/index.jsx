import "./proyectos.css";
export default function Proyectos() {
  return (
    <div className="proyectos">
      <div className="proyectos__tittle">
        <h2>Proyectos</h2>
        <div className="container__proyectos">
          <div className=" proyectos__tarrget ">
            <img src="./img/PDA.webp" alt="" />
            <div className="proyectos__img--info">
              <h3>pan de azúcar </h3>
              <p>
                Se hizo un menú el cual mediante un QR redirigía al link de
                donde estaba almacenado.
              </p>
            </div>
          </div>
          <div className=" proyectos__tarrget">
            <img src="./img/MStecs.webp" alt="" />
            <div className="proyectos__img--info">
              <h3>MStecs (multicloud Group)</h3>
              <p>
                La creación de una landing page para que las personas puedan
                entrar y ver qué tipo de información
              </p>
            </div>
          </div>
          <div className=" proyectos__tarrget">
            <img src="./img/Yazaki.webp" alt="" />
            <div className="proyectos__img--info">
              <h3>Yazaki</h3>
              <p>
                El uso de herraminetas virtuales de Autodesk en el caso de esta
                empresa se usó la herramienta INVENTOR 2019 para la crear
                figuras 3D desde la programación de una maquina CNC.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
