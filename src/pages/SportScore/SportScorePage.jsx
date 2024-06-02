import React, { useState } from 'react';
import styles from './SportScorePage.module.css';

import fotoUsuario from '../../assets/foto-usuario.png';
import backImage from '../../assets/Back.png';

function SportScorePage() {
  const [seguindo, setSeguindo] = useState({
    yuri: false,
    ailton: false,
    igor: false,
    eduardo: false,
    matheus: false,
    vitoria: false,
    rafael: false,
    arthur: false,
    pedro: false,
  });

  const [userFotos, setUserFotos] = useState({
    yuri: fotoUsuario,
    ailton: fotoUsuario,
    igor: fotoUsuario,
    eduardo: fotoUsuario,
    matheus: fotoUsuario,
    vitoria: fotoUsuario,
    rafael: fotoUsuario,
    arthur: fotoUsuario,
    pedro: fotoUsuario,
  });

  const handleFollowClick = (name) => {
    setSeguindo((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  const handleFileChange = (event, name) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUserFotos((prevState) => ({
          ...prevState,
          [name]: e.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = (name) => {
    document.getElementById(`fileInput-${name}`).click();
  };

  return (
    <div className={styles.container}>
      <header>
        <div className={styles.back}>
          <img src={backImage} alt="Voltar" />
        </div>
        <div className={styles.title}>
          <span>SportScore</span>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.podium}>
          <ul className={styles.list}>
            <li className={styles.segundo}>
              <span>2°</span>
              <img
                id="imagem"
                src={userFotos.yuri}
                alt="2° lugar"
                onClick={() => handleImageClick('yuri')}
              />
              <input
                type="file"
                id="fileInput-yuri"
                style={{ display: 'none' }}
                onChange={(e) => handleFileChange(e, 'yuri')}
              />
              <p>Yuri Ernani</p>
              <span className={styles.revenue}>30 PTS</span>
              <button onClick={() => handleFollowClick('yuri')}>
                {seguindo.yuri ? 'Seguindo' : 'Seguir +'}
              </button>
            </li>

            <li className="primeiro">
              <span>1°</span>
              <img
                id="imagem"
                src={userFotos.ailton}
                alt="1° lugar"
                onClick={() => handleImageClick('ailton')}
              />
              <input
                type="file"
                id="fileInput-ailton"
                style={{ display: 'none' }}
                onChange={(e) => handleFileChange(e, 'ailton')}
              />
              <p>Ailton Rodrigues</p>
              <span className={styles.revenue}>37 PTS</span>
              <button onClick={() => handleFollowClick('ailton')}>
                {seguindo.ailton ? 'Seguindo' : 'Seguir +'}
              </button>
            </li>

            <li className={styles.terceiro}>
              <span>3°</span>
              <img
                id="imagem"
                src={userFotos.igor}
                alt="3° lugar"
                onClick={() => handleImageClick('igor')}
              />
              <input
                type="file"
                id="fileInput-igor"
                style={{ display: 'none' }}
                onChange={(e) => handleFileChange(e, 'igor')}
              />
              <p>Igor Ximenes</p>
              <span className={styles.revenue}>25 PTS</span>
              <button onClick={() => handleFollowClick('igor')}>
                {seguindo.igor ? 'Seguindo' : 'Seguir +'}
              </button>
            </li>
          </ul>
        </div>
      </main>

      <section className={styles.section}>
        <ul className={styles.ranking}>
          <div className={styles.row}>
            <p>4°</p>
            <img
              id="imagem"
              src={userFotos.eduardo}
              alt="4° lugar"
              onClick={() => handleImageClick('eduardo')}
            />
            <input
              type="file"
              id="fileInput-eduardo"
              style={{ display: 'none' }}
              onChange={(e) => handleFileChange(e, 'eduardo')}
            />
            <div className={styles.nomePontos}>
              <div>
                <span>Eduardo Aguiar</span>
                <div className={styles.colSecond}>
                  <span className={styles.revenue}> 19 PTS</span>
                </div>
              </div>
            </div>
            <div className={styles.containerSeguir}>
              <button onClick={() => handleFollowClick('eduardo')}>
                {seguindo.eduardo ? 'Seguindo' : 'Seguir +'}
              </button>
            </div>
          </div>

          <div className={styles.row}>
            <p>5°</p>
            <img
              id="imagem"
              src={userFotos.matheus}
              alt="5° lugar"
              onClick={() => handleImageClick('matheus')}
            />
            <input
              type="file"
              id="fileInput-matheus"
              style={{ display: 'none' }}
              onChange={(e) => handleFileChange(e, 'matheus')}
            />
            <div className={styles.nomePontos}>
              <div>
                <span>Matheus Guilherme</span>
                <div className={styles.colSecond}>
                  <span className={styles.revenue}> 16 PTS</span>
                </div>
              </div>
            </div>
            <div className={styles.containerSeguir}>
              <button onClick={() => handleFollowClick('matheus')}>
                {seguindo.matheus ? 'Seguindo' : 'Seguir +'}
              </button>
            </div>
          </div>

          <div className={styles.row}>
            <p>6°</p>
            <img
              id="imagem"
              src={userFotos.vitoria}
              alt="6° lugar"
              onClick={() => handleImageClick('vitoria')}
            />
            <input
              type="file"
              id="fileInput-vitoria"
              style={{ display: 'none' }}
              onChange={(e) => handleFileChange(e, 'vitoria')}
            />
            <div className={styles.nomePontos}>
              <div>
                <span>Vitoria Tirza</span>
                <div className={styles.colSecond}>
                  <span className={styles.revenue}> 11 PTS</span>
                </div>
              </div>
            </div>
            <div className={styles.containerSeguir}>
              <button onClick={() => handleFollowClick('vitoria')}>
                {seguindo.vitoria ? 'Seguindo' : 'Seguir +'}
              </button>
            </div>
          </div>

          <div className={styles.row}>
            <p>7°</p>
            <img
              id="imagem"
              src={userFotos.rafael}
              alt="7° lugar"
              onClick={() => handleImageClick('rafael')}
            />
            <input
              type="file"
              id="fileInput-rafael"
              style={{ display: 'none' }}
              onChange={(e) => handleFileChange(e, 'rafael')}
            />
            <div className={styles.nomePontos}>
              <div>
                <span>Rafael Santana</span>
                <div className={styles.colSecond}>
                  <span className={styles.revenue}> 8 PTS</span>
                </div>
              </div>
            </div>
            <div className={styles.containerSeguir}>
              <button onClick={() => handleFollowClick('rafael')}>
                {seguindo.rafael ? 'Seguindo' : 'Seguir +'}
              </button>
            </div>
          </div>

          <div className={styles.row}>
            <p>8°</p>
            <img
              id="imagem"
              src={userFotos.arthur}
              alt="8° lugar"
              onClick={() => handleImageClick('arthur')}
            />
            <input
              type="file"
              id="fileInput-arthur"
              style={{ display: 'none' }}
              onChange={(e) => handleFileChange(e, 'arthur')}
            />
            <div className={styles.nomePontos}>
              <div>
                <span>Arthur Pacheco</span>
                <div className={styles.colSecond}>
                  <span className={styles.revenue}> 6 PTS</span>
                </div>
              </div>
            </div>
            <div className={styles.containerSeguir}>
              <button onClick={() => handleFollowClick('arthur')}>
                {seguindo.arthur ? 'Seguindo' : 'Seguir +'}
              </button>
            </div>
          </div>

          <div className={styles.row}>
            <p>9°</p>
            <img
              id="imagem"
              src={userFotos.pedro}
              alt="9° lugar"
              onClick={() => handleImageClick('pedro')}
            />
            <input
              type="file"
              id="fileInput-pedro"
              style={{ display: 'none' }}
              onChange={(e) => handleFileChange(e, 'pedro')}
            />
            <div className={styles.nomePontos}>
              <div>
                <span>Pedro Melo</span>
                <div className={styles.colSecond}>
                  <span className={styles.revenue}> 3 PTS</span>
                </div>
              </div>
            </div>
            <div className={styles.containerSeguir}>
              <button onClick={() => handleFollowClick('pedro')}>
                {seguindo.pedro ? 'Seguindo' : 'Seguir +'}
              </button>
            </div>
          </div>
        </ul>
      </section>
    </div>
  );
}

export default SportScorePage;
