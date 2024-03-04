import { ICertificate } from "../../../interface/Certificate";

import { CardContent, CardMedia, Typography } from "@mui/material";
import { Card } from "@nextui-org/react";

interface CertificateCardProps {
  certificate: ICertificate;
  onClick: (item: ICertificate) => void;
}

export const ProductCard = ({ certificate, onClick }: CertificateCardProps) => {
  return (
    <>
      <Card>
        <CardMedia
          sx={{ height: 250 }}
          image={certificate.imageUrl}
          title="green iguana"
          onClick={() => onClick(certificate)}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {certificate.title}
          </Typography>
          <Typography variant="body2" color="white">
            {certificate.description}
          </Typography>
          <Typography variant="body2" color="white">
            {certificate.graduated.seconds} Hs
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
