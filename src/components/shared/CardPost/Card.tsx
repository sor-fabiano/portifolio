import Image from 'next/image';
import style from './Card.module.sass';

interface CardProps {
  imagePerfil: string;
  title: string;
  date: string;
  descricao: string;
  price?: string;
  imageContent: string;
}

const Card: React.FC<CardProps> = ({
  title,
  date,
  descricao,
  price,
  imagePerfil,
  imageContent,
}) => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.imgProfile}>
          <Image src={imagePerfil} alt="tt" width={45} height={45} />
        </div>
        <p>{title}</p>
      </div>
      <div className={style.body}>
        <p>{date}</p>
        <p>{descricao}</p>
        <div className={style.imgContainer}>
          <Image src={imageContent} alt="tt" width={500} height={500} />
        </div>
        <p>{price}</p>
      </div>
      <div className={style.footer}>
        <p>footer</p>
      </div>
    </div>
  );
};

export default Card;
