"use client"
import { TypesComments } from "@/types/TypeComments"
import ClientButton from "./ClientButton"
function ClientComments({ comment }: { comment: TypesComments }) {
    return (
        <div>
            <div className="p-5 text-white bg-custom-pink rounded-3xl mt-7 overflow-hidden " key={comment.id}>
                <h2 className="uppercase text-xl ">{comment.id} {comment.email}</h2>
                <p className="text-base mt-2">{comment.body}</p>
                <ClientButton comment={comment} key={comment.id}></ClientButton>
            </div>
        </div>
    )

}

export default ClientComments