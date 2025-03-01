import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'
 
type ResponseData = {
  message: string
}
 
export async function GET(request: NextApiRequest) {

  const response = {'message':'Hello'}
  return NextResponse.json({body:response})
}