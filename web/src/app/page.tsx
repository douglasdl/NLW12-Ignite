import { User } from 'lucide-react'
import nlwLogo from '../assets/nlw-spacetime-logo.svg'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}
      <div className="bg-cover border-white/10 px28 relative flex flex-col items-start justify-between overflow-hidden border-r bg-[url(../assets/bg-stars.svg)] py-16">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
        {/* Stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
        {/* SignIn */}
        <a
          href=""
          className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>
          <p className="text-sm max-w-[140px] leading-snug">
            {' '}
            <span className="underline">Crie sua conta</span> e salve suas
            memórias!{' '}
          </p>{' '}
        </a>
        {/* Hero */}
        <div className="space-y-5">
          <Image src={nlwLogo} alt="NLW Spacetime" />
          <div className="max-w-[420px] space-y-1">
            <h1 className="text-5xl font-bold leading-tight text-gray-50">
              Sua cápsula do tempo
            </h1>
            <p className="text-lg leading-relaxed">
              Colecione momentos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo!
            </p>
          </div>
          <a
            href=""
            className="text-sm text-black inline-block rounded-full bg-green-500 px-5 py-3 font-alt uppercase leading-none hover:bg-green-600"
          >
            CADASTRAR LEMBRANÇA
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm leading-relaxed text-gray-200">
          Feito com 💜 no NLW da{' '}
          <a
            href="https://rocketseat.com.br"
            className="underline hover:text-gray-100"
          >
            Rocketseat
          </a>
        </div>
      </div>{' '}
      {/* Right */}
      <div className="bg-cover flex flex-col bg-[url(../assets/bg-stars.svg)] p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, comece a{' '}
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-gray-50"
            >
              criar agora
            </a>
            !
          </p>
        </div>
      </div>
    </main>
  )
}
