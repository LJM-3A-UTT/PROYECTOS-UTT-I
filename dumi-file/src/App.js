import Datas from "./dummy_6.json";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  async function uploadData() {
    const datos = Datas.map((data) => {
      return { ...data, id: uuidv4() };
    });
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://dsm-5a.shop/indexes/indexUID/documents",
      data: datos.slice(4000, 5000),
      headers: {
        Authorization:
          "Bearer f96a0fd38fb33d9b91974b3a20ba9d26595f519918a0ddd145028b32975c",
      },
    };

    try {
      await axios.request(config);
      console.log("Datos subidos con éxito");
    } catch (error) {
      console.error("Error al subir los datos:", error);
    }
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={uploadData}>Subir datos</button>
    </div>
  );
}
