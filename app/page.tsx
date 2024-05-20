import { redirect } from "next/navigation";
import Info from "./components/Info";

export default function Home(props: any) {
  redirect("/your-info");
  return <Info />;
}
