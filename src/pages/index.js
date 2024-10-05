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
  return (
    <div>
      <h1 className="font-bold">CompA</h1>
      <p>This is CompA</p>
      <CompB />
    </div>
  );
}

function CompB() {
  return (
    <div>
      <h1 className="font-bold">CompB</h1>
      <p>This is CompB</p>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <h1 className="font-bold underline">
        Hello World, This is a comeback to NextJS his comes with an extensive
        design plan
      </h1>
      <CompA />
    </div>
  );
}
