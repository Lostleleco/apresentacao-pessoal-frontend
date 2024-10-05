import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Perfil from './assets/Perfil.jpg';
import portifolio from './assets/port.png';
import disney from './assets/disney.png';
import mx from './assets/mx.png';

const navigation = [
  { name: 'Bem-vindos', href: '#', current: true },
  { name: 'Projetos', href: '#projetos', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <div>
      <Disclosure as="nav" className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <DisclosureButton className="group inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                <span className="sr-only">Open main menu</span>
              </DisclosureButton>
            </div>

            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>

      {/* Seção de Introdução */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meu nome é Alex Soares</h2>
              <h3 className="mt-4 text-lg leading-10 text-gray-300">Sou Desenvolvedor Front End!</h3>
              <div className="mt-6 flex max-w-md gap-x-4">
                <img src={Perfil} alt="Perfil de Alex Soares" className="rounded-full w-40 h-40 object-cover" />
              </div>
            </div>
            <div>
              <p className="text-white">
                Sou um entusiasta da tecnologia em constante evolução. Atualmente, desempenho o papel de analista de suporte, onde aprendi a resolver problemas de forma eficiente e a lidar com situações adversas em ambientes digitais. Sou graduado em Análise e Desenvolvimento de Sistemas pela universidade Cruzeiro do Sul. Estou me especializando em desenvolvimento Front-end pela EBAC.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Projetos */}
      <div id="projetos" className="bg-gray-800 py-16">
        <h2 className="text-3xl font-bold tracking-tight text-white text-center">Meus Projetos</h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={portifolio} alt="Meu Portfólio" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">Meu Portfólio</h3>
              <p className="mt-2 text-gray-600">Uma pequena exibição da minha pagina contendo meus projetos e Stacks</p>
              <a href="https://portifolio-eight-tau-87.vercel.app/" target="_blank" rel="noopener noreferrer">
                <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">Ver Mais</button>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={mx} alt="Projeto 2" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">Mx Store</h3>
              <p className="mt-2 text-gray-600">Essa pagina foi uma criação de uma loja para exibição de equipamentos esportivos</p>
              <a href="https://mx-store.vercel.app/" target="_blank" rel="noopener noreferrer">
                <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">Ver Mais</button>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={disney} alt="Projeto 3" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">Clone Disney+</h3>
              <p className="mt-2 text-gray-600">Projeto desenvolvido para estudos e praticas de desing totalmente responsivo

              </p>
              <a href="https://alex-clone-disneyplus.vercel.app/" target="_blank" rel="noopener noreferrer">
                <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">Ver Mais</button>
              </a>
            </div>
          </div>
        </div>
      </div>


      <footer className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-400 text-sm">
            © 2024 Alex Soares. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
