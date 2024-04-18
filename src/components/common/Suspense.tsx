import { TypesComments } from "@/types/TypeComments";
import { fetchApi } from "../Api";
import ClientButton from "./ClientButton";

async function SuspenseComments() {
    const data = await fetchApi();
    await new Promise((resolve) =>setTimeout(resolve, 3000))
    return (
        <div className=" flex flex-col">
            {data.map((comment:TypesComments) => (
                <div className="p-8 text-white bg-green-400 rounded-3xl mt-5 max-md:" key={comment.id}>
                    <h2 className="uppercase text-xl ">{comment.id} {comment.email}</h2>
                    <p className="text-base mt-2">{comment.body}</p>
                    <ClientButton comment={comment} key={comment.id}></ClientButton>
                </div>
            ))}
        </div>
    )
}

export default SuspenseComments;