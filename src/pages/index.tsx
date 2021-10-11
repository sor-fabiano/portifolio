import Card from '../components/shared/CardPost/Card';
import NavBar from '../components/template/NavBar/NavBar';
import style from '../styles/custom.module.sass';

const Home: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className={style.mainContainer}>
        <section>
          <Card
            title="Dom Papito"
            date="2021-10-24"
            descricao="teste descricao"
            price="75.000"
            imagePerfil="/imgPerfil.png"
            imageContent="/product.png"
          />

          <Card
            title="Dom Papito"
            date="2021-10-24"
            descricao="teste descricao"
            price="75.000"
            imagePerfil="/imgPerfil.png"
            imageContent="/product.png"
          />
        </section>
      </div>
    </div>
  );
};

export default Home;
