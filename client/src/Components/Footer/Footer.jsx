import { NavLink } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-900 mt-24 py-6">
            <div className="container mx-auto px-6 space-y-6 divide-y divide-gray-600 divide-opacity-50 md:space-y-12">
                <div className="flex flex-col md:flex-row justify-between items-center pb-5">
                    <a
                        href="#"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 justify-center md:justify-start pb-6 md:pb-0"
                    >
                        <div className="flex items-center justify-center w-20 h-20 rounded-full">
                            <img src="../../Assets/logo-renovmat.svg" alt="Logo Renovmat" />
                        </div>
                        <p
                            className="renov-title text-2xl font-semibold text-[var(--green)]">
                            RENOV
                            <span
                                className="renov-title text-2xl font-semibold text-[var(--yellow)]"
                            >
                                'MAT
                            </span>
                        </p>

                    </a>
                    <div className="text-center md:text-left md:w-1/3">
                        <ul>
                            <li>
                                Pour en savoir plus à propos de nous cliquez{' '}
                                <NavLink
                                    to="/about"
                                    className="text-[var(--green)] font-bold border-b-2 border-[var(--green)] hover:text-[var(--yellow)] transition-colors duration-200"
                                >
                                    ici
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-center space-x-4 pt-4 lg:pt-0">
                        <a
                            href="#"
                            title="Email"
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--green)] text-gray-50 hover:bg-[var(--yellow)] transition-colors duration-150"
                            rel="noopener noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5"
                                aria-hidden="true"
                            >
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </a>
                        <a
                            href="#"
                            title="Twitter"
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--green)] text-gray-50 hover:bg-[var(--yellow)] transition-colors duration-150"
                            rel="noopener noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 50 50"
                                fill="currentColor"
                                className="w-5 h-5"
                                aria-hidden="true"
                            >
                                <path d="M50.0625 10.4375c-1.8477.82-3.8282 1.37-5.91 1.62 2.125-1.273 3.757-3.288 4.523-5.686-1.984 1.175-4.191 2.03-6.53 2.49-1.874-2-4.545-3.246-7.502-3.246-5.68 0-10.285 4.6-10.285 10.28 0 .8.094 1.585.27 2.34-8.547-.43-16.122-4.525-21.196-10.75-0.886 1.523-1.39 3.288-1.39 5.17 0 3.57 1.812 6.72 4.574 8.57-1.687-.05-3.273-.515-4.66-1.284 0 .04 0 .08 0 .12 0 4.98 3.546 9.13 8.245 10.08-.86.23-1.77.36-2.708.36-.665 0-1.31-.06-1.94-.185 1.313 4.08 5.11 7.06 9.61 7.14-3.52 2.76-8.96 4.4-13.78 4.4-0.832 0-1.65-.05-2.45-.15 5.54 2.92 10.94 4.62 16.75 4.62 18.92 0 29.27-15.67 29.27-29.25 0-.44-.01-.89-.03-1.33 2.01-1.45 3.75-3.26 4.13-5.32z" />
                            </svg>
                        </a>
                        <a
                            href="https://github.com/MaximeNlr"
                            title="GitHub"
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--green)] text-gray-50 hover:bg-[var(--yellow)] transition-colors duration-150"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-5 h-5"
                                aria-hidden="true"
                            >
                                <path d="M10.9 2.1c-4.6.5-8.3 4.2-8.8 8.7-.5 4.7 2.2 8.9 6.3 10.5.2.1.5 0 .5-.4v-1.6c0 0-.4.1-.9.1-1.4 0-2-1.2-2.1-1.9-.1-.4-.3-.7-.6-1-.3-.3-.3-.3-.3-.4 0-.2.3-.2.4-.2.6 0 1.1.7 1.3 1 .5.8 1.1 1 1.4 1 .4 0 .7-.1.9-.2.1-.7.4-1.4 1-1.8-2.3-.5-4-1.8-4-4 0-1.1.5-2.2 1.2-3 .1-.3 0-.8 0-1.5 0-.4 0-1 .3-1.6 0 0 1.4 0 2.8 1.3.5-.2 1.2-.3 1.9-.3s1.4.1 2 .3c.3-.9 1.8-.9 1.8-.9 0 .6 0 1.2 0 1.6 0 .8-.1 1.2-.2 1.4.7.8 1.2 1.8 1.2 3 0 2.2-1.7 3.5-4 4 .6.5 1 1.4 1 2.3v2.6c0 .3.3.6.7.5 3.7-1.5 6.3-5.1 6.3-9.3 0-10.6-5.1-15.3-11.1-14.6z" />
                            </svg>
                        </a>
                    </div>

                </div>

                <div className="grid justify-center pt-6 lg:justify-between">
                    <div className="flex flex-col items-center text-sm text-center md:block md:space-x-6">
                        <span>©2025 All rights reserved</span>
                        <a href="#" className="hover:underline ml-4">
                            Privacy policy
                        </a>
                        <a href="#" className="hover:underline ml-4">
                            Terms of service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}