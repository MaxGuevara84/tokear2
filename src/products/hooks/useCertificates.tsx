import { useQuery } from "@tanstack/react-query";
import { collection, getDocs } from "firebase/firestore";
import { FirebaseDB } from "../../firebase/config";
import { ICertificate } from "../../interface/Certificate";

const getInfoCertificates = async (): Promise<ICertificate[] | undefined> => {
  const certificateRef = collection(FirebaseDB, `certificados`);

  try {
    const result = await getDocs(certificateRef);
    let certificates: ICertificate[] = [];
    result.forEach((doc) => {
      certificates.push({ ...(doc.data() as ICertificate), id: doc.id });
    });
    // console.log(JSON.stringify(certificates[0]));

    return certificates;
  } catch (error) {
    console.log(error);
  }
};

export const useCertificates = () => {
  const { data, isLoading } = useQuery(["certificates"], getInfoCertificates);

  return {
    isLoading,
    certificados: data,
  };
};
