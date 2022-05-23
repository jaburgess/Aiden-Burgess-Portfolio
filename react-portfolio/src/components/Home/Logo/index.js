import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import Profile from '../../../assets/images/profile.jpg'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const profileRef = useRef()

  useEffect(() => {
    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })

    gsap.fromTo(
      profileRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 1,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="profile-container" ref={bgRef}>
      <img
        className="profile"
        ref={profileRef}
        src={Profile}
      />
    </div>
  )
}

export default Logo