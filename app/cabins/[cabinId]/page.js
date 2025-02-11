import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import TextExpander from "@/app/_components/TextExpander";
import { getCabin, getCabins } from "@/app/_lib/data-service";

import { Suspense } from "react";
import Cabin from "@/app/_components/Cabin";

export const revalidate = 5;

export async function generateStaticParams(){
  const cabins = await getCabins();
  const ids = cabins.map(cabin=>({cabinId:String(cabin.id)}));
  
  return ids;
}

export async function generateMetadata({params}){
  const { name } = await getCabin(params.cabinId);
  
  return {title: `Cabin ${name}`};

}

export default async function Page({params}) {
    const cabin = await getCabin(params.cabinId);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      
      <Cabin cabin={cabin}/>

      <div>
        <h2 className="text-5xl font-semibold text-center">
        Reserve today {cabin.name}. Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin}/>
        </Suspense>
        
        
      </div>
    </div>
  );
}