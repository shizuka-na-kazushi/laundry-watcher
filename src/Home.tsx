import { useEffect, useState } from "react";
import { Alert, Box, Container, LinearProgress, Typography, } from "@mui/material";

import { getDatabase, onValue, ref } from "firebase/database";

import laundryHeaderImage from "./assets/laundry-header-image.png";

import { LaundryNames } from "./laundryNames";
import Footer from "./Footer";
import { SensorData, SensorTable } from "./SensorTable";
import Legend from "./Legend";


const Home = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [sensors, setSensors] = useState<SensorData[]>([]);

  useEffect(() => {
    const db = getDatabase();
    const sensorsRef = ref(db, "/sensors");
    const unsubscribe = onValue(sensorsRef, (snapshort) => {
      setLoading(false);
      const list: SensorData[] = [];
      snapshort.forEach((child) => {

        if (child.key in LaundryNames) {
          list.push({
            id: LaundryNames[child.key].id,
            name: LaundryNames[child.key].name,
            sensorId: child.key, data: child.val(),
          });
        } else {
          list.push({
            id: -1,
            name: "(unknown)",
            sensorId: child.key, data: child.val(),
          });
        }
        console.log("/sensors: " + child.key + " : " + JSON.stringify(child.val()));
      })

      setSensors(list);
    })
    return () => { unsubscribe(); }
  }, []);

  if (loading) {
    return (
      <Box sx={{ width: "100%", height: 10 }}>
        <LinearProgress />
      </Box>
    )
  }

  return (
    <>
      <Container maxWidth="md">
        {/* <Box sx={{height: "200px", width: "max", backgroundImage: URL(laundryHeaderImage)}}></Box> */}
        <img src={laundryHeaderImage} style={{ maxWidth: "100%" }} />
        <Typography variant="h5" alignItems="center" align="center" alignContent="center" sx={{ my: 3 }}> ランドリーの稼働状況 </Typography>

        <Alert severity="warning" sx={{ my: 3, fontSize: "0.75rem" }}>
          以下の状態は、振動センサーで取得したもので、実際の機器の動作状況とは異なる場合があるのでご注意ください。<br />
          The state below is detected by vibration sensor. Notice that it is possible to be different state from actual machine operation.
        </Alert>

        <SensorTable sensors={sensors} />

        <Legend />  
      </Container>
      
      <Footer />
    </>
  )
}

export default Home;

