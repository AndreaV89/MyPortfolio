import { Modal, Box, IconButton, Typography, Fade } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface ProjectGalleryModalProps {
  open: boolean;
  onClose: () => void;
  projectName: string;
  images: string[];
}

export default function ProjectGalleryModal({
  open,
  onClose,
  projectName,
  images,
}: ProjectGalleryModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      closeAfterTransition
    >
      <Fade in={open}>
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "background.default",
            p: { xs: 2, md: 4 },
            overflowY: "auto",
            position: "relative",
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{ position: "fixed", top: 16, right: 16, zIndex: 1301 }}
          >
            <CloseIcon />
          </IconButton>
          <Box sx={{ maxWidth: "900px", margin: "0 auto" }}>
            <Typography
              id="modal-title"
              variant="h6"
              component="h2"
              sx={{ my: 2 }}
            >
              Galleria: {projectName}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
              }}
            >
              {images.map((img, index) => (
                <Box
                  key={index}
                  component="img"
                  src={img}
                  alt={`Screenshot ${index + 1}`}
                  sx={{ width: "100%", borderRadius: 1 }}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
