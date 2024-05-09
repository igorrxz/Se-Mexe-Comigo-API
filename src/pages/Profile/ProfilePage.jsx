import profileImage from "@/assets/Profile.png"

import styles from "./ProfilePage.module.css"

import OptionBar from "./OptionBar"

import Arrow from "@/common/components/svg/Arrow"
import PhotoCamera from "@/common/components/svg/PhotoCamera"

import useOption from "./userOptions"
import EditData from "./EditData/EditData"
import Notification from "./Notifications/Notification"
import SuportPage from "./Suport/SuportPage"


function DisplayableOptions({option}) {
  switch(option) {
    case "editdata": return <EditData />
    case "notifications": return <Notification/>
    case "suport": return <SuportPage/>
    default: return null
  }
}

export default function ProfilePage() {
  const [option] = useOption()

  return (
    <main className={`${styles.profile} single`}>
      <Arrow className={styles.back} />
      <div className="container">
        <div className={styles.top}>
          <img
            className={styles.image}
            src={profileImage}
            alt="Profile Image"
          />
          <p className={`${styles.name} big`}>Nome de Usuário</p>
          <PhotoCamera className={styles.camera} />
        </div>
        <OptionBar />
        <DisplayableOptions option={option} />
      </div>
    </main>
  )
}