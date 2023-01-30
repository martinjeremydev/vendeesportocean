import Head from "next/head";
import Header from "@/components/header/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShip,
  faStar,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";

export default function Ecole() {
  return (
    <>
      <Head>
        <title>L&apos;école</title>
        <meta
          name="description"
          content="Notre école de kitesurf située à Brétignolles sur mer vous propose des stages avec des moniteurs diplômés depuis 2005."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="lg:container mx-auto">
        <Header></Header>
        <h2 className="text-3xl text-center my-10 animate__animated animate__fadeIn animate__delay-1s">
          L’ECOLE VENDEE SPORTS OCEAN
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col px-8 text-justify animate__animated animate__fadeIn animate__delay-1s">
            <span className="text-center pb-6">
              <FontAwesomeIcon
                icon={faStar}
                className="text-5xl mr-4 text-teal-600"
              />
            </span>
            Notre école de kitesurf depuis 2005 à Brétignolles sur mer,
            bénéficie d’une zone réservée sur la plage des Dunes 2. Cet espace
            sécurisé, associé à une pédagogie individualisée en groupe restreint
            garanti un apprentissage et une progression rapide.
          </div>
          <div className="flex flex-col mt-4 md:mt-0 px-8 text-justify animate__animated animate__fadeIn animate__delay-2s">
            <span className="text-center pb-6">
              <FontAwesomeIcon
                icon={faUserGraduate}
                className="text-5xl mr-4 text-cyan-600"
              />
            </span>
            Nous fournissons tout le matériel et les équipements, en
            collaboration avec les meilleures marques. Les moniteurs, diplômés
            d’état apporteront toute leur expertise afin de répondre à vos
            objectifs, votre projet, et de faire de votre stage une expérience
            inoubliable.
          </div>
          <div className="flex flex-col mt-4 md:mt-0 px-8 text-justify animate__animated animate__fadeIn animate__delay-3s">
            <span className="text-center pb-6">
              <FontAwesomeIcon
                icon={faShip}
                className="text-5xl mr-4 text-violet-600"
              />
            </span>
            L’école dispose aussi d’un bateau pour les cours en pleine eau les
            jours de vent de terre ou lorsque l’état de la mer permet une sortie
            au large.<br></br> Il sert aussi de simulateur kite pour
            l’apprentissage du waterstart et de la glisse.
          </div>
        </div>
        <h2 className="text-3xl text-center my-10 animate__animated animate__fadeIn animate__delay-1s">
          Nos plus
        </h2>
        <div className="px-16 md:px-48 grid grid-cols-1 md:grid-cols-3 gap-20 mb-8">
          <div className="animate__animated animate__fadeIn animate__delay-1s">
            <Image
              src="/ecole4.jpeg"
              width="400"
              height="400"
              alt=""
              className="rounded-full"
            ></Image>
            <h4 className="text-center mt-4">Matériel récent et adapté</h4>
          </div>
          <div className="animate__animated animate__fadeIn animate__delay-2s">
            <Image
              src="/ecole5.jpeg"
              width="400"
              height="400"
              alt=""
              className="rounded-full"
            ></Image>
            <h4 className="text-center mt-4">Encadrement bateau</h4>
          </div>
          <div className="animate__animated animate__fadeIn animate__delay-3s">
            <Image
              src="/ecole6.jpeg"
              width="400"
              height="400"
              alt=""
              className="rounded-full"
            ></Image>
            <h4 className="text-center mt-4">Liaison radio</h4>
          </div>
        </div>
        <div className="text-center my-12">
          <a href="test" className="book-button rounded-lg">
            Réserver mon stage
          </a>
        </div>
        <p className="p-8 mb-6">
          Vendée Sports Océan dispense des cours de kitesurf entre le mois de
          mars et novembre.<br></br>Les séances ont une durée de 2 à 3 heures en
          fonction de la formule choisie.<br></br> Les horaires des cours seront
          dépendantes de la météo pour bénéficier des meilleures conditions et
          communiquées la veille aux stagiaires.<br></br> Nous limitons les
          groupes à 3 élèves, afin de mettre en place une pédagogie
          individualisée et permettre une progression rapide de chacun.<br></br>{" "}
          Le matériel et les équipements sont adaptés pour tous les gabarits et
          tous les niveaux.<br></br>
          Les élèves sont en liaison radio avec le moniteur pour des retours et
          des conseils instantané et assurer la sécurité.<br></br> Le site,
          balisé est sécurisé.
        </p>
        <h2 className="text-3xl text-center my-10">Pour nous trouver</h2>
        <iframe
          loading="lazy"
          seamless={true}
          className="gmap"
          src="https://www.google.com/maps/d/embed?mid=1wUJtpMua5OEf_5j48WeVNw5YgmI&amp;hl=fr&amp;ehbc=2E312F"
        ></iframe>
        <Footer></Footer>
      </div>
    </>
  );
}
