"use client"
import Link from "next/link";
import { signIn, signOut } from 'next-auth/react'
import { useEffect } from "react";
import { useAuthGmail } from "@/hooks/useAuth";
import Google from "../../icons/GoogleIcon";

function NavBar() {
    const { session, userImage } = useAuthGmail();

    console.log(session)
    useEffect(() => {
    }, [session]);
    return (
        <nav className="bg-blue-950 flex items-center justify-between text-white p-3 overflow-hidden">
            <Link href="/">
                <div className="flex justify-center gap-x-5 items-center hover:shadow-md hover:scale-105 
                        transition duration-300 focus:outline-none">
                    <Google width={44} height={44}></Google>
                    <h1 className="font-bold tracking-widest text-2xl max-sm:hidden">NextGoogle</h1>
                </div>
            </Link>

            {session?.user ? (
                <div className="flex gap-x-2 items-center">
                    <Link href="/comentarios">
                        <button className="bg-red-500 text-black font-bold p-3 rounded-2xl mr-10  hover:shadow-md hover:scale-125 
                        transition duration-200 focus:outline-none max-md:mr-0 max-md: ml-5 max-md:p-2 max-md:hover:scale-75">
                            Comentarios
                        </button>
                    </Link>
                    <p className="font-bold tracking-tight bg-black p-2 rounded-md max-md:hidden">{session.user.name}</p>
                    {userImage ? (
                        <Link href="/perfil">
                            <img src={userImage} alt="Foto de perfil" className="w-14 h-14 rounded-full cursor-pointer  hover:shadow-md hover:scale-110 transition duration-300 focus:outline-none" />
                        </Link>
                    ) : (
                        <div className="w-10 h-10 rounded-full bg-gray-300 cursor-pointer" />
                    )}

                    <button className="bg-sky-700 ml-8 p-4 rounded-full hover:shadow-md hover:scale-105 
                        transition duration-300 focus:outline-none max-md:ml-0" onClick={async () => signOut({
                        callbackUrl: "/",
                    })}>
                        LogOut
                    </button>
                </div>
            ) : (
                <button className="bg-sky-700 p-4 rounded-full text-xl hover:shadow-md hover:scale-105 
                transition duration-300 focus:outline-none" onClick={() => signIn()}>
                    Sign in
                </button>
            )
            }

        </nav>
    )
}
export default NavBar;