import { SwitchTransition, CSSTransition } from "react-transition-group";
import "../../../app.css";

export default function SwitchTransitionWrapper(
  children,
  nodeRef,
  refKey,
  mode
) {
  return (
    <SwitchTransition mode={mode || "out-in"}>
      <CSSTransition
        key={refKey}
        nodeRef={nodeRef}
        classNames="fade"
        addEndListener={(done) => {
          nodeRef?.current?.addEventListener("transitionend", done, false);
        }}
      >
        <div style={{ marginTop: "64px" }} ref={nodeRef}>
          {children}
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
}
