import Rive, { useRive } from "@rive-app/react-canvas";

function VanComponent() {
  const STATEMACHINE = "van";

  const { rive, RiveComponent } = useRive({
    src: "/rive/van.riv",
    stateMachines: STATEMACHINE,
    autoplay: true,
  });

  return (
    <div>
      <RiveComponent
        style={{ height: "60px", width: "120px", marginBottom: "2rem" }}
      />
    </div>
  );
}
export default VanComponent;
