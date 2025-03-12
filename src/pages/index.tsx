import Image from 'next/image'
import {gql, useQuery} from "@apollo/client";
import {useState} from "react";
import {getFilmImages} from "@/app/get-film-images";
import Link from "next/link";
import {AllFilmsQueryQuery, Film} from "@/__generated__/graphql";
import styles from './index.module.css'
import {formatDateToDisplay} from "@/app/format-date";

export default function PageHome() {
    // Data Loading
    const {loading, error, data} = useQuery<AllFilmsQueryQuery>(GET_FILMS);

    // State
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Loading/Error
    if (loading || error || !data) return (null)

    // Computed Values
    const films = data?.allFilms?.films || []
    const featuredFilm = films[selectedIndex]
    const featureImages = !!featuredFilm && getFilmImages(featuredFilm.id);
    const releaseDate = formatDateToDisplay(new Date(featuredFilm?.releaseDate || ''))

    // State Error
    if (!featuredFilm || !featureImages) return (null)
    return (
        <div className={`flex flex-col content-stretch h-screen`}> {/* Page */}
            <div className={`flex-auto grow shrink relative`}> {/* Feature */}
                <div className={`${styles.featuredForeground} flex flex-col items-center md:items-start absolute bottom-0 left-0 z-10 p-8 md:p-16 w-full white`}> {/* Details */}
                    <Image
                        className={`w-60 mb-4`}
                        src={featureImages.logo.src}
                        width={featureImages.logo.width}
                        height={featureImages.logo.height}
                        alt={featuredFilm.title || ''}
                    />
                    <div>Released: {releaseDate}</div> {/* Title */}
                    <div>Directed by: {featuredFilm.director}</div>
                    <Link className={`mt-6 block rounded-xl text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-bold rounded-lg text-lg text px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700`} href={`/play/${featuredFilm.id}`}>Play</Link>
                </div>
                <Image
                    fetchPriority={'high'}
                    className={`absolute top-0  left-0 w-full h-full object-cover z-0`}
                    src={featureImages.backdrop.src}
                    width={featureImages.backdrop.width}
                    height={featureImages.backdrop.height}
                    alt={featuredFilm.title || ''}
                />
            </div>
            <div className={`grow-0 shrink-0 bg-gray-800`}> {/* Tray */}
                <div className={`flex overflow-x-scroll snap-x snap-mandatory overflow-scroll  md:grid grid-flow-col gap-4 p-4`}>
                    {films.map((film, index) => (
                        <TrayPoster
                            key={film?.id}
                            film={film}
                            handleClick={() => { setSelectedIndex(index) }}
                            isSelected={index === selectedIndex}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

type TrayPosterProps = {
    film: Film | null,
    isSelected: boolean,
    handleClick: () => void
}

function TrayPoster({film, handleClick, isSelected }: TrayPosterProps) {
    const images = getFilmImages(film?.id || '');
    const selectedClass = isSelected ? 'outline-2' : ''

    return (
        <div className={`${selectedClass} snap-center rounded-xl shrink-0 grow-0 w-2/5 md:w-auto overflow-hidden hover:outline-2 hover:outline-gray-400 outline-foreground float-left md:w-auto`}> {/* Poster Container */}
            <link rel="prefetch" href={images.backdrop.src}/>
            <link rel="prefetch" href={images.logo.src}/>
            <button className={`flex cursor-pointer`} onClick={handleClick}>
                <Image
                    src={images.poster.src}
                    width={images.poster.width}
                    height={images.poster.height}
                    alt={film?.title || ''}

                />
            </button>
        </div>
    )
}

const GET_FILMS = gql`
    query AllFilmsQuery {
        allFilms {
            films {
                title
                director
                releaseDate
                id
            }
        }
    }
`;


