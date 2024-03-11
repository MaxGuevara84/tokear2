import { CircularProgress } from "@nextui-org/react";
import { ProductList } from "..";
import { useCertificates } from "../hooks/useCertificates";

export const CertificatesListPage = () => {
  const { certificados, isLoading } = useCertificates();

  if (isLoading)
    return (
      <div className="load">
        <CircularProgress label="Loading..." />
      </div>
    );

  return (
    <div className="flex-col">
      <ProductList list={certificados} />
    </div>
  );
};
