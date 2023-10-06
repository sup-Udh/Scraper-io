export default function datahandler(req: any, res: any){
    if(req.method === "POST"){
        const body = req.body.page;
        console.log(body);
    }

}