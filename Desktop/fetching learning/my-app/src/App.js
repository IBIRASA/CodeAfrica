// import "./App.css";
// import axios from "axios";
// import { useState } from "react";

// function App() {
//   const [quote, setQuote] = useState("");
//   const getQuote = () => {
//     axios
//       .get("https://swapi.dev/api/people/1/")
//       .then((res) => {
//         console.log(res.data);
//         setQuote(res.data);
//       })
//       .catch((err) => {
//         console.log("Error fetching quote:", err);
//       });
//   };
//   // const getQuote = async () => {
//   //   try {
//   //     const res = await axios.get("https://swapi.dev/api/people/");
//   //     console.log(res.data);
//   //   } catch (err) {
//   //     console.log("Error fetching quote:", err);
//   //   }
//   // };

//   return (
//     <div className="App">
//       <button onClick={getQuote}>Get quotes</button>
//       {quote && <p>{quote}</p>}
//     </div>
//   );
// }

// export default App;
import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [quote, setQuote] = useState("");

  const getQuote = () => {
    axios
      .get("https://swapi.dev/api/people/1/")
      .then((res) => {
        console.log(res.data);
        setQuote(res.data.name);
      })
      .catch((err) => {
        console.log("Error fetching quote:", err);
      });
  };

  return (
    <div className="App">
      <button onClick={getQuote}>Get quotes</button>
      {quote && <p>{quote}</p>}
    </div>
  );
}

export default App;
