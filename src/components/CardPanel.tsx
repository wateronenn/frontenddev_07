'use client'
import { mock } from 'node:test'
import Card from './Card'
import { useReducer } from 'react'
import Link from 'next/link'

export default function CarPanel(){
    const compareReducer = (compareList:Map<string,number>,action:{type:string,venueName:string,value:number}) => {
        const newState = new Map(compareList)
    
    switch (action.type) {

        case "set": {
            if (action.value === 0) {
                newState.delete(action.venueName)
            } else {
                newState.set(action.venueName, action.value)
            }
            return newState
        }

        case "remove": {
            newState.delete(action.venueName)
            return newState
        }

        default:
            return compareList
    }
    }
    const [compareList, dispatchCompare] = useReducer(compareReducer,new Map<string,number>([
        ["Spark Space", 0],
        ["The Grand Table", 0],
        ["The Bloom Pavilion", 0]
    ]))

    const mockData = [
        {vid:"001" , name : "The Bloom Pavilion" , img : "/img/RomacePavilion.jpg" , description : "wedding hall with antique style of decoration"},
        {vid:"002" , name : "Spark Space" , img : "/img/ConcertHall.jpg", description :"conference hall for concert, show and musical entertainment" },
        {vid:"003" , name : "The Grand Table" , img : "/img/DinnerMate.jpg" , description : "restaurant venue for big group dinner" }
    ]
    return (
        <div>
            <div style={{margin:"20px",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around",alignContent:"space-around"}}>
            {
                mockData.map((venueItem)=>(
                    <Link key = {venueItem.vid} href={`/venue/${venueItem.vid}`} className='w-1/5'>
                        <Card venueName={venueItem.name} imgSrc = {venueItem.img} venueDes={venueItem.description}
                        onCompare={(venue:string,value:number)=>{
                        dispatchCompare({type:'set',venueName:venue,value:value})
                        }}
                        />  
                    </Link>
                ))
            }
            </div>
            <div className='flex justify-center  w-full text-xl text-white'>
                Compare List : {compareList.size} 
            </div>
             {Array.from(compareList.entries()).map( ([venue,value]) =><div data-testid = {`${venue}`} key={venue} className='flex justify-center w-full text-l text-white'
             onClick={()=>dispatchCompare({type:'remove',venueName:venue,value:0})}>
                {venue} : {value} </div>)}
            
        </div>
    )
}