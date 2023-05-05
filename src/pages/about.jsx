import { useEffect, useState } from "react";

function About() {
  const [counter, setCounter] = useState(10);
  const [name, setName] = useState("Anggy");
  const [ids, setIds] = useState(["1", "2"]);

  //   let counter = 10;

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    // checker jika counter > 0 lakaukan kurangi dengan satu selain itu abaikan
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const changeName = () => {
    setName("Jaja");
  };

  const checkArray = () => {
    ids.forEach((id) => {
      console.log(id);
    });
  };

  // Lifecycle method ada 3
  /**
   * 1. Component Did Mount : dijalankan sebelum render
   * 2. Component Did update : dijalankan ketika ada perubahan state atau props
   * 3. Component will unMount : dijalankan ketika dihapus atau ditutup
   */

  //   Component Did Mount

  useEffect(() => {
    setCounter(9);
  }, []);

  //   component Did update
  useEffect(() => {
    if (counter > 10) {
      alert("Stock is insufficient");
    }
  }, [counter]);

  //   Component Will Unmount
  useEffect(() => {
    return () => {
      alert("Yakin Mau keluar");
    };
  }, []);

  return (
    <div>
      <div>
        <h1>{counter}</h1>
        <button
          onClick={() => {
            increment();
          }}
        >
          Tambah
        </button>
        <button
          onClick={() => {
            decrement();
          }}
        >
          Kurang
        </button>
      </div>
      <div>
        <h1>{name}</h1>
        <button onClick={() => changeName()}>Save Name</button>
      </div>

      <div>
        <button onClick={() => checkArray()}>Check Array</button>
      </div>
      <p>About</p>
    </div>
  );
}

export default About;
