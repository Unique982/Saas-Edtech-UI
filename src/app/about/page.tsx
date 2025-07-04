import { useAppSelector } from "@/lib/store/hook";
import { useSelector } from "react-redux";

export const About = () => {
  const data = useAppSelector((store) => store.user);
  console.log(data);
  return <></>;
};
