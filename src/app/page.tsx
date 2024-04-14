import TypeScript from "@/components/icons/TypeIcon";
import NextJs from "@/components/icons/NextJsIcon";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-black text-white" style={{ background: 'url("https://i.pinimg.com/originals/d0/c2/2e/d0c22e043a90d7037af552ef4fe54235.gif") 0% 0%', imageRendering: 'pixelated', filter: 'brightness(90%)', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
      <h1 className="text-6xl text-white font-roboto-bold-italic tracking-wider uppercase p-12 rounded-lg bg-black">
        bienvenidos a la app con autentificación
      </h1>
      <div className="mt-5">
        <h2 className=" bg-black p-4 text-white font-bold text-4xl rounded-lg">
          Framework y Lenguaje usados
        </h2>
        <div className="flex justify-around mt-8 ">
          <NextJs width="100" height="100"></NextJs>
          <TypeScript width="100" height="100"></TypeScript>
        </div>
      </div>
    </main>
  );
}
