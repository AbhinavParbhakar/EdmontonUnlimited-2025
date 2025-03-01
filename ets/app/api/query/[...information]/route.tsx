import { NextResponse } from "next/server"
import { detailCollection,postCollection } from "../../firestore/config"
import {query,where, Timestamp, getDocs, GeoPoint, doc, getDoc,} from 'firebase/firestore'

interface PostInterface {
    timestamp: Timestamp,
    location:GeoPoint,
    categories: Array<string>,
    detailFK : string,
    routeFK : string
}


export async function GET(request:Request){
    const params = request.url.split('/')
    const startTime = new Date(params[params.length - 2])
    const timeJump = parseInt(params[params.length - 1],10)
    const endTime = new Date(startTime.getTime() + timeJump * 60000)


    const q = query(postCollection,where('timestamp','>=',startTime),where('timestamp',"<=",endTime))

    const querySnapshot = await getDocs(q)

    const results = []

    for (const doci of querySnapshot.docs) {
        // Type assertion to PostInterface and adding post_id
        const doc_return = { ...doci.data() as PostInterface, post_id: doci.id };
        
        // Access the detail collection using the detailFK
        const detailRef = doc(detailCollection, doc_return.detailFK);
        const detailSnapShot = await getDoc(detailRef);
        
        results.push({...detailSnapShot.data()})
      }

      return NextResponse.json({"Message":results})
}