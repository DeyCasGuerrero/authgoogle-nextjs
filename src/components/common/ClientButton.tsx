"use client"
import Link from "next/link";
import { TypesComments } from "@/types/TypeComments";

export default function ClientButton({ comment }:{comment:TypesComments}) {
    return (
        <Link href={`/comentarios/${comment.id}`}>
            <button className="bg-black hover:bg-slate-800 text-white font-bold py-2 px-4 mt-2 rounded" onClick={() => { }}>
                Entrar
            </button>
        </Link>
    )
}