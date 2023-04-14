import "./inicio.css";
import React from "react";
export default function Inicio() {
  return (
    <div className="inicio">
      <div className="inicio_img">
        <img src="img/profile.webp" alt="" />
      </div>
      <div className="inicio_texto">
        <h1>¡Bienvenidos a mi página web personal! </h1>
        <p>
          Soy Usiel, Ing. En Sistemas Computacionales, y estoy emocionado de
          compartir mi experiencia y habilidades contigo. En esta página
          encontrarás información detallada sobre mi carrera, proyectos y
          habilidades. Mi objetivo es presentar mi trabajo y ayudarte a entender
          cómo puedo ayudarte en tu proyecto o empresa.
        </p>
        <p>
          Siéntete libre de explorar mi portafolio ya que en ello demuestro mi
          formación académica incluye una licenciatura en Ingeniería en Sistemas
          Computacionales, la cual me proporcionó una base de conocimientos en
          programación, bases de datos, entre otras áreas. Además, he continuado
          mi formación a través de diversos cursos y certificaciones, lo que me
          ha permitido mantenerme actualizado en las últimas tecnologías y
          tendencias en el campo de la tecnología de la información.
        </p>
        <p>
          En cuanto a mi experiencia laboral, he trabajado en diversas empresas
          del sector tecnológico, en roles que van desde desarrollador de
          software hasta graficador. He tenido la oportunidad de
          trabajar en proyectos de gran envergadura y complejidad, tanto en el
          ámbito nacional como internacional, lo que me ha brindado una amplia
          experiencia y habilidades para manejar proyectos y equipos de trabajo.
        </p>
      </div>
    </div>
  );
}
