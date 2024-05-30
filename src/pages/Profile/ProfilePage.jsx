import profileImage from "@/assets/Profile.png"

import styles from "./ProfilePage.module.css"

import OptionBar from "./OptionBar"

import Arrow from "@/common/components/svg/Arrow"
import PhotoCamera from "@/common/components/svg/PhotoCamera"

import useOption from "./userOptions"
import EditData from "./EditData/EditData"
import Notification from "./Notifications/Notification"
import SupportPage from "./Support/SupportPage"


function DisplayableOptions({option}) {
  switch(option) {
    case "notifications": return <Notification/>
<<<<<<< HEAD
    case "suport": return <SuportPage/>
=======
    case "suport": return <SupportPage/>
>>>>>>> original-main/profile
    case "editdata": 
    default: return <EditData />
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
        <OptionBar className={styles.customOptionBar}/>
        <DisplayableOptions option={option} />
      </div>
    </main>
  )
}