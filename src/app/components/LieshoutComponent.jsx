import Rive, { useRive } from "@rive-app/react-canvas";

function LieshoutComponent() {
  const STATEMACHINE = "lieshout";

  const { rive, RiveComponent } = useRive({
    src: "/rive/lieshout.riv",
    stateMachines: STATEMACHINE,
    autoplay: true,
  });

  return (
    <div>
      <RiveComponent
        style={{ height: "90px", width: "200px", marginBottom: "2rem" }}
      />
    </div>
  );
}
export default LieshoutComponent;
