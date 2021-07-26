const express=require('express')
const app=express()
const crypto=require('crypto')
const octo=require('octokit')
const scomp=require('safe-compare')

app.listen(process.env.PORT)

app.post('/api/listener',function (req,res)
{
    const token=process.env.SECRET_TOKEN
    const recdHmac=req.get('X-Hub-Signature-256')
    const genHmac='sha256='+crypto.createHmac('sha256',token).update(req.body).digest('hex')
    if(scomp(recdHmac,genHmac))
    res.status(204).send();
    else
    res.status(403).send('Forbidden');
})