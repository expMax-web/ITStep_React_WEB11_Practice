import styles from "./Biography.module.scss";

export const Biography = () => {
  return (
    <main className={styles.MainContainer}>
      <figure>
        <p>
          <img
            className={styles.ArtistAvatar}
            src="./Autoportrait_de_Vincent_van_Gogh.jfif"
            alt="Autoportrait_de_Vincent_van_Gogh"
          />
        </p>
        <figcaption className={styles.ArtistName}>Винсент Ван Гог</figcaption>
      </figure>
      <div className={styles.BiographyContent}>
        <p>
          Винсе́нт Ви́ллем Ван Гог (нидерл. Vincent Willem van Gogh,
          нидерландский: [ˈvɪnsənt ˈʋɪləm vɑŋ ˈɣɔx] (Звук слушать); 30 марта
          1853, Грот-Зюндерт[en], Нидерланды — 29 июля 1890, Овер-сюр-Уаз,
          Франция) — нидерландский художник-постимпрессионист, чьи работы
          оказали вневременное влияние на живопись XX века. За десять с
          небольшим лет он создал более 2100 произведений, включая около 860
          картин маслом. Среди них — портреты, автопортреты, пейзажи, натюрморты
          и панно с изображением оливковых деревьев, кипарисов, полей пшеницы и
          подсолнухов. При жизни был практически обойдён вниманием критиков.
        </p>
      </div>
    </main>
  );
};
