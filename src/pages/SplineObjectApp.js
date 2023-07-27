import Spline from "@splinetool/react-spline";
import styled from "styled-components";

const Bar = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  padding: 0.7rem;
  width: 80%;
  background-color: #fafad6;
  border-radius: 1rem;
`;

export default function SplineApp() {
  return (
    <Bar>
      <div className="block" style={{ width: "80%" }}>
        <Spline scene="https://prod.spline.design/OGVcbc5FG8wAxA5K/scene.splinecode" />
      </div>
      <div className="block">Use your mouse to interact with the object!</div>
    </Bar>
  );
}
