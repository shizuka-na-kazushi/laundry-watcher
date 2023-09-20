
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import LoopIcon from '@mui/icons-material/Loop';

import { SensorData } from "./SensorTable"
import { Chip } from '@mui/material';

export type SensorStateChipProp = {
  sensorState: SensorData;
}

const SensorStateChip = ({sensorState}: SensorStateChipProp) => {
  if (sensorState.data.constructing) {
    return (<Chip icon={<DoNotDisturbOnIcon />} label="不明 : Unknown" variant="outlined" />)
  } else if (sensorState.data.state) {
    return (<Chip icon={<LoopIcon />} label="動作中 : Run" variant="outlined" />)
  } else {
    return (<Chip icon={<LocalLaundryServiceIcon />} label="停止中 : Stop" color="success" variant="outlined" />)
  }
}

export default SensorStateChip;