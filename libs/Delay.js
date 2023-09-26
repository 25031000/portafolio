export default function serveDelay() {
    return new Promise((res, rej)=>{
        setTimeout(() => {
            res(true)
        }, 1500);
    })
}