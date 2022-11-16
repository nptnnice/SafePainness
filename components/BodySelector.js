import { BodyComponent } from 'reactjs-human-body'
import { useEffect, useState } from 'react'

export default function BodySelector() {
  const [site, setSite] = useState([])

  useEffect(() => {
    if (localStorage.getItem('site') !== null) {
      setSite(localStorage.getItem('site'))
      console.log('test: ', localStorage.getItem('site'))
    }
  }, [])

  // useEffect(() => {
  //   localStorage.setItem('site', site)
  // }, [site])

  // const getSite = (e) => {
  //   // if array consists of the value, remove it
  //   if (site.includes(e)) {
  //     setSite(site.filter((item) => item !== e))
  //   }
  //   // if array does not consist of the value, add it
  //   else {
  //     setSite([...site, e])
  //   }
  //   localStorage.setItem('site', site)
  //   console.log('site: ', site)
  // }

  return (
    <BodyComponent
      onClick={getSite}
      partsInput={{
        head: { show: true, selected: site.includes('head') },
        left_shoulder: { show: true, selected: site.includes('left_shoulder') },
        right_shoulder: {
          show: true,
          selected: site.includes('right_shoulder'),
        },
        left_arm: { show: true, selected: site.includes('left_arm') },
        right_arm: { show: true, selected: site.includes('right_arm') },
        chest: { show: true, selected: site.includes('chest') },
        stomach: { show: true, selected: site.includes('stomach') },
        left_leg: { show: true, selected: site.includes('left_leg') },
        right_leg: { show: true, selected: site.includes('right_leg') },
        left_hand: { show: true, selected: site.includes('left_hand') },
        right_hand: { show: true, selected: site.includes('right_hand') },
        left_foot: { show: true, selected: site.includes('left_foot') },
        right_foot: { show: true, selected: site.includes('right_foot') },
      }}
    />
  )
}
