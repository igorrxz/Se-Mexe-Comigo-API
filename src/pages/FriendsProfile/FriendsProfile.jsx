import styles from './FriendsProfile.module.css'

import Lines from '@/common/components/svg/Line'
import Star from '@/common/components/svg/Star'
import UserIcon from '@/common/components/svg/UserIcon'
import BagIcon from '@/common/components/svg/BagIcon'
import Breadcrumb from '@/common/components/Breadcrumb/Breadcrumb'

import profilePicture from '../../assets/Profile.png';

export default function FriendsProfile() {
    return (
        <main className={styles.friendsProfile}>
            {/* <Back /> */}
            {/* <Breadcrumb className={styles.breadcrumb}>
                <li>Home</li>
                <li>Se Mexe Comigo</li>
            </Breadcrumb>
            <h2 className={styles.title}>Se Mexe Comigo</h2> */}
            <section className={styles.wrapper}>
                <div className={styles.centralize}>
                    <picture className={styles.picture}>
                        <img src={profilePicture} className={styles.userImage} alt="User Image" />
                    </picture>
                    <h6 className={styles.username}>
                        Nome do Usuário
                    </h6>
                    <div className={styles.field}>
                        <Star className={styles.star} height={24} width={24} />
                        <h6 className={styles.subtitle}>Avaliações</h6>
                        <div className={styles.avaliation}>
                            <span className={styles.grade}>
                                <strong>
                                    0.00/<span>5</span>
                                </strong>
                                <span className="">(0)</span>
                            </span>
                            <Lines className={styles.diagram} />
                        </div>
                    </div>
                    <div className={`${styles.field} ${styles.fieldInRow}`}>
                        <div className={styles.orangeCircle}>
                            <BagIcon className={styles.icon} />
                        </div>
                        <div>
                            <h6>Data de Nascimento</h6>
                            <span>22/07/2003</span>
                        </div>
                    </div>
                    <div className={`${styles.field} ${styles.fieldInRow}`}>
                        <div className={styles.orangeCircle}>
                            <UserIcon className={styles.icon} />
                        </div>
                        <div>
                            <h6>Gênero</h6>
                            <span>Masculino</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
