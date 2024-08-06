import type { MetaFunction } from "@remix-run/node";
import ConfigUpdate from "../components/ConfigUpdate";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="p-4">
      <ConfigUpdate />
    </div>
  );
}
