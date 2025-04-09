import { RowsPhotoAlbum } from "react-photo-album";
import { Modal, Button } from "react-bootstrap";
import "react-photo-album/rows.css";

const photos = [
    { src: "imgs/3D (1).png", width: 1200, height: 900 }, 
    { src: "imgs/3D (2).png", width: 1200, height: 900 },  
    { src: "imgs/3D (4).png", width: 1200, height: 900 },
];

const Gallery = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>Galerie d'impressions 3D</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <RowsPhotoAlbum photos={photos} />
      </Modal.Body>
    </Modal>
  );
};

export default Gallery;
