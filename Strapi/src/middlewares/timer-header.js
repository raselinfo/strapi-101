module.exports=()=>{
    return async(ctx,next)=>{
        const start=Date.now()
        await next()
        const delta=Date.now()-start
        ctx.set('X-Response-Time',`${delta}ms`)
    }
}