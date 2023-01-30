import Head from "next/head";
import Header from "@/components/header/header";
import Footer from "@/components/footer";

export default function MentionsLegales() {
  return (
    <>
      <Head>
        <title>Mentions légales</title>
        <meta
          name="description"
          content="Notre école de kitesurf située à Brétignolles sur mer vous propose des stages avec des moniteurs diplômés depuis 2005."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="lg:container mx-auto">
        <Header></Header>
        <h1 className="px-2 md:px-4 text-3xl my-10">Mentions légales</h1>
        <p className="mb-8 pl-2 md:pl-4 text-xl lg:px-0">
          <b>Vendée Sports Océan</b> est une marque déposée par L’huillier David
          <br></br>
          Marque déposée et enregistrée à l’INPI sous le numero : 25968400017
          <br></br>
          David L’huillier le gérant est un entrepreneur individuel enregistré
          sous le siret : 47807250700039<br></br> Son siège sociale est au : 23
          rue de la chaize, 85470 Brem sur mer
        </p>
        <h1 className="px-2 md:px-4 text-3xl my-10">Contact</h1>
        <p className="mb-8 pl-2 md:pl-4 text-xl lg:px-0">
          Le gérant David L’HUILLIER est joignable au 06 60 99 47 33<br></br>
          contact@vendeesportsocean.fr
        </p>
        <h1 className="px-2 md:px-4 text-3xl my-10">Hébergeur</h1>
        <p className="mb-8 pl-2 md:pl-4 text-xl lg:px-0">
          <ul>
            <li>
              <b>Raison sociale</b>: Hostinger International Ltd.
            </li>
            <li>
              <b>Adresse</b>: 61 Lordou Vironos, Larnaca, CY, 6023
            </li>
            <li>
              <b>Pays</b>: Cyprus
            </li>
            <li>
              <b>TVA</b>: 10301365E
            </li>
            <li>
              <b>Téléphone</b>: +357 22232364
            </li>
          </ul>
        </p>
        <Footer></Footer>
      </div>
    </>
  );
}
