import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="footer p-4 mt-2 bg-neutral text-neutral-content mt-auto border-t border-gray-200">
            <div>
                <p>Created by&nbsp;
                    <a
                        className="link link-hover text-secondary"
                        href="https://www.linkedin.com/in/nnflores/"
                    >
                        Noe Flores
                    </a>
                    {' using '}
                    <a
                        className="link link-hover text-secondary"
                        href="https://pokeapi.co/"
                    >
                        PokéAPI
                    </a>
                    <br/>
                    Pokémon and Pokémon character names are trademarks of Nintendo
                </p>
            </div>
            <div className="">
                <div className="grid mt-2 grid-flow-col gap-4">
                    <a href="https://www.linkedin.com/in/nnflores/"><FontAwesomeIcon className="text-2xl link link-hover" icon={faLinkedin}/></a>
                    <a href="https://github.com/fgnoe/fresh-pokedex"><FontAwesomeIcon className="text-2xl link link-hover" icon={faGithub}/></a>
                </div>K
            </div>
        </footer>
    )
};

export default Footer;