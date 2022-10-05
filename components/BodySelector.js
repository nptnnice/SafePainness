import { BodyComponent } from 'reactjs-human-body'

export default () => {
  return (
    <BodyComponent
      partsInput={{
        head: { show: true },
        left_shoulder: { show: true },
        right_shoulder: { show: true },
        left_arm: { show: true },
        right_arm: { show: true },
        chest: { show: true },
        stomach: { show: true },
        left_leg: { show: true },
        right_leg: { show: true },
        left_hand: { show: true },
        right_hand: { show: true },
        left_foot: { show: true },
        right_foot: { show: true },
      }}
    />
  )
}
