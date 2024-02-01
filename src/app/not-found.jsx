import { HomeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-white">
      <main className="mx-auto w-full max-w-7xl pt-5">
        <img
          className="mx-auto h-10 w-auto sm:h-12"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold leading-8 text-indigo-600">
            404
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Esta página no existe
          </h1>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
            Perdón, no pudimos encontrar la página que buscas.
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
          <Link href="/" className="relative flex justify-around gap-x-6 py-6">
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10">
              <HomeIcon className="h-6 w-6 text-gray-900" aria-hidden="true" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-sm font-semibold leading-6 text-gray-900">
                <span>Volver al inicio</span>
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Encuentra lo que buscas en la página principal.
              </p>
            </div>
          </Link>

          <div className="mt-10 flex justify-center">
            <Link
              href="/cambio-usuario"
              className="text-sm font-semibold leading-6 text-indigo-600"
            >
              <span aria-hidden="true">&larr;</span>
              Cambiar de usuario
            </Link>
          </div>
        </div>
      </main>
      <footer className="border-t border-gray-100 py-6 sm:py-10">
        <div className="mx-a    uto flex max-w-7xl flex-col items-center justify-center gap-8 px-6 sm:flex-row lg:px-8">
          <p className="text-sm leading-7 text-gray-400">
            &copy; Tu Empresa, S.A. Todos los derechos reservados.
          </p>
          <div className="hidden sm:block sm:h-7 sm:w-px sm:flex-none sm:bg-gray-200" />
        </div>
      </footer>
    </div>
  );
}
