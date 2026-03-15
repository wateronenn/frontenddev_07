import { Pattaya } from "next/font/google"
import Image from "next/image"

export default async function venueDetailPage({params} : {params: Promise<{ vid: string }> }){
    const {vid} = await params

    const mockData = new Map()
    mockData.set("001" , {name : "The Bloom Pavilion" , img : "/img/RomacePavilion.jpg" , description : "wedding hall with antique style of decoration"})
    mockData.set("002",{name : "Spark Space" , img : "/img/ConcertHall.jpg", description :"conference hall for concert, show and musical entertainment" })
    mockData.set("003",{name : "The Grand Table" , img : "/img/DinnerMate.jpg" , description : "restaurant venue for big group dinner"})
    const venue = mockData.get(vid)

    if(!venue){
        return <div>Venue not found</div>
    }
    return (
        <main className="!my-10 text-center !p-5 ">
            <h1 className="text-white text-3xl font-medium !my-16"> Venue Info ID {vid} </h1>
            <div className="flex flex-row !p-5">
                <Image src = {venue.img}
                    alt = "venue Image"
                    sizes = "100vh"
                    width={0} height={0} className="rounded-lg w-[30%]"/>
                <div className="flex flex-col text-left !mx-10">
                    <div className="text-5xl font-bold text-blue-300">
                        {venue.name}
                    </div>
                    <div className="text-xl !pt-8 font-italic">
                        {venue.description}
                    </div>
                </div>
            </div>
        </main>
    )
}

export async function generatestaticParams(){
    return [{vid:"001"},{vid:"002"},{vid:"003"}]
}