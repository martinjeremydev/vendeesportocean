import Head from "next/head";
import Header from "@/components/header/header";
import ImageCard from "@/components/image-card";
import Footer from "@/components/footer";

export default function Stages() {
  return (
    <>
      <Head>
        <title>Nos stages</title>
        <meta
          name="description"
          content="Notre école de kitesurf située à Brétignolles sur mer vous propose des stages avec des moniteurs diplômés depuis 2005."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="lg:container mx-auto">
        <Header></Header>
        <h2 className="text-3xl text-center my-10">Nos prestations</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mb-8">
          <div className="mx-auto mb-4">
            <ImageCard
              title="Initiation"
              imageSrc="/initiation.jpeg"
              time="2 SEANCES DE 2H"
              persons="4 ELEVES MAXI"
              price="150 euros"
              color="bg-teal-200"
              description="Votre premier stage de kitesurf ou pour une reprise en douceur !<br><br>
L’objectif de ce stage est d’apprendre à piloter des ailes de kitesurf, découvrir les aspects théoriques de la pratique, gérer son équilibre dans l’eau et chausser sa planche.<br><br>
-Préparer son matériel<br>
-Se familiariser avec les procédures de sécurité<br>
-Apprendre à piloter et à contrôler la traction de l’aile<br>
-Décoller et reposer l’aile<br>
-Waterstart et premières glisses<br>"
            ></ImageCard>
          </div>
          <div className="mx-auto mb-4">
            <ImageCard
              title="Evolution"
              imageSrc="/evolution.jpeg"
              time="3 SEANCES DE 3H"
              persons="3 ELEVES MAXI"
              price="350 euros"
              color="bg-cyan-200"
              description="De la première mise à l’eau à vos premiers bords en autonomie.<br><br>
            Nous aborderons durant ce stage toutes les étapes pour faire de vous un rider responsable et vous permettre de construire par la suite votre apprentissage de manière autonome et en sécurité.<br><br>
            
            -Waterstart et maintien de glisse<br>
            -Gestion de l’équilibre et des appuis<br>
            -Maintenir un cap<br>
            -Transitions, manoeuvres<br>
            -Apprentissage des règles de priorités<br>
            -Analyse météo, spot et sites de pratiques<br>"
            ></ImageCard>
          </div>
          <div className="mx-auto mb-4 lg:mb-0">
            <ImageCard
              title="Perfectionnement"
              imageSrc="/perfectionnement.jpeg"
              time="2 SEANCES DE 3H"
              persons="3 ELEVES MAXI"
              price="240 euros"
              color="bg-violet-200"
              description="Ces séances sont proposées en complément du stage évolution<br><br>
            On détermine ensemble les objectifs à atteindre pour répondre à vos attentes.<br><br>
            Que ce soit pour améliorer votre conduite de planche, remonter au vent, travailler les transitions, ou sauter, nous mettrons en place un programme adapté. "
            ></ImageCard>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
