import Header from './../../Components/Header'
import { Box } from '@mui/system'
import LineChart from './../../Components/LineChart'


function Line() {
  return (
    <Box m='20px'>
      <Header title={'Line Chart'} subtitle='A simple Linechart'/>
      <Box height={'75vh'}>
        <LineChart/>
      </Box>
    </Box>
  )
}

export default Line