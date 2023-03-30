import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import {
	AppBar,
	Box,
	Toolbar,
	Button,
	Drawer,
	List,
	ListItemButton,
	ListItemText,
	Tab,
	Tabs,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import { FiMenu } from 'react-icons/fi';

export default function NavBar() {
	const [openDrawer, setOpenDrawer] = useState(false);
	const theme = useTheme();
	const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
	return (
		<Box>
			<AppBar position="fixed" sx={{ backgroundColor: '#fff' }}>
				<Toolbar>
					<IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
						<Box
							sx={{
								width: 40,
								height: 40,
								backgroundColor: '#301E4E',
								borderRadius: 3,
							}}
						/>
					</IconButton>
					{isMatch ? (
						<>
							<Drawer
								open={openDrawer}
								anchor="right"
								onClose={() => setOpenDrawer(false)}
								onClick={() => setOpenDrawer(false)}
								PaperProps={{
									style: {
										width: '350px',
										padding: '10px',
										backgroundColor: '#301E4E',
										color: '#fff',
									},
								}}
							>
								<List className="mt-12">
									<ListItemButton>
										<ListItemText style={{ fontSize: '60px' }}>Services</ListItemText>
									</ListItemButton>
									<ListItemButton>
										<ListItemText style={{ fontSize: '60px' }}>About Us</ListItemText>
									</ListItemButton>
									<ListItemButton>
										<ListItemText style={{ fontSize: '60px' }}>Blogs</ListItemText>
									</ListItemButton>
									<ListItemButton>
										<ListItemText style={{ fontSize: '60px' }}>Contact Us</ListItemText>
									</ListItemButton>
								</List>
								<Button className="bg-red-500 text-white ">Book A Free Marketing Audit</Button>
							</Drawer>
							<IconButton onClick={() => setOpenDrawer(true)} sx={{ marginLeft: 'auto', color: 'black' }}>
								<FiMenu />
							</IconButton>
						</>
					) : (
						<>
							<Typography sx={{ float: 'left', marginLeft: 'auto' }}>
								<Tabs textColor="secondary">
									<Tab
										label="Contact"
										style={{
											fontFamily: 'Playfair Display',
											textTransform: 'capitalize',
											fontSize: '25px',
											color: '#1F1235',
										}}
									/>
									<Tab
										label="Work"
										style={{
											fontFamily: 'Playfair Display',
											textTransform: 'capitalize',
											fontSize: '25px',
											color: '#1F1235',
										}}
									/>
								</Tabs>
							</Typography>
							<Drawer
								open={openDrawer}
								onClick={() => setOpenDrawer(false)}
								anchor="right"
								PaperProps={{
									style: {
										width: '400px',
										padding: '10px',
										backgroundColor: '#301E4E',
										color: '#fff',
									},
								}}
							>
								<List className="mt-12">
									<ListItemButton>
										<ListItemText style={{ fontSize: '60px' }}>Services</ListItemText>
									</ListItemButton>
									<ListItemButton>
										<ListItemText style={{ fontSize: '60px' }}>About Us</ListItemText>
									</ListItemButton>
									<ListItemButton>
										<ListItemText style={{ fontSize: '60px' }}>Blogs</ListItemText>
									</ListItemButton>
									<ListItemButton>
										<ListItemText style={{ fontSize: '60px' }}>Contact Us</ListItemText>
									</ListItemButton>
								</List>

								<Button className="bg-red-500 text-white ">Book A Free Marketing Audit</Button>
							</Drawer>
							<IconButton onClick={() => setOpenDrawer(true)} className="text-black">
								<FiMenu />
							</IconButton>
						</>
					)}
				</Toolbar>
			</AppBar>
		</Box>
	);
}
