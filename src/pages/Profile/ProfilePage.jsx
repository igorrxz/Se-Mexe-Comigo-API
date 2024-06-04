import profileImage from "@/assets/Profile.png"

import styles from "./ProfilePage.module.css"

import OptionBar from "./OptionBar"

import Arrow from "@/common/components/svg/Arrow"
import PhotoCamera from "@/common/components/svg/PhotoCamera"

import useOption from "./userOptions"
import EditData from "./EditData/EditData"
import Notification from "./Notifications/Notification"
import SupportPage from "./Support/SupportPage"
import { useNavigate } from "react-router-dom"


function DisplayableOptions({option}) {
  switch(option) {
    case "notifications": return <Notification/>
    case "suport": return <SupportPage/>
    case "editdata": 
    default: return <EditData />
  }
}

export default function ProfilePage() {
  const [option] = useOption()
  const navigate = useNavigate()

  const backToHome = () => navigate("/")

  return (
    <main className={`${styles.profile} single`}>
      <Arrow className={styles.back} onClick={backToHome} />
      <div className={`${styles.layout} container`}>
        <div className={styles.top}>
          <img
            className={styles.image}
            src={profileImage}
            alt="Profile Image"
          />
          <p className={`${styles.name} big`}>CFIT Healthtech Analytics</p>
          <PhotoCamera className={styles.camera} />
        </div>
        <OptionBar className={styles.customOptionBar}/>
        <DisplayableOptions option={option} />
      </div>
    </main>
  )
}
