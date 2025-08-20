import Button from "../src/components/Button";

export default {
  title: "Components/Button",
  component: Button
};

export const Primary = () => <Button label="Click Me" onClick={() => alert("Clicked")} />;
