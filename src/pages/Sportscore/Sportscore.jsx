import React, { useState } from 'react';
import './Sportscore.css';

function UserCard({ name, photo, points, isFollowing, onFollowClick, onImageClick, onFileChange }) {
  return (
    <li>
      <span>{name}</span>
      <img
        src={photo}
        alt={`${name}'s photo`}
        onClick={onImageClick}
      />
      <input
        type="file"
        style={{ display: 'none' }}
        onChange={onFileChange}
      />
      <p>{name}</p>
      <span className="revenue">{points} PTS</span>
      <button onClick={onFollowClick}>
        {isFollowing ? 'Seguindo' : 'Seguir +'}
      </button>
    </li>
  );
}

function Sportscore() {
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
    yuri: 'fotousuario.png',
    ailton: 'fotousuario.png',
    igor: 'fotousuario.png',
    eduardo: 'fotousuario.png',
    matheus: 'fotousuario.png',
    vitoria: 'fotousuario.png',
    rafael: 'fotousuario.png',
    arthur: 'fotousuario.png',
    pedro: 'fotousuario.png',
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
    <div className="container">
      <header>
        <div className="back"> 
          <img src="Back.png" alt="Voltar"/>
        </div>
        <div className="title">
          <span>SportScore</span>
        </div>
      </header> 

      <main>
        <div className="podium">
          <ul>
            <UserCard
              name="Yuri Ernani"
              photo={userFotos.yuri}
              points="30"
              isFollowing={seguindo.yuri}
              onFollowClick={() => handleFollowClick('yuri')}
              onImageClick={() => handleImageClick('yuri')}
              onFileChange={(e) => handleFileChange(e, 'yuri')}
            />

            <UserCard
              name="Ailton Rodrigues"
              photo={userFotos.ailton}
              points="37"
              isFollowing={seguindo.ailton}
              onFollowClick={() => handleFollowClick('ailton')}
              onImageClick={() => handleImageClick('ailton')}
              onFileChange={(e) => handleFileChange(e, 'ailton')}
            />

            <UserCard
              name="Igor Ximenes"
              photo={userFotos.igor}
              points="25"
              isFollowing={seguindo.igor}
              onFollowClick={() => handleFollowClick('igor')}
              onImageClick={() => handleImageClick('igor')}
              onFileChange={(e) => handleFileChange(e, 'igor')}
            />
          </ul>
        </div>
      </main>

      <section>
        <ul className="ranking">
          <div className="row">
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
            <div className="nome-e-pontos">
              <div>
                <span>Eduardo Aguiar</span>
                <div className="col-2">
                  <span className="revenue"> 19 PTS</span>
                </div>
              </div>
            </div>
            <div className="container-seguir">
              <button onClick={() => handleFollowClick('eduardo')}>
                {seguindo.eduardo ? 'Seguindo' : 'Seguir +'}
              </button>
            </div>
          </div>

          <div className="row">
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
            <div className="nome-e-pontos">
              <div>

              <span>Matheus Guilherme</span>
                <div className="col-2">
                  <span className="revenue"> 16 PTS</span>
                </div>
              </div>
            </div>
            <div className="container-seguir">
              <button onClick={() => handleFollowClick('matheus')}>
                {seguindo.matheus ? 'Seguindo' : 'Seguir +'}
              </button>
            </div>
          </div>

          <div className="row">
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
            <div className="nome-e-pontos">
              <div>
                <span>Vitoria Tirza</span>
                <div className="col-2">
                  <span className="revenue"> 11 PTS</span>
                </div>
              </div>
            </div>
            <div className="container-seguir">
              <button onClick={() => handleFollowClick('vitoria')}>
                {seguindo.vitoria ? 'Seguindo' : 'Seguir +'}
              </button>
            </div>
          </div>

          <div className="row">
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
            <div className="nome-e-pontos">
              <div>
                <span>Rafael Santana</span>
                <div className="col-2">
                  <span className="revenue"> 8 PTS</span>
                </div>
              </div>
            </div>
            <div className="container-seguir">
              <button onClick={() => handleFollowClick('rafael')}>
                {seguindo.rafael ? 'Seguindo' : 'Seguir +'}
              </button>
            </div>
          </div>

          <div className="row">
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
            <div className="nome-e-pontos">
              <div>
                <span>Arthur Pacheco</span>
                <div className="col-2">
                  <span className="revenue"> 5 PTS</span>
                </div>
              </div>
            </div>
            <div className="container-seguir">
              <button onClick={() => handleFollowClick('arthur')}>
                {seguindo.arthur ? 'Seguindo' : 'Seguir +'}
              </button>
            </div>
          </div>

          <div className="row">
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
            <div className="nome-e-pontos">
              <div>
                <span>Pedro Melo</span>
                <div className="col-2">
                  <span className="revenue"> 0 PTS</span>
                </div>
              </div>
            </div>
            <div className="container-seguir">
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

export default Sportscore;