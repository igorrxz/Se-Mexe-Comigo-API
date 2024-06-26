import React from 'react';
import styles from './FriendsPage.module.css';
import Arrow from '@/common/components/svg/Arrow';
import { Link } from 'react-router-dom'

import userImage from '@/assets/foto-usuario.png'

function FriendsPage() {
  const onlineFriends = [
    { name: 'Ailton Rodrigues', status: 'Online agora' },
    { name: 'Eduardo Aguiar', status: 'Online agora' }
  ];

  const offlineFriends = [
    { name: 'Matheus Guilherme', status: 'Online pela última vez há 5 dias' },
    { name: 'Rafael Santana', status: 'Online pela última vez há 2 dias' },
    { name: 'Vitória Tirza', status: 'Online pela última vez há 7 dias' },
    { name: 'Yuri Ernani', status: 'Online pela última vez há 1 dia' }
  ];

  const Friend = ({ name, status }) => (
    <div className={styles.amigo}>
      <div className={styles.amigoFilho}>
        <div className={styles.amigoInfo}>
          <img src={userImage} alt='Foto de Usuário' className={styles.imagemUsuario}/>
          <div className={styles.amigoInfoTexto}>
            <p>{name}</p>
            <p className={styles.status}>{status}</p>
          </div>
        </div>
      </div>
      <Link to="/friendsprofile">
        <div className={styles.amigoFilho}>
          <input type='submit' value='Ver Perfil'/>
        </div>
      </Link>
    </div>
  );

  const FriendsList = ({ friends }) => (
    <div className={styles.amigosList}>
      <section className={styles.amigos}>
        {friends.map((friend, index) => (
          <Friend key={index} name={friend.name} status={friend.status} />
        ))}
      </section>
    </div>
  );

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to="/home">
          <Arrow/>
        </Link>
        <h1 className={styles.titulo}>Meus Amigos</h1>
      </header>
      <div className={styles.buscaAmigos}>
        <input type='search' className={styles.nomeAmigos} placeholder='Buscar Amigos'/>
      </div>
      <div className={styles.online}>
        <p>Online</p>
      </div>
      <FriendsList friends={onlineFriends} />
      <div className={styles.offline}>
        <p>Offline</p>
      </div>
      <FriendsList friends={offlineFriends} />
    </div>
  );
}

export default FriendsPage;
