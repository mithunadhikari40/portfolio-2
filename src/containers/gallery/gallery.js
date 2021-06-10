
import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { Fade } from "react-reveal";
import { photos } from '../../portfolio';


import "./gallery.css";
import StyleContext from "../../contexts/StyleContext";




export default function MyGallery() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const { isDark } = React.useContext(StyleContext);

    return (
        <Fade bottom duration={1000} distance="20px">
            <div className="main">
                <div className="blog-header">
                    <p
                        className={
                            isDark ? "dark-mode blog-header-text" : "blog-header-text"
                        }
                    >
                        {"My Photo Gallery"}
                    </p>
                </div>
                <Gallery
                    photos={photos}
                    onClick={openLightbox}
                    direction='row'
                    margin={0}


                />
                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={photos.map(x => ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title,
                                    alt: x.title
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        </Fade>
    );
}

