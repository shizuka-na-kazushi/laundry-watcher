import { Alert, Box, Divider, List, ListItem, ListItemText, Typography } from "@mui/material"
import { SensorData } from "./SensorTable";
import SensorStateChip from "./SensorStateChip";


const Legend = () => {
  const run: SensorData = { sensorId: "", id: 0, name: "", data: { state: true, time: 0 } };
  const stop: SensorData = { sensorId: "", id: 0, name: "", data: { state: false, time: 0 } };
  const unknown: SensorData = { sensorId: "", id: 0, name: "", data: { constructing: true, state: false, time: 0 } };
  
  const runText = "動作中です。誰かが使ってます";
  const stopText = "止まっています。機器は多分、使用可能です。";
  const unknownText = "センサーがないか、壊れているので状況がわかりません。" ;

  
  const wide = (
    <Box sx={{ display: { xs: "none", sm: "block" } }}>
      <List>
        <ListItem>
          <SensorStateChip sensorState={run} />
          <ListItemText secondary={runText} sx={{ ml: 1 }} />
        </ListItem>
        <ListItem>
          <SensorStateChip sensorState={stop} />
          <ListItemText secondary={stopText} sx={{ ml: 1 }} />
        </ListItem>
        <ListItem>
          <SensorStateChip sensorState={unknown} />
          <ListItemText secondary={unknownText} sx={{ ml: 1 }} />
        </ListItem>
      </List>
    </Box>
  )

  const narrow = (
    <Box sx={{ display: { xs: "block", sm: "none" } }}>
      <List>
        <ListItem>
          <SensorStateChip sensorState={run} />
        </ListItem>
        <ListItem>
          <ListItemText secondary={runText} sx={{ ml: 1 }} />
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem>
          <SensorStateChip sensorState={stop} />
        </ListItem>
        <ListItem>
          <ListItemText secondary={stopText} sx={{ ml: 1 }} />
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem>
          <SensorStateChip sensorState={unknown} />
        </ListItem>
        <ListItem>
          <ListItemText secondary={unknownText} sx={{ ml: 1 }} />
        </ListItem>
      </List>
    </Box >
  )


  return (
    <Box sx={{ p: 5 }}>
      <Alert severity="info" sx={{ mb: 10 }}>
        <Typography variant="body1">凡例:Legend</Typography>
        <br />
        {wide}
        {narrow}
      </Alert>
    </Box>
  )
}

export default Legend;