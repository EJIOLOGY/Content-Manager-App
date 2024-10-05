import { ClientPageRoot } from "next/dist/client/components/client-page";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const a = 100;
const b = 150;
function CompA() {
  return <h1>This is CompA</h1>;
}

function CompB() {
  return <h1>This is CompB</h1>;
}

export default function Home() {
  return (
    <div>
      <h1>Hello World, This is a comeback to NextJS</h1>
      <CompA />
      <CompB />
    </div>
  );
}
