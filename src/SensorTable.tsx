import {
  Box,
  Chip, List, ListItem, ListItemText, Paper,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Typography,
  styled, tableCellClasses
} from "@mui/material"
import SensorStateChip from "./SensorStateChip";


const formatTimeOf = (sec: number): string => {
  const d = new Date(sec * 1000);
  return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} - ${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#FFF2CC",
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


export type SensorData = {
  sensorId: string,
  id: number,
  name: string,
  data: {
    state: boolean,
    time: number,   // GMT time in sec. Notice it's not milisec which can be passed to Date() object.
    constructing?: boolean,
  },
}

export type SensorTableProp = {
  sensors: SensorData[],
}

export const SensorTable = ({ sensors }: SensorTableProp) => {

  const tableLarge = (
    <Box sx={{ display: { xs: "none", sm: "block" } }}>
      <TableContainer component={Paper} sx={{ mb: 5 }}>
        <Table aria-label="laundry state table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right"> # </StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="center">State</StyledTableCell>
              <StyledTableCell align="center">Time</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              sensors.map((s, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell align="right"> <Chip label={s.id} /> </TableCell>
                    <TableCell align="left"> {s.name} </TableCell>
                    <TableCell align="center"> <SensorStateChip sensorState={s} /> </TableCell>
                    <TableCell align="center" sx={{ fontSize: "0.8rem", color: "rgba(0, 0, 0, 0.6)" }}> {formatTimeOf(s.data.time)} </TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )

  const tableSmall = (
    <Box sx={{ display: { xs: "block", sm: "none" } }}>
      {
        sensors.map((s) => {
          return (
            <Paper sx={{ my: 2 }}>
              <List sx={{ pt: 0 }}>
                <ListItem sx={{ backgroundColor: "#FFF2CC" }}>
                  <Chip label={s.id} sx={{ mr: 1 }} />
                  <Typography align="center"> {s.name} </Typography>
                </ListItem>

                <ListItem sx={{ mt: 2 }}>
                  <SensorStateChip sensorState={s} />
                </ListItem>

                <ListItem>
                  <ListItemText secondary={formatTimeOf(s.data.time)} />
                </ListItem>
              </List>

            </Paper>
          )
        })
      }
    </Box>
  )

  return (
    <>
      {tableLarge}
      {tableSmall}
    </>
  )
}
