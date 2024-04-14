
import SuspenseComments from "@/components/common/Suspense";
import { Suspense } from "react";
import AnimationSuspense from "@/components/common/utils/AnimationSuspense";

async function fetchApiId(id: number) {
    try {
        const apiUrl = process.env.API_URL;
        const response = await fetch(`${apiUrl}/${id}`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

async function ParamPost({ params }) {

    const post = await fetchApiId(params.param)
    return (
        <div className="bg-slate-900 font-bold text-white flex p-5 bg-no-repeat flex-col items-center w-full min-h-screen">
            <h2 className="uppercase text-center text-6xl mt-5 ">{post.id} {post.email} (email)</h2>
            <p className="text-3xl mt-8 text-center ">{post.name} (nombre)</p>
            <br></br>
            <div className="bg-black p-10 tracking-widest rounded-2xl text-justify">
                <p className="text-4xl">{post.body}(cuerpo)</p>
            </div>
            <br></br>
            <div className="mt-40 flex flex-col items-center">
                <h1 className="uppercase text-6xl text-center">otras publicaciones</h1>
                <br/>
                <Suspense fallback={<AnimationSuspense></AnimationSuspense>}>
                    <SuspenseComments></SuspenseComments>
                </Suspense>
            </div>

        </div>

    )

}

export default ParamPost;