import { CircularProgress } from "@nextui-org/react";
import { ImageComponent, useProfile } from "..";
import "../styles/index.css";

export const Inicio = () => {
  const { profile, isLoading } = useProfile();

  // const imageSrc = profileQuery.data?.photoUrl;

  // console.log(profileQuery?.data);

  if (isLoading)
    return (
      <div className="load">
        <CircularProgress label="Loading..." />
      </div>
    );

  return (
    <div className="text">
      <ImageComponent src={profile!.photoUrl} hash={profile!.imgHash} />
      <div className="text-right">
        <h1 className="name ">
          {profile?.name} {profile?.lastname}
        </h1>
        <h3 className="age ">Años: {profile?.age}</h3>
        <h3 className="phone ">Celular: {profile?.phone}</h3>
        <h3 className="email">Email: {profile?.email}</h3>
      </div>
    </div>
  );
};
