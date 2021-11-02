import { GetStaticPaths, GetStaticProps } from 'next';

import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';
import { Header } from '../../components/Header/index';
import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Header />

      <img
        src="/images/Banner.png"
        alt="Space Traveling"
        className={styles.banner}
      />
      <main className={commonStyles.container}>
        <div className={styles.post}>
          <div className={styles.postTop}>
            <h1>Algum Titulo de exemplo</h1>
            <ul>
              <li>
                <FiCalendar />
                12 Out 2021
              </li>
              <li>
                <FiUser />
                Rodrigo Mesquita
              </li>
              <li>
                <FiClock />5 min
              </li>
            </ul>
          </div>
          <article>
            <h2>Tituli Seção</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repudiandae <strong> ducimus ipsam unde totam sit</strong> nisi
              aut ratione modi voluptas blanditiis ullam commodi similique cum
              ut est molestiae facere quo nam a quas, quibusdam voluptatibus.
              Blanditiis omnis possimus nobis quia corrupti asperiores sint id
              quam facere ab!
              <a href="#">
                Sed illum, impedit expedita nulla eveniet, eaque debitis
                exercitationem
              </a>
              molestias maxime laudantium ipsam dolore mollitia sapiente aut
              voluptatibus, officia earum quaerat! Consectetur dolores, itaque
              corrupti vitae modi voluptatum, eius obcaecati, deserunt ratione
              eveniet quae.
            </p>
          </article>
        </div>
      </main>
    </>
  );
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient();
//   const posts = await prismic.query(TODO);

//   // TODO
// };

// export const getStaticProps = async context => {
//   const prismic = getPrismicClient();
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };
