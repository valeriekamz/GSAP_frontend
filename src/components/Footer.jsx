import {FaDiscord, FaGithub, FaTwitch, FaYoutube} from "react-icons/fa";

const socialLinks = [
    { href: "https://discord.com", icon: <FaDiscord /> },
    { href: "https://twitch.com", icon: <FaTwitch /> },
    { href:'https://github.com', icon: <FaGithub /> },
    { href: "https://youtube.com", icon: <FaYoutube /> },
];

const Footer = () => {
    return (
        <footer className="w-screen py-8 text-white" style={{backgroundColor: "#0A142F"}}>
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4">
                <p className="text-center text-sm font-light md:text-left">
                    &copy; {new Date().getFullYear()} Nova Media. All rights reserved.
                </p>

                <div className="flex justify-center gap-4 md:justify-start">
                    {socialLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white transition-colors duration-500 ease-in-out hover:text-violet-300">
                            {link.icon}
                        </a>
                    ))}
                </div>
                <a href="#privacy-policy" className="text-center text-sm hover:underline md:text-right">
                    Terms of Use
                </a>
            </div>
        </footer>
    )
}
export default Footer
