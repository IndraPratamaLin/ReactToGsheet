import * as React from "react";
import { useGlobalContext } from "../Context";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const BlockTwo = () => {
  // Import State From GlobalContext
  const { ShowBlockTwo, setShowBlockTwo, setModalOpen, setSnackForBlockTwo } =
    useGlobalContext();

  return (
    <React.Fragment>
      <React.Fragment>
        {/* Grid 2 */}
        <Grid item xs={12} sm={1.5} />
        <Grid item xs={12} sm={9}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="32vh"
            border={1.5}
            borderColor="#dedede"
            sx={{
              backgroundColor: "#fff",
              borderRadius: 4,
            }}
          >
            {/* BOX 2-1 */}
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
                    setShowBlockTwo(!ShowBlockTwo);
                    setSnackForBlockTwo(true);
                  }}
                >
                  <DeleteOutlineOutlinedIcon sx={{ fontSize: 32 }} />
                </Button>
              </Grid>
            </Box>

            {/* BOX 2-2 */}
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="100%"
              sx={{ px: 3, mt: 3 }}
            >
              <Button
                variant="contained"
                sx={{
                  py: 1,
                  fontSize: 20,
                  width: "98%",
                  borderRadius: 10,
                  color: "#3f3f3f",
                  ":hover": {
                    bgcolor: "#1976D2",
                    color: "white",
                  },
                }}
                color="inherit"
                startIcon={
                  <img
                    src={require("../img/database-icon.png")}
                    alt="spreadsheet"
                    className="appbarImage"
                    width={32}
                    height={32}
                  />
                }
                onClick={() => setModalOpen(true)}
              >
                <Typography
                  variant="inherit"
                  component="div"
                  sx={{
                    fontWeight: 500,
                    fontSize: 20,
                  }}
                >
                  Connect Flow Node to import to Google Sheets
                </Typography>
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={1.5} />
      </React.Fragment>
    </React.Fragment>
  );
};
export default BlockTwo;
