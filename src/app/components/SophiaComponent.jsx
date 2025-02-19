import Rive, { useRive } from "@rive-app/react-canvas";

function Sophia() {
  const STATEMACHINE = "State Machine 1";

  const { rive, RiveComponent } = useRive({
    src: "/rive/sophia.riv",
    stateMachines: STATEMACHINE,
    autoplay: true,
  });

  return (
    <div>
      <RiveComponent
        style={{ height: "70px", width: "210px", marginBottom: "2rem" }}
      />
    </div>
  );
}
export default Sophia;
