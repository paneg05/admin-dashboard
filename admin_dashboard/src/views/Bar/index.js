import { Box } from "@mui/system";
import Header from './../../Components/Header'
import BarChart from "../../BarChart";

const Bar = ()=>{


    return (
        <Box m='20px'>
            <Header title='Bar Chart' subtitle='Simple Bar Chart'/>
            <Box height={'75vh'}>
                <BarChart/>
            </Box>
        </Box>  
    )
}

export default Bar