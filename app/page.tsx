import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import NewArtButton from "./components/NewArtButton";

export default async function Home() {

  const highlightsWithPicturesIds = await getHighlightsWithPictures()

  const art = await getNewArt(highlightsWithPicturesIds)
  //console.log(art)
  
  /*
  const art = {
    objectID: 591828,
    isHighlight: true,
    accessionNumber: '120.32P17 P17',
    accessionYear: '',
    isPublicDomain: true,
    primaryImage: 'https://images.metmuseum.org/CRDImages/li/original/li120.32P17 P17.R.jpg',
    primaryImageSmall: 'https://images.metmuseum.org/CRDImages/li/web-large/li120.32P17 P17.R.jpg',
    additionalImages: [],
    constituents: [
      {
        constituentID: 161420,
        role: 'Author',
        name: 'Andrea Palladio',
        constituentULAN_URL: 'http://vocab.getty.edu/page/ulan/500021650',
        constituentWikidata_URL: 'https://www.wikidata.org/wiki/Q177692',
        gender: ''
      }
    ],
    department: 'The Libraries',
    objectName: '',
    title: "I quattro libri dell'architettura di Andrea Palladio . . .",
    culture: "Venice: Domenico de'Franceschi, 1570",
    period: '',
    dynasty: '',
    reign: '',
    portfolio: '',
    artistRole: 'Author',
    artistPrefix: '',
    artistDisplayName: 'Andrea Palladio',
    artistDisplayBio: 'Italian, Padua 1508–1580 Vicenza',
    artistSuffix: '',
    artistAlphaSort: 'Palladio, Andrea',
    artistNationality: 'Italian',
    artistBeginDate: '1508',
    artistEndDate: '1580',
    artistGender: '',
    artistWikidata_URL: 'https://www.wikidata.org/wiki/Q177692',
    artistULAN_URL: 'http://vocab.getty.edu/page/ulan/500021650',
    objectDate: '1570',
    objectBeginDate: 1570,
    objectEndDate: 1570,
    medium: 'Illustrated book',
    dimensions: '4 pts. in 1 vol., 128 pp.; H: 4 3/4 in. (12 cm)',
    measurements: null,
    creditLine: 'Library Purchase',
    geographyType: '',
    city: '',
    state: '',
    county: '',
    country: '',
    region: '',
    subregion: '',
    locale: '',
    locus: '',
    excavation: '',
    river: '',
    classification: '',
    rightsAndReproduction: '',
    linkResource: '',
    metadataDate: '2021-12-28T04:39:58.65Z',
    repository: 'Metropolitan Museum of Art, New York, NY',
    objectURL: 'https://www.metmuseum.org/art/collection/search/591828',
    tags: null,
    objectWikidata_URL: 'https://www.wikidata.org/wiki/Q29385985',
    isTimelineWork: false,
    GalleryNumber: ''
  }
  */

  return (
    <main className="min-h-screen relative left-1/2 -translate-x-1/2 w-5/6 flex flex-col pb-12 md:h-screen md:pb-0 md:flex-row">
      <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
        <img src={art.primaryImage} className="w-full h-full object-contain"></img>
      </div>
      <div className="relative w-full md:w-1/2 md:p-8 flex flex-col justify-center">
        <h1 className="text-3xl md:text-5xl font-bold">{art.title}</h1>
        <p className="mt-2"><span className="text-sm">{art.artistRole}</span>: <span className="text-lg font-semibold">{art.artistDisplayName}</span></p>
        <p><span className="text-sm">Date completed:</span> <span className="text-lg font-semibold">{art.objectEndDate}</span></p>
        <p><span className="text-sm">Medium:</span> <span className="text-lg font-semibold">{art.medium}</span></p>
        <h2 className="text-xl font-bold mt-6">Useful Links</h2>
        <a href={art.objectWikidata_URL} className="mt-2 hover:underline" target="_blank">Artwork's wikidata page<FaArrowUpRightFromSquare className="inline ml-1 mb-0.5" /></a>
        <a href={art.artistWikidata_URL} className="mt-1 hover:underline" target="_blank">Artwork's Met museum page<FaArrowUpRightFromSquare className="inline ml-1 mb-0.5" /></a>
        <a href={art.artistWikidata_URL} className="mt-1 hover:underline" target="_blank">Artist's wikidata page<FaArrowUpRightFromSquare className="inline ml-1 mb-0.5" /></a>
        <NewArtButton />
      </div>
    </main>
  );
}

const getHighlightsWithPictures = async () => {
  const res = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&isHighlight=true&q=%22%22')
  const data = await res.json()

  return data.objectIDs;
} 

const getNewArt = async (ids: number[]) => {
  let data: any = {};

  let imageUrl = "";
  while (imageUrl === "") {
    const randomIndex = Math.floor(Math.random() * ids.length)
    const id = ids[randomIndex]

    const res = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + id)
    const tempData = await res.json()

    if (tempData.primaryImage !== "") {
      imageUrl = data.primaryImage;
      data = tempData;
    }
  }

  return data;
}


//"https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg"
//"https://images.metmuseum.org/CRDImages/dp/original/DP828191.jpg"