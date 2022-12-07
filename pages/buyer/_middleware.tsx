import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest, ev: NextFetchEvent) {
    const token =  req.cookies.token ? req.cookies.token : ''
    const user =  req.cookies.user ? JSON.parse(req.cookies.user) : ''
    if(token == '' || user?.userType!='Buyer'){
        const url = req.nextUrl.clone()
        url.pathname = '/sign-in'
        return NextResponse.redirect(url);;
    }
    return NextResponse.next();
}