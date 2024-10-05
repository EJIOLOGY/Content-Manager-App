import { ClientPageRoot } from "next/dist/client/components/client-page";
import React from "react";

const ArrowFunction = () => {
  return (
    <>
      <h1 className="font-bold bg-blue-500">I am arrow function</h1>
    </>
  );
};
function CompA() {
  return (
    <div>
      <ArrowFunction />
      <h1 className="font-bold">CompA</h1>
      <p>This is CompA</p>
    </div>
  );
}
class CompC extends React.Component {
  render() {
    return <h1 className="font-bold">CompC</h1>;
  }
}
export default function () {
  return (
    <>
      <h1 className="font-bold underline text-3xl">
        Hello World, This is a comeback to NextJS his comes with an extensive
        design plan
      </h1>
      <CompA />
      {/* <CompC /> */}
    </>
  );
}
