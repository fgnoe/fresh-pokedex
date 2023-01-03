import { useState } from "react";
import { Blurhash } from "react-blurhash";
import {LazyLoadImage} from "react-lazy-load-image-component";

interface BlurhashLoadImageProps {
    url?: string;
    blurhash?: string;
    className?: string;
}

const BlurhashLoadImage = ({url, blurhash, className}: BlurhashLoadImageProps) => {

    const [isLoaded, setLoaded] = useState(false);
    const [isLoadStarted, setLoadStarted] = useState(false);

    const handleLoad = () => {
        setLoaded(true);
    };

    const handleLoadStarted = () => {
        console.log("Started: ");
        setLoadStarted(true);
    };

    return (
        <>
            <LazyLoadImage
                className={className}
                key={url}
                src={url}
                height={100}
                width={100}
                onLoad={handleLoad}
                beforeLoad={handleLoadStarted}
            />
            {!isLoaded && isLoadStarted && (
                <Blurhash
                    className={className}
                    hash={blurhash || ''}
                    width={100}
                    height={100}
                    resolutionX={100}
                    resolutionY={100}
                    punch={9}
                />
            )}
    </>
);
}

export { BlurhashLoadImage };