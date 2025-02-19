import { useRive } from "@rive-app/react-canvas";

export default function Simple() {
  const { rive, RiveComponent } = useRive({
    src: "/rive/vehicles.riv",
    stateMachines: "bumpy",
    autoplay: false,
  });

  return (
    <RiveComponent
      onMouseEnter={() => rive && rive.play()}
      onMouseLeave={() => rive && rive.pause()}
    />
  );
}
