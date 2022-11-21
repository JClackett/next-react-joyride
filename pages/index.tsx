import * as React from "react"
import Joyride from "react-joyride"

const steps = [
  {
    target: ".joyride1",
    content: "This is the first step!",
    disableBeacon: true,
  },
  {
    target: ".joyride2",
    content: "This is the second step!",
    disableBeacon: true,
  },
]
export default function Home() {
  const [isTourRunning, setIsTourRunning] = React.useState(false)
  return (
    <div style={{ padding: 200 }}>
      <div style={{ paddingBottom: 50 }}>
        <button onClick={() => setIsTourRunning(true)}>Start tour</button>
      </div>

      {isTourRunning && (
        <Joyride
          steps={steps}
          callback={(e) => {
            if (e.action === "reset") setIsTourRunning(false)
          }}
          showProgress
          {...{
            continuous: true,
            showSkipButton: true,
            scrollToFirstStep: false,
            disableScrolling: true,
            floaterProps: {
              hideArrow: true,
            },
          }}
        />
      )}

      <div>
        <button className="joyride1">first feature</button>
        <button className="joyride2">second feature</button>
      </div>
    </div>
  )
}
