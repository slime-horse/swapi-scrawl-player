import {StaticImageData} from "next/image";

import aNewHopeBackdrop from '../../public/a-new-hope/backdrop.jpg'
import aNewHopePoster from '../../public/a-new-hope/poster.jpg'
import aNewHopeLogo from '../../public/a-new-hope/logo.png'

import empireStrikesBackBackdrop from '../../public/empire-strikes-back/backdrop.jpg'
import empireStrikesBackPoster from '../../public/empire-strikes-back/poster.jpg'
import empireStrikesBackLogo from '../../public/empire-strikes-back/logo.png'

import returnOfTheJediBackdrop from '../../public/return-of-the-jedi/backdrop.jpg'
import returnOfTheJediPoster from '../../public/return-of-the-jedi/poster.jpg'
import returnOfTheJediLogo from '../../public/return-of-the-jedi/logo.png'

import thePhantomMenaceBackdrop from '../../public/the-phantom-menace/backdrop.jpg'
import thePhantomMenacePoster from '../../public/the-phantom-menace/poster.jpg'
import thePhantomMenaceLogo from '../../public/the-phantom-menace/logo.png'

import attackOfTheClonesBackdrop from '../../public/attack-of-the-clones/backdrop.jpg'
import attackOfTheClonesPoster from '../../public/attack-of-the-clones/poster.jpg'
import attackOfTheClonesLogo from '../../public/attack-of-the-clones/logo.png'

import revengeOfTheSithBackdrop from '../../public/revenge-of-the-sith/backdrop.jpg'
import revengeOfTheSithPoster from '../../public/revenge-of-the-sith/poster.jpg'
import revengeOfTheSithLogo from '../../public/revenge-of-the-sith/logo.png'

export type FilmImages = {
    backdrop: StaticImageData,
    poster: StaticImageData,
    logo: StaticImageData
}

const allFilmImages: {[key: string]: FilmImages} = {
    "ZmlsbXM6MQ==": { /* A New Hope */
        backdrop: aNewHopeBackdrop,
        poster: aNewHopePoster,
        logo: aNewHopeLogo,
    },
    "ZmlsbXM6Mg==": { /* The Empire Strikes Back */
        backdrop: empireStrikesBackBackdrop,
        poster: empireStrikesBackPoster,
        logo: empireStrikesBackLogo,
    },
    "ZmlsbXM6Mw==": { /* Return of the Jedi */
        backdrop: returnOfTheJediBackdrop,
        poster: returnOfTheJediPoster,
        logo: returnOfTheJediLogo,
    },
    "ZmlsbXM6NA==": { /* The Phantom Menace */
        backdrop: thePhantomMenaceBackdrop,
        poster: thePhantomMenacePoster,
        logo: thePhantomMenaceLogo,
    },
    "ZmlsbXM6NQ==": { /*Attack of the Clones */
        backdrop: attackOfTheClonesBackdrop,
        poster: attackOfTheClonesPoster,
        logo: attackOfTheClonesLogo,
    },
    "ZmlsbXM6Ng==": { /* Revenge of the Sith */
        backdrop: revengeOfTheSithBackdrop,
        poster: revengeOfTheSithPoster,
        logo: revengeOfTheSithLogo,
    },
}

export function getFilmImages(id: string): FilmImages {
    return allFilmImages[id];
}