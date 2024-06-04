import styles from './FriendsProfile.module.css'

import eventsWhereUserIsInserted from '@/common/mocks/eventsWhereUserIsInserted'

import Lines from '@/common/components/svg/Line'
import Star from '@/common/components/svg/Star'
import UserIcon from '@/common/components/svg/UserIcon'
import BagIcon from '@/common/components/svg/BagIcon'
import Breadcrumb from '@/common/components/Breadcrumb/Breadcrumb'
import Card from '@/components/Cards/Cards'
import Arrow from '@/common/components/svg/Arrow'

import profilePicture from '@/assets/Profile.png';
import EventsIcon from '@/common/components/svg/EventsIcon'
import { useNavigate } from 'react-router-dom'

export default function FriendsProfile() {
    const navigate = useNavigate()

    const backToHome = () => navigate("/home")
    return (
        <main className={styles.friendsProfile}>
            <Breadcrumb className={styles.breadcrumb}>
                <li>Home</li>
                <li>Se Mexe Comigo</li>
            </Breadcrumb>
            <h2 className={styles.title}>Se Mexe Comigo</h2>
            <section className={styles.wrapper}>
                <Arrow className={styles.arrow} onClick={backToHome} />
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
                    <article className={`${styles.field} ${styles.fieldInRow}`}>
                        <div className={styles.orangeCircle}>
                            <EventsIcon className={styles.icon} />
                        </div>
                        <div className={styles.hideElementsOverflow}>
                            <h6>Eventos</h6>
                            <div className={styles.displayElementsInRow}>
                                {eventsWhereUserIsInserted.map((x, i) => <Card key={`EventOfUser_${i}`} {...x} />)}
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    )
}
