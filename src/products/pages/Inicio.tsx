import { collection, getDocs } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { ChangeEvent, useEffect } from "react";
import { FirebaseDB, FirebaseStorage } from "../../firebase/config";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { IProfile } from "../../interface/Profile";

export const Inicio = () => {
  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    const profileRef = collection(FirebaseDB, `profile`);
    // Funcion para guardar
    try {
      const result = await getDocs(profileRef);
      let profile: IProfile | undefined;
      result.forEach((doc) => {
        // console.log(doc.data());
        profile = doc.data() as IProfile;
      });
      if (profile) {
        console.log(profile.photoUrl);
      } else {
        console.log("No hay profile");
      }
      // await addDoc(collection(FirebaseDB, "comidas"), { ...newComida });
    } catch (error) {
      console.log(error);
    }
  };

  const fileHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    // Detectar el archivo
    const fileImg = e.target.files![0];

    // Cargar esto al storage
    const refFile = ref(FirebaseStorage, `documentos/${fileImg.name}`);
    await uploadBytes(refFile, fileImg);

    //Obtener la url de la imagen
    // imgUrl = await getDownloadURL(refFile);
  };

  return (
    <div>
      <h3>Agregar Imagen</h3>
      <form>
        <label>Agregar Imagen: </label>
        <ArrowUpwardIcon />

        <br />
        <input
          type="file"
          id="file"
          placeholder="Agregar Imagen"
          onChange={fileHandler}
        />

        <button style={{ color: "blue" }}>Guardar</button>
      </form>
    </div>

    // <div style={{ display: "flex" }}>
    /* <img
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-firebase-699b9.appspot.com/o/WhatsApp%20Image%202022-06-25%20at%2012.49.59%20AM.jpeg?alt=media&token=4a439ceb-4e2a-412d-a8bd-b46cecad40e4"
        style={{ width: "300px" }}
      /> */
    /* </div> */
  );
};
