
export default function AnimationSuspense() {
    return (

        <div className=" p-8 text-white">
            <div className="text-center flex">
                <p className="text-5xl font-bold mb-4">Cargando Publicaciones</p>
                <div className="ml-10 spinner border-t-4 border-b-4 border-white rounded-full w-16 h-16 animate-spin"></div>
            </div>
        </div>
    )
}