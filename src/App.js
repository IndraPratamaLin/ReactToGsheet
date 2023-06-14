import * as React from "react";
import { useGlobalContext } from "./Context";
import "./index.css";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Component
import BlockOne from "./components/BlockOne";
import BlockTwo from "./components/BlockTwo";
import BlockThree from "./components/BlockThree";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: '"Gothic A1"',
    },
  });

  // Import State From GlobalContext
  const {
    ShowBlockOne,
    ShowBlockTwo,
    ShowBlockThree,
    ModalOpen,
    setModalOpen,
    SnackForBlockOne,
    SnackForBlockTwo,
    SnackForBlockThree,
    setSnackForBlockOne,
    setSnackForBlockTwo,
    setSnackForBlockThree,
  } = useGlobalContext();

  // Modal
  const handleModalClose = () => {
    setModalOpen(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 675,
    bgcolor: "background.paper",
    borderRadius: 4,
    boxShadow: 24,
    px: 8,
    py: 6,
  };

  // Snack
  const handleSnackClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackForBlockOne(false);
    setSnackForBlockTwo(false);
    setSnackForBlockThree(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleSnackClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Grid
          container
          spacing={5}
          sx={{ mt: 1, mb: 7.5, backgroundColor: "#f5f5f5" }}
        >
          <Grid item xs={12} sm={12}>
            <Typography
              variant="h2"
              component="div"
              sx={{ fontWeight: 700, fontSize: 76, textAlign: "center" }}
            >
              Output/Export to Google Sheets
            </Typography>
          </Grid>

          {/* First Block */}
          {ShowBlockOne && <BlockOne />}

          {/* Second Block */}
          {ShowBlockTwo && <BlockTwo />}

          {/* Third Block */}
          {ShowBlockThree && <BlockThree />}
        </Grid>
      </ThemeProvider>
      {/* Modal Part*/}
      <Modal
        open={ModalOpen}
        onClose={handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={ModalOpen}>
          <Box sx={style}>
            <Typography variant="h3" sx={{ textAlign: "center", mb: 5 }}>
              To Be Developed
            </Typography>
            <Typography sx={{ fontSize: 20, mb: 6, textAlign: "center" }}>
              This Features will be launching soon..
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                onClick={handleModalClose}
                sx={{
                  fontSize: 16,
                  borderRadius: 2,
                  px: 4,
                  py: 1,
                  width: "98%",
                }}
                color="error"
              >
                Close
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* Snack Part */}
      <Snackbar
        open={SnackForBlockOne}
        autoHideDuration={5000}
        message="Block One Has Been Removed"
        onClose={handleSnackClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        action={action}
      />
      <Snackbar
        open={SnackForBlockTwo}
        autoHideDuration={5000}
        message="Block Two Has Been Removed"
        onClose={handleSnackClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        action={action}
      />
      <Snackbar
        open={SnackForBlockThree}
        autoHideDuration={5000}
        message="Block Three Has Been Removed"
        onClose={handleSnackClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        action={action}
      />
    </React.Fragment>
  );
}

export default App;
