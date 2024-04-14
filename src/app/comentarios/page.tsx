
import { fetchApi } from "@/components/Api";
import { TypesComments } from "@/types/TypeComments";
import ClientComments from "@/components/common/ClientComments";

async function CommentsPage(){
    const comments=await fetchApi();
    return(
        <main className=" bg-slate-900 text-white  p-10 ">
            <p className="font-bold text-5xl bg-black p-5 text-center">PERFILES DE API</p>
            {comments.map((comment:TypesComments)=>(
                <ClientComments comment={comment} key={comment.id}></ClientComments>
            ))}
        </main>
    )
}

export default CommentsPage;