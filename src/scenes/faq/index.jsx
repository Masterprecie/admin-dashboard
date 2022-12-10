import { Box, useTheme, Typography } from '@mui/material'
import Header from '../../components/Header'
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { tokens } from '../../theme'




const FAQ = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box m='20px'>
			<Header title='FAQ' subtitle='Frequently Asked Question Page' />

			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant='h5'>
						An important question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nobis iusto molestias placeat numquam nisi quos, possimus delectus est minus excepturi voluptates illum beatae suscipit! Nesciunt porro repellendus aut fugit?
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant='h5'>
						Another important question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nobis iusto molestias placeat numquam nisi quos, possimus delectus est minus excepturi voluptates illum beatae suscipit! Nesciunt porro repellendus aut fugit?
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant='h5'>
						Your favorite question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nobis iusto molestias placeat numquam nisi quos, possimus delectus est minus excepturi voluptates illum beatae suscipit! Nesciunt porro repellendus aut fugit?
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant='h5'>
						More Questions
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nobis iusto molestias placeat numquam nisi quos, possimus delectus est minus excepturi voluptates illum beatae suscipit! Nesciunt porro repellendus aut fugit?
					</Typography>
				</AccordionDetails>
			</Accordion>


			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant='h5'>
						Final question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nobis iusto molestias placeat numquam nisi quos, possimus delectus est minus excepturi voluptates illum beatae suscipit! Nesciunt porro repellendus aut fugit?
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant='h5'>
						AN important question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nobis iusto molestias placeat numquam nisi quos, possimus delectus est minus excepturi voluptates illum beatae suscipit! Nesciunt porro repellendus aut fugit?
					</Typography>
				</AccordionDetails>
			</Accordion>
		</Box>
	)
}

export default FAQ;