import {query,where,getDocs} from "firebase/firestore"
import { routeCollection } from "../../firestore/config"
import { NextResponse } from "next/server"



export async function GET(request:Request){
    const paths:Array<String> = request.url.split("/")
    const name = paths[paths.length - 1]
    const q = query(routeCollection,where('name','==',name))
    const queryResponse = await getDocs(q)
    var routeData;
    if (queryResponse.empty){
        return NextResponse.json({"Message":"User not found"},{status:455})
    }else{
        queryResponse.forEach((each) =>{
            routeData = {...each.data(),"id":each.id}
        })
    }
    return NextResponse.json(routeData)
}