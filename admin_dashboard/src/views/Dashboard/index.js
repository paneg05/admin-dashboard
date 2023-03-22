import Header from "../../Components/Header"
import { Box, Button,IconButton,Typography,useTheme } from "@mui/material"
import { tokens } from "../../theme"
import { mockTransactions } from "../../data/mockData"
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined'
import EmailIcon from '@mui/icons-material/Email'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import TrafficIcon from '@mui/icons-material/Traffic'
import LineChart from './../../Components/LineChart'
import BarChart from "../../BarChart"
import GeographyMap from "../../Components/GeographyChart"
import StatBox from "../../Components/StatBox"
import ProgressCircle from "../../Components/ProgressCircle"


const Dashboard = ()=>{
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)


    return (
    <Box m='20px'>
        <Box
            display='flex'
            justifyContent={'space-between'}
        >
            <Header title='DASHBOARD' subtitle='Welcome to your Dashboard'/>
        

            <Box>
                <Button
                    sx={{
                        backgroundColor: colors.blueAccent[700],
                        color: colors.grey[100],
                        fontSize: '14px',
                        fontWeight:'bold',
                        padding: '10px 20px'
                    }}
                >
                    <DownloadOutlinedIcon
                        sx={{
                            mr: '10px',
                        }}
                    />
                    Download Reports
                </Button>
            </Box>
        </Box>

            {/*GRID & CHARTS */}
            <Box
                display={'grid'}
                gridTemplateColumns='repeat(12, 1fr)'
                gridAutoRows={'140px'}
                gap='20px'
            >
                {/* ROW 1 */}
                <Box
                    gridColumn='span 3'
                    backgroundColor={colors.primary[400]}
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                >
                    <StatBox
                        title='12,361'
                        subtitle='Emails Sent'
                        progress='0.75'
                        increase='+14%'
                        icon={
                            <EmailIcon
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: '26px'
                                }}
                            />
                        }
                    />
                </Box>

                <Box
                    gridColumn='span 3'
                    backgroundColor={colors.primary[400]}
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                >
                    <StatBox
                        title='4321,225'
                        subtitle='Sales Obteined'
                        progress='0.5'
                        increase='+21%'
                        icon={
                            <PointOfSaleIcon
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: '26px'
                                }}
                            />
                        }
                    />
                </Box>

                <Box
                    gridColumn='span 3'
                    backgroundColor={colors.primary[400]}
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                >
                    <StatBox
                        title='32,1'
                        subtitle='New Clients'
                        progress='0.3'
                        increase='+5%'
                        icon={
                            <PersonAddIcon
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: '26px'
                                }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn='span 3'
                    backgroundColor={colors.primary[400]}
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                >
                    <StatBox
                        title='1,324,361'
                        subtitle='Trafic Inbound'
                        progress='0.8'
                        increase='+43%'
                        icon={
                            <TrafficIcon
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: '26px'
                                }}
                            />
                        }
                    />
                </Box>

                {/*ROW 2 */}
                <Box
                    gridColumn={'span 8'}
                    gridRow='span 2'
                    backgroundColor={colors.primary[400]}
                >
                    <Box
                        mt='25px'
                        p='0 30px'
                        display='flex'
                        justifyContent='space-between'
                        alignItems='center'
                    >
                        <Box>
                            <Typography variant="h5" fontWeight='600' color={colors.grey[100]}>
                                Revenue generated
                            </Typography>
                            <Typography variant="h3" fontWeight='bold' color={colors.greenAccent[400]}>
                                $59,342,321
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton>
                                <DownloadOutlinedIcon
                                    sx={{
                                        fontSize:'26px',
                                        color: colors.greenAccent[500]
                                    }}
                                />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box height='250px' mt='-20px'>
                        <LineChart isDashboard={true}/>
                    </Box>
                </Box>        
                    {/* TRANSATIONS */}
                    <Box
                        gridColumn='span 4'
                        gridRow='span 2'
                        backgroundColor={colors.primary[400]}
                        overflow='auto'
                    >
                        <Box
                            display='flex'
                            justifyContent='space-between'
                            alignItems='center'
                            borderBottom={`4px solid ${colors.primary[400]}`}
                            colors={colors.grey[100]}
                            p='15px'
                        >
                            <Typography
                                color={colors.grey[100]}
                                variant='h5'
                                fontWeight='600'
                            >
                                Recent Transations
                            </Typography>
                        </Box>
                        {mockTransactions.map((transation,i)=>(
                            <Box
                                key={`${transation.txId}-${i}`}
                                display='flex'
                                justifyContent='space-between'
                                alignItems='center'
                                borderBottom={`4px solid ${colors.primary[400]}`}
                                p='15px'
                            >
                                <Box>
                                    <Typography
                                        color={colors.greenAccent[400]}
                                        variant='h5'
                                        fontWeight='600'
                                    >
                                        {transation.txId}
                                    </Typography>
                                    <Typography
                                        color={colors.grey[100]}
                                    >
                                        {transation.user}
                                    </Typography>
                                </Box>
                                <Box color={colors.grey[100]}>
                                    {transation.date}
                                </Box>
                                <Box
                                    backgroundColor={colors.greenAccent[500]}
                                    p='5px 1px'
                                    borderRadius='4px'
                                >
                                    ${transation.cost}
                                </Box>
                            </Box>
                        ))}
                    </Box>
                {/*ROW 3 */}
                <Box
                    gridColumn='span 4'
                    gridRow='span 2'
                    backgroundColor={colors.primary[400]}
                    p='30px'
                >
                    <Typography
                        variant="h5"
                        fontWeight='500'
                    >
                        Campaign
                    </Typography>
                    <Box
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                        mt='25px'
                    >
                        <ProgressCircle  size='125'/>
                        <Typography 
                            variant="h5"
                            color={colors.greenAccent[500]}
                            sx={{mt:'15px'}}
                        >
                            $48,1726 revenue generated
                        </Typography>
                        <Typography>
                            Includes extra misc expenditures and costs
                        </Typography>
                    </Box>
                </Box>

                <Box
                    gridColumn='span 4'
                    gridRow='span 2'
                    backgroundColor={colors.primary[400]}
                >
                    <Typography
                        variant="h5"
                        fontWeight='500'
                        sx={{p:'30px 30px 0 30px'}}
                    >
                        Sales Quantity
                    </Typography>
                    <Box
                        height='250px'
                        mt='-20px'
                    >
                        <BarChart isDashboard={true} />
                    </Box>
                </Box>

                <Box
                    gridColumn='span 4'
                    gridRow='span 2'
                    backgroundColor={colors.primary[400]}
                    p='30px'
                >
                    <Typography
                        variant="h5"
                        fontWeight='500'
                        sx={{mb:'15px'}}
                    >
                        Geografi Based trafic
                    </Typography>
                    <Box
                        height='200px'
                    >
                        <GeographyMap isDashboard={true} />
                    </Box>
                </Box>
            </Box>
    </Box>

    )
}


export default Dashboard