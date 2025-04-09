import { RowsPhotoAlbum } from "react-photo-album";
import { Modal } from "react-bootstrap";
import { galleryImages } from "../config/galleryConfig";
import "react-photo-album/rows.css";

const Gallery = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>Galerie d'impressions 3D</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <RowsPhotoAlbum photos={galleryImages} />
      </Modal.Body>
    </Modal>
  );
};

export default Gallery;
