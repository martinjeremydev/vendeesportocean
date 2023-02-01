import Head from "next/head";
import Header from "@/components/header/header";
import ImageCard from "@/components/image-card";
import Footer from "@/components/footer";
import {
  faCar,
  faHouse,
  faPeopleGroup,
  faTimes,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vendée sports océan</title>
        <meta
          name="description"
          content="Notre école de kitesurf située à Brétignolles sur mer vous propose des stages avec des moniteurs diplômés depuis 2005."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="lg:container mx-auto">
        <Header></Header>
        <h2 className="text-3xl text-center my-10 animate__animated animate__fadeIn">
          Qui sommes nous ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
          <div className="flex flex-col px-8 animate__animated animate__fadeIn animate__delay-1s">
            <span className="text-center pb-6">
              <FontAwesomeIcon
                icon={faPeopleGroup}
                className="text-5xl mr-4 text-teal-600"
              />
            </span>
            VSO et son équipe de professionnels vous accueillent, quel que soit
            votre niveau, pour découvrir nos différentes activités.
          </div>
          <div className="flex flex-col px-8 mt-4 md:mt-0 animate__animated animate__fadeIn animate__delay-2s">
            <span className="text-center pb-6">
              <FontAwesomeIcon
                icon={faCar}
                className="text-5xl mr-4 text-cyan-600"
              />
            </span>
            A 1h de Nantes et 3h30 de Paris en TGV, l’école est idéalement
            située à Brétignolles-sur-mer, entre Saint-Gilles-Croix-de-Vie et
            les Sables d’Olonne.
          </div>
          <div className="flex flex-col px-8 mt-4 md:mt-0 lg:mt-0 md:justify-self-center animate__animated animate__fadeIn animate__delay-3s">
            <span className="text-center pb-6">
              <FontAwesomeIcon
                icon={faHouse}
                className="text-5xl mr-4 text-violet-600"
              />
            </span>
            Nous proposons également des hébergements dans un quartier calme à
            quelques minutes du spot de kite et de nombreuses activités qu’offre
            notre belle région.
          </div>
        </div>
        <h2 className="text-3xl text-center my-10">Nos prestations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          <div className="mx-auto animate__animated animate__fadeIn animate__delay-1s">
            <ImageCard
              title="Initiation"
              imageSrc="/initiation.jpeg"
              color="bg-teal-200"
              time={null}
              persons={null}
              price={null}
              description={null}
            ></ImageCard>
          </div>
          <div className="mx-auto mt-4 md:mt-0 md:ml-4 animate__animated animate__fadeIn animate__delay-2s">
            <ImageCard
              title="Evolution"
              imageSrc="/evolution.jpeg"
              color="bg-cyan-200"
              time={null}
              persons={null}
              price={null}
              description={null}
            ></ImageCard>
          </div>
          <div className="mx-auto mt-4 lg:mt-0 animate__animated animate__fadeIn animate__delay-3s">
            <ImageCard
              title="Perfectionnement"
              imageSrc="/perfectionnement.jpeg"
              color="bg-violet-200"
              time={null}
              persons={null}
              price={null}
              description={null}
            ></ImageCard>
          </div>
        </div>
        <iframe
          className="windguru"
          seamless={true}
          src="https://www.windguru.cz/widget-fcst-iframe.php?s=48521&amp;m=100&amp;uid=wg_fwdg_48521_100_1668462095271&amp;wj=knots&amp;tj=c&amp;waj=m&amp;odh=0&amp;doh=24&amp;fhours=96&amp;hrsm=2&amp;vt=forecasts&amp;lng=fr&amp;idbs=1&amp;p=WINDSPD,GUST,SMER,TMP,CDC,TCDC,APCP1s&amp;hostname=vendeesportsocean.com&amp;url=https%3A%2F%2Fvendeesportsocean.com%2F"
          id="iFrameResizer01"
        ></iframe>
        <Footer></Footer>
      </div>
    </>
  );
}
