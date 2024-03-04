import { useQuery } from "@tanstack/react-query";
import { collection, getDocs } from "firebase/firestore";
import { FirebaseDB } from "../../firebase/config";
import { IProfile } from "../../interface/Profile";

const getInfo = async (): Promise<IProfile | undefined> => {
  const profileRef = collection(FirebaseDB, `profile`);
  // Funcion para guardar
  try {
    const result = await getDocs(profileRef);
    let profile: IProfile | undefined;
    result.forEach((doc) => {
      // console.log(doc.data());
      profile = doc.data() as IProfile;
    });

    return profile;

    // await addDoc(collection(FirebaseDB, "comidas"), { ...newComida });
  } catch (error) {
    console.log(error);
  }
};

export const useProfile = () => {
  const { data, isLoading } = useQuery(
    ["profile"],
    getInfo /*{refetchOnWindowFocus: false}*/
  );

  return {
    profile: data,
    isLoading,
  };
};
