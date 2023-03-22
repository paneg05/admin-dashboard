import GeographyMap from "../../Components/GeographyChart"
import { Box } from "@mui/material"
import Header from "../../Components/Header"
import { useTheme } from "@mui/material"
import { tokens } from "../../theme"

function Geography() {
  const theme = useTheme()
  const colors= tokens(theme.palette.mode)


  return (
    <Box m='20px'>
      <Header title='Geography chart' subtitle={'A simple geography chart'}/>
      <Box height={'75vh'} border={`1px solid ${colors.grey[100]}`} borderRadius='4px'>
        <GeographyMap />
      </Box>
    </Box>
  )
}

export default Geography