import {gql, useQuery} from "@apollo/client";
import {useRouter} from "next/router";
import Link from "next/link";
import {FilmQueryQuery} from "@/__generated__/graphql";
import styles from './[id].module.css'

export default function PagePlay() {
    const router = useRouter()
    const id = router.query.id
    const { loading, error, data } = useQuery<FilmQueryQuery>(GET_FILM, { variables: { id } })
    const film = data?.film

    if (error) return (null);
    if (loading) return (
        <div
            className="inline-block absolute left-1/2 top-1/2 -translate-1/2 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
            role="status">
              <span
                  className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
              >Loading...</span
              >
        </div>
    );
    return (
        <div className={`relative overflow-hidden h-screen`}>
            <Link href={'/'} className={`absolute left-6 top-4`} aria-label="Back">
                <svg className="w-10 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                          d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                          clip-rule="evenodd">
                    </path>
                </svg>
            </Link>
            <div className={`${styles.crawlContainer}`}>
                <div className={`${styles.crawl} news-cycle-bold`}>
                    {film?.openingCrawl?.split("\r\n").map((text, i)=> (
                        <div key={`${id}-${i}`} className={`w-full text-justify`}>
                            {text}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const GET_FILM = gql`
    query FilmQuery($id: ID = "1") {
        film(id: $id) {
            openingCrawl
        }
    }
`;