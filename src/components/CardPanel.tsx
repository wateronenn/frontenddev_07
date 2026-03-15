'use client'
import Card from './Card'
import { useReducer } from 'react'

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
    return (
        <div>
            <div style={{margin:"20px",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around",alignContent:"space-around"}}>
            <Card venueName="Spark Space" imgSrc = "/img/ConcertHall.jpg" venueDes="conference hall for concert, show and musical entertainment" 
                onCompare={(venue:string,value:number)=>{
                    dispatchCompare({type:'set',venueName:venue,value:value})
                }}
            />
            <Card venueName="The Grand Table" imgSrc = "/img/DinnerMate.jpg" venueDes="restaurant venue for big group dinner" 
                onCompare={(venue:string,value:number)=>{
                    dispatchCompare({type:'set',venueName:venue,value:value})
                }}
            />
            <Card venueName="The Bloom Pavilion" imgSrc = "/img/RomacePavilion.jpg" venueDes="wedding hall with antique style of decoration" 
                onCompare={(venue:string,value:number)=>{
                    dispatchCompare({type:'set',venueName:venue,value:value})
                }}
            />  
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