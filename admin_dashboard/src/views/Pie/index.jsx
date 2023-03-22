import Header from "../../Components/Header"
import { Box } from "@mui/system"
import PieChart from "./../../Components/PieChart"
function Pie() {
  return (
    <Box m='20px'>
      <Header title='PieChart' subtitle='A Simple Pie Chart'/>
      <Box height={'75vh'}>
        <PieChart />
      </Box>
      
    </Box>
  )
}

export default Pie