import { Box, useTheme, Typography} from '@mui/material'
import Header from '../../Components/Header' 
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { tokens } from './../../theme'


function Faq() {
  const theme = useTheme()
  const colors =  tokens(theme.palette.mode)



  return (
    <Box>
      <Header title='FAQ' subtitle='Frequently Asked Question Page'/>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            An Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Quisque a congue nisl. Fusce vitae sapien eu libero faucibus aliquam dictum at eros.
            Quisque at enim vitae enim cursus sagittis
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            Another Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Quisque a congue nisl. Fusce vitae sapien eu libero faucibus aliquam dictum at eros.
            Quisque at enim vitae enim cursus sagittis
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            other Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Quisque a congue nisl. Fusce vitae sapien eu libero faucibus aliquam dictum at eros.
            Quisque at enim vitae enim cursus sagittis
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
             only a random question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Quisque a congue nisl. Fusce vitae sapien eu libero faucibus aliquam dictum at eros.
            Quisque at enim vitae enim cursus sagittis
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            more one Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Quisque a congue nisl. Fusce vitae sapien eu libero faucibus aliquam dictum at eros.
            Quisque at enim vitae enim cursus sagittis
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            Some random question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Quisque a congue nisl. Fusce vitae sapien eu libero faucibus aliquam dictum at eros.
            Quisque at enim vitae enim cursus sagittis
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default Faq