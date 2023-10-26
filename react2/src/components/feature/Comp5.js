import React, { useState } from "react";

const Comp5 = () => {
  let [x, setX] = useState(0);
  let [y, setY] = useState(0);
  let [show, setShow] = useState(false);

  let [t, setT] = useState(0);
  let [l, setL] = useState(0);

  let demo1 = (a) => {
    console.log("*************");
  };

  let demo2 = (event) => {
    setX(event.pageX);
    setY(event.pageY);
  };

  let demo3 = (event) => {
    event.preventDefault();
  };
  let demo4 = (event) => {
    event.preventDefault();
    setShow(true);
    setT(event.pageY);
    setL(event.pageX);
  };
  let demo5 = () => {
    setShow(false);
  };
  return (
    <>
      {show == true ? (
        <div
          style={{
            height: "100px",
            width: "200px",
            backgroundColor: "red",
            position: "absolute",
            top: t + "px",
            left: l + "px",
            transition : ".5s"
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
          dolores praesentium provident est
        </div>
      ) : (
        ""
      )}
      <button onDoubleClick={()=>console.log("########")} onClick={(event) => demo1(event)}>OK</button>
      <h3>
        X {x} Y {y}
      </h3>
      <div
        
        onContextMenu={(event) => demo4(event)}
        onMouseMove={(event) => demo2(event)}
        onMouseOut={demo5}
        style={{ height: "500px", width: "500px", backgroundColor: "#451245" }}
      ></div>
      <a onClick={(event) => demo3(event)} href="http://google.com">
        Google
      </a>
    </>
  );
};

export default Comp5;

/*
    let a = {};


*/
