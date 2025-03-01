import { NextResponse } from "next/server";
import { routeCollection } from "../firestore/config";
import { addDoc,DocumentData,getDocs } from "firebase/firestore";

interface routeMessage {
    shape : string,
    name : string,
    number : string
}

export async function GET(){
    const querySnapshot = await getDocs(routeCollection)

    const arrays : Array<DocumentData> = []
    querySnapshot.forEach((doc)=>{
        arrays.push({...doc.data()})
    })

    return NextResponse.json({'Response':arrays})
}

export async function POST(request:Request){
    const message : routeMessage = await request.json()

    await addDoc(routeCollection,message)

    return NextResponse.json({'Message':'All good'})
}