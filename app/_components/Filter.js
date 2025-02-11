"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {

    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const filterHandler = (filter)=>{
        const params = new URLSearchParams(searchParams);
        params.set('capacity', filter);
        router.replace(`${pathname}?${params.toString()}`, {scroll:false});
    }
    return (
        <div className="border border-primary-800 flex">
            <button onClick={()=> filterHandler('all')} className="btn px-5 py-2 hover:bg-primary-700">
                All
            </button>
            <button onClick={()=> filterHandler('small')} className="btn px-5 py-2 hover:bg-primary-700">
                Small
            </button>
            <button onClick={()=> filterHandler('medium')} className="btn px-5 py-2 hover:bg-primary-700">
                Medium
            </button>
            <button onClick={()=> filterHandler('large')} className="btn px-5 py-2 hover:bg-primary-700">
                Large
            </button>
            
        </div>
    )
}

export default Filter;
