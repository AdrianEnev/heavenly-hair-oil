import { NextResponse } from 'next/server'

export async function GET() {
    const requiredVars = [
        'SES_SMTP_HOST',
        'SES_SMTP_USER',
        'SES_SMTP_PASS',
        'EMAIL_FROM',
        'EMAIL_SUPPORT',
    ]
    
    const envStatus = requiredVars.map(name => ({
        name,
        set: !!process.env[name],
        preview: process.env[name] ? `${process.env[name]?.slice(0, 3)}...` : null
    }))
    
    const allSet = envStatus.every(v => v.set)
    
    return NextResponse.json({
        allEnvVarsSet: allSet,
        variables: envStatus,
        nodeEnv: process.env.NODE_ENV,
    }, { status: allSet ? 200 : 500 })
}
