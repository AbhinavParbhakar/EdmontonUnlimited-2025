import { NextResponse } from 'next/server'
 
 
export async function GET() {

  const response = {'message':'Hello'}
  return NextResponse.json({body:response})
}
