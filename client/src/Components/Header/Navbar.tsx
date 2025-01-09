import {useState} from 'react'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import {
    // ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import {ChevronDownIcon} from '@heroicons/react/20/solid'

const products = [
    {name: 'House', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon},
    {name: 'Castle', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon},
    {name: 'Appartement', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon},
    {name: 'Tiny-House', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon},
]

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="backdrop-blur-sm bg-transparent sticky top-0 shadow shadow-gray-500 z-40 ">
            <nav aria-label="Global" className="mx-auto flex items-center justify-between p-4 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                            alt="logo light"
                            src="/Logo_Lightmode.svg"
                            className="w-20 h-auto"
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6"/>
                    </button>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center gap-5">
                    <a href="/register" className="text-sm/6 font-semibold text-gray-900 text-lg align-text-bottom">
                        Log in
                    </a>
                    <img src="/Light_Mode_Icon.svg"/>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden h-full z-50">
                <div className="fixed inset-0 z-50"/>
                <DialogPanel
                    className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
                    id="test">
                    <div className="flex items-center justify-between">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="/Logo_Lightmode.svg"
                                className="h-8 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6"/>
                        </button>
                    </div>
                    <div className="mt-6 flex flex-col justify-between">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="py-6">
                                <a
                                    href="/register"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                        <img src="/Light_Mode_Icon.svg" className="self-end w-7"/>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
