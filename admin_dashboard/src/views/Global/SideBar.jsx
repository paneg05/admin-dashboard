import { useState } from "react"
import {Sidebar,Menu,MenuItem,useProSidebar} from 'react-pro-sidebar'
import { Box,IconButton, Typography, useTheme } from "@mui/material"
import { Link } from "react-router-dom"
import { tokens } from "../../theme"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined'
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'
import { sidebarClasses } from "react-pro-sidebar"
import { height } from "@mui/system"

const Item = ({title, to, icon, selected, setSelected})=>{
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const menuItemStyles={
        color: colors.grey[100],
        '& :hover':{
            color:'#868dfb !important'
        }
    }

 
    return (
        <MenuItem 
            
            active={selected === title} 
            style={menuItemStyles} 
            onClick={()=>setSelected(title)} 
            icon={icon}
            component={<Link to={to}/>}
            >
            <Typography>{title}</Typography>
            
        </MenuItem>
    )
}

const SideBar = ()=>{
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [isCollapsed, setIsCollapsed]=useState(false)
    const [selected,setSelected]=useState('Dashboard')
    const { collapseSidebar } = useProSidebar();

    function toglleSideBar (){
        setIsCollapsed(!isCollapsed)
        collapseSidebar()
        console.log('clicou')
    }

    return (
        <Box
            sx={{

                background: `${colors.primary[400]}`,
                '& .ps-menuitem-root:hover':{
                    background: `${colors.primary[400]}`
                },
                
                '& .ps-menu-icon':{
                    backgroundColor:'transparent !important'
                },
                '& .ps-menu-button':{
                    padding:'5px 35px 5px 20px !important'
                },
                '& .ps-menu-button:hover':{   
                    color:'#868dfb !important',
                    backgroundColor: `${colors.primary[400]} !important`
                },
                '& .ps-menu-button:active':{
                    color:'#6870fa !important'
                }
            }}
        >
            {/*USER*/}
            <Sidebar 
               
               rootStyles={{
                border:'none',
                [`.${sidebarClasses.container}`]: {
                    border: 'none',
                    backgroundColor: `${colors.primary[400]}`
                  
                },
              }}
            >
                
                <Menu>
                    {/* LOGO AND MENU ICON */}

                    <MenuItem 
                    onClick={()=>toglleSideBar()}
                    style={{
                        margin:'10px 0 20px 0',
                        color: colors.grey[100]
                    }}
                    icon={isCollapsed?<MenuOutlinedIcon />:undefined}
                    >
                        {
                            !isCollapsed && (
                                <Box
                                display={'flex'} 
                                justifyContent='space-between' 
                                alignItems={'center'}
                                ml={'15px'}
                                >
                                    <Typography variant="h3" color={colors.grey[100]}>
                                        ADMININS
                                    </Typography>
                                    <IconButton>
                                        <MenuOutlinedIcon />
                                    </IconButton>
                                </Box>
                            )
                        }
                    </MenuItem>

                    {!isCollapsed && (
                        <Box mb='25px'>
                            <Box display={'flex'} justifyContent='center' alignItems={'center'}>
                                <img
                                    alt="profile-user"
                                    width='100px'
                                    height='100px'
                                    src={'../../assets/user.jpg'}
                                    style={{cursor:'pointer', borderRadius:'50%'}}
                                />

                            </Box>
                            <Box textAlign={'center'}>
                                <Typography 
                                    variant="h2" 
                                    color={colors.grey[100]} 
                                    fontWeight='bold' 
                                    sx={{m:'10px 0 0 0'}}
                                    >
                                        Luan Santos
                                    </Typography>
                                <Typography
                                    variant="h5"
                                    color={colors.greenAccent[500]}
                                >
                                    VP Fancy Admin
                                </Typography>
                            </Box>
                        </Box>
                    )}
                    {/*MENU ITENS*/}
                    <Box paddingLeft={isCollapsed? undefined:'10%'}>
                        <Item
                            title='Dashboard'
                            to='/'
                            icon={<HomeOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{m:'15px 0 5px 20px' }}
                        >
                            Data
                        </Typography>
                        <Item
                            title='Manege Team'
                            to='/team'
                            icon={<PeopleOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title='Contacts Information'
                            to='/contacts'
                            icon={<ContactsOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title='Invoices Balances'
                            to='/invoices'
                            icon={<ReceiptOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{m:'15px 0 5px 20px' }}
                        >
                            Pages
                        </Typography>
                        <Item
                            title='Profile Form'
                            to='/form'
                            icon={<PersonOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title='Calendar'
                            to='/Calendar'
                            icon={<CalendarTodayOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title='FAQ Page'
                            to='/faq'
                            icon={<HelpOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{m:'15px 0 5px 20px' }}
                        >
                            Charts
                        </Typography>
                        <Item
                            title='Bar Chart'
                            to='/barchart'
                            icon={<BarChartOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title='Pie Chart'
                            to='/piechart'
                            icon={<PieChartOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title='Line Chart'
                            to='/linechart'
                            icon={<TimelineOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title='Geography Chart'
                            to='/Geographychart'
                            icon={<MapOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        
                        

                        
                    </Box>
                </Menu>
            </Sidebar>
        </Box>
    )
}


export default SideBar