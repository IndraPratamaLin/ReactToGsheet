import * as React from "react";
import { useGlobalContext } from "../Context";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const BlockThree = () => {
  // Import State From GlobalContext
  const {
    ShowBlockThree,
    setShowBlockThree,
    setModalOpen,
    setSnackForBlockThree,
  } = useGlobalContext();

  return (
    <React.Fragment>
      {/* Grid 3 */}
      <Grid item xs={12} sm={1.5} />
      <Grid item xs={12} sm={9}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="75vh"
          border={1.5}
          borderColor="#dedede"
          sx={{
            backgroundColor: "#fff",
            borderRadius: 4,
          }}
        >
          {/* BOX 3-1 */}
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
                  setShowBlockThree(!ShowBlockThree);
                  setSnackForBlockThree(true);
                }}
              >
                <DeleteOutlineOutlinedIcon sx={{ fontSize: 32 }} />
              </Button>
            </Grid>
          </Box>

          {/* BOX 3-2 */}
          <Box
            display="flex"
            justifyContent="start"
            alignItems="center"
            width="100%"
            sx={{ px: 3, mt: 3 }}
          >
            <Typography
              variant="inherit"
              component="div"
              sx={{ fontWeight: 700, fontSize: 22 }}
            >
              Google Account
            </Typography>
          </Box>

          {/* BOX 3-3 */}
          <Box
            display="flex"
            justifyContent="start"
            alignItems="center"
            width="100%"
            sx={{ px: 3, mt: 3 }}
          >
            <FormControl required sx={{ width: "100%" }}>
              {/* <InputLabel>Select Promotion Type</InputLabel> */}
              <Select
                defaultValue={"name"}
                value={"name"}
                sx={{ fontWeight: 700, fontSize: 22 }}
                // onChange={(e) => setEmailOrWhatsapp(e.target.value)}
              >
                <MenuItem value={"name"} sx={{ fontWeight: 700, fontSize: 22 }}>
                  Account Name
                </MenuItem>
                {/* <MenuItem value={"whatsapp"}>WhatsApp</MenuItem> */}
              </Select>
            </FormControl>
          </Box>

          {/* BOX 3-4 */}
          <Box
            display="flex"
            justifyContent="start"
            alignItems="center"
            width="100%"
            sx={{ px: 3, mt: 3 }}
          >
            <Typography
              variant="inherit"
              component="div"
              sx={{ fontWeight: 700, fontSize: 22 }}
            >
              File
            </Typography>
          </Box>

          {/* BOX 3-5 */}
          <Box
            display="flex"
            justifyContent="start"
            alignItems="center"
            width="100%"
            sx={{ px: 3, mt: 3 }}
          >
            <FormControl required sx={{ width: "100%" }}>
              {/* <InputLabel>Select Promotion Type</InputLabel> */}
              <Select
                defaultValue={"name"}
                value={"name"}
                sx={{ fontWeight: 700, fontSize: 22 }}
                // onChange={(e) => setEmailOrWhatsapp(e.target.value)}
              >
                <MenuItem value={"name"} sx={{ fontWeight: 700, fontSize: 22 }}>
                  Sheetname
                </MenuItem>
                {/* <MenuItem value={"whatsapp"}>WhatsApp</MenuItem> */}
              </Select>
            </FormControl>
          </Box>

          {/* BOX 3-6 */}
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
                borderRadius: 2,
              }}
              color="primary"
              onClick={() => setModalOpen(true)}
            >
              <Typography
                variant="inherit"
                component="div"
                sx={{
                  fontWeight: 700,
                  fontSize: 20,
                  color: "#fff",
                }}
              >
                Export
              </Typography>
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={1.5} />
    </React.Fragment>
  );
};
export default BlockThree;
