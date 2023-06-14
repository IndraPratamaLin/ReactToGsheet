import * as React from "react";
import { useGlobalContext } from "../Context";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const BlockOne = () => {
  // Import State From GlobalContext
  const { ShowBlockOne, setShowBlockOne, setModalOpen, setSnackForBlockOne } =
    useGlobalContext();

  return (
    <React.Fragment>
      {/* GRID 1 */}
      <Grid item xs={12} sm={1.5} />
      <Grid item xs={12} sm={9}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="50vh"
          border={1.5}
          borderColor="#dedede"
          sx={{
            backgroundColor: "#fff",
            borderRadius: 4,
          }}
        >
          {/* BOX 1-1 */}
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
            sx={{ px: 3 }}
          >
            <Grid item xs={12} sm={1.5}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height={75}
                width={75}
                sx={{
                  backgroundColor: "#e6f6f1",
                  borderRadius: 2,
                }}
              >
                <img
                  src={require("../img/spreadsheet-icon.png")}
                  alt="spreadsheet"
                  className="appbarImage"
                  width={50}
                  height={50}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={9.5}>
              <Typography
                variant="inherit"
                component="div"
                sx={{
                  fontWeight: 700,
                  fontSize: 32,
                  textAlign: "left",
                }}
              >
                Export to Google Sheets
              </Typography>
            </Grid>
            <Grid item xs={12} sm={1}>
              <Button
                variant="contained"
                sx={{
                  py: 1.5,
                  ":hover": {
                    bgcolor: "#A0001E",
                    color: "white",
                  },
                }}
                color="inherit"
                onClick={() => {
                  setShowBlockOne(!ShowBlockOne);
                  setSnackForBlockOne(true);
                }}
              >
                <DeleteOutlineOutlinedIcon sx={{ fontSize: 32 }} />
              </Button>
            </Grid>
          </Box>

          {/* BOX 1-2 */}
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="90%"
            sx={{ px: 3, pt: 1.5, mt: 3 }}
          >
            <Grid item xs={12} sm={1.5}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height={75}
                width={75}
                sx={{
                  backgroundColor: "#e6f6f1",
                  borderRadius: 10,
                }}
              >
                <img
                  src={require("../img/google-icon.png")}
                  alt="spreadsheet"
                  className="appbarImage"
                  width={50}
                  height={50}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={10.5}>
              <Typography
                variant="inherit"
                component="div"
                sx={{
                  fontWeight: 700,
                  fontSize: 32,
                  textAlign: "left",
                }}
              >
                Connect Google Account
              </Typography>
              <Typography
                variant="inherit"
                component="div"
                sx={{
                  fontWeight: 200,
                  fontSize: 20,
                  textAlign: "left",
                  color: "#9e9e9e",
                }}
              >
                Please connect Google Account to use this block
              </Typography>
            </Grid>
          </Box>

          {/* Box 1-3 */}
          <Box
            display="flex"
            justifyContent="start"
            alignItems="center"
            width="90%"
            sx={{ px: 3, pb: 3, mt: 3 }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{ px: 2, py: 1 }}
              onClick={() => setModalOpen(true)}
            >
              <Typography
                variant="inherit"
                component="div"
                sx={{ fontWeight: 700, fontSize: 14 }}
              >
                Connect
              </Typography>
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={1.5} />
    </React.Fragment>
  );
};
export default BlockOne;
