import React from "react";
import Link from "next/link";

const NavbarComponent = () => {
    return (
        <header className="flex flex-col items-center bg-gray-100 p-5">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Empanadas</h1>
            <nav className="w-full max-w-4xl">
                <ul className="flex justify-around">
                    <li>
                        <Link href="/" className="text-gray-700 hover:bg-gray-300 px-4 py-2 rounded transition">
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link href="/nosotros" className="text-gray-700 hover:bg-gray-300 px-4 py-2 rounded transition">
                            Nosotros
                        </Link>
                    </li>
                    <li>
                        <Link href="/galeria" className="text-gray-700 hover:bg-gray-300 px-4 py-2 rounded transition">
                            Galería
                        </Link>
                    </li>
                    <li>
                        <Link href="/contacto" className="text-gray-700 hover:bg-gray-300 px-4 py-2 rounded transition">
                            Contactos
                        </Link>
                    </li>
                </ul>
                <nav className="mt-4 flex-col bg-slate-400 flex items-center justify-center h-10 ">
                <ul className="flex justify-around">
                    <li className="">
                        <Link href="/iniciar" className="text-gray-700 hover:bg-gray-300 px-4 py-2 rounded transition">
                            Iniciar
                        </Link>
                    </li>
                    <li className="">
                        <Link href="/registro" className="text-gray-700 hover:bg-gray-300 px-4 py-2 rounded transition">
                            Registrarse
                        </Link>
                    </li>
                </ul>
                </nav>
            </nav>
            
        </header>
    );
}

export default NavbarComponent;
