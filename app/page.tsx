import { redirect } from "next/navigation";

export default function Home(props: any) {
  redirect("/your-info");
  return <></>;
}
