import SvgComponent from "@/assets/loading";
export default function Loading() {
    return (
        <>
        <div className="grid place-items-center" style={{height: '85vh'}}>
            <div className="">
                <section className='flex flex-col justify-center items-center'>
              <SvgComponent className="my-2 w-12"/>
                 
                    <h1 className="text-sm text-neutral-700">Please wait...</h1>
                  
                </section>
            </div>
        </div>
        </>
    );
}