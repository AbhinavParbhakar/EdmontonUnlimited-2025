import {NextResponse } from 'next/server';
import { postCollection,detailCollection,routeCollection } from '../firestore/config';
import { addDoc, Timestamp, GeoPoint, query, getDocs } from 'firebase/firestore';


interface ComplaintInterface{
    timestamp : string,
    Lat: number,
    Long: number,
    categories: Array<string>,
    comment: string,
    routeID:string
}

interface DetailInterface {
    categories: Array<string>,
    comment: string,
    severity: string
}

interface PostInterface {
    timestamp: Timestamp,
    location:GeoPoint,
    categories: Array<string>,
    detailFK : string,
    routeFK : string
}

export async function POST(request:Request){
    const message: ComplaintInterface = await request.json()

    const detailsInfo : DetailInterface = {categories:message.categories,
        comment:message.comment,
        severity:"NA"
    }

    const detailDocRef = await addDoc(detailCollection,detailsInfo)
    const postInfo: PostInterface = {
        timestamp: Timestamp.fromDate(new Date(message.timestamp)),
        location : new GeoPoint(message.Lat,message.Long),
        categories : message.categories,
        detailFK : detailDocRef.id,
        routeFK : message.routeID
    }

    
    const postDocRef = await addDoc(postCollection,postInfo)

    return NextResponse.json({'Message:' : "Form Info added"})
}