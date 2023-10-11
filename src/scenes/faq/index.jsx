import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<Box m="20px">
			<Header title="FAQ" subtitle="Frequently Asked Questions Page" />
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography colors={colors.greenAccent[500]} variant="h5">
						An Important Question 1
					</Typography>
					<AccordionDetails>
						<Typography>
							111 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
							blandit leo lobortis eget.
						</Typography>
					</AccordionDetails>
				</AccordionSummary>
			</Accordion>
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography colors={colors.greenAccent[500]} variant="h5">
						Another Important Question 2
					</Typography>
					<AccordionDetails>
						<Typography>
							222 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
							blandit leo lobortis eget.
						</Typography>
					</AccordionDetails>
				</AccordionSummary>
			</Accordion>
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography colors={colors.greenAccent[500]} variant="h5">
						Another Important Question 3
					</Typography>
					<AccordionDetails>
						<Typography>
							333 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
							blandit leo lobortis eget.
						</Typography>
					</AccordionDetails>
				</AccordionSummary>
			</Accordion>
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography colors={colors.greenAccent[500]} variant="h5">
						Another Important Question 4
					</Typography>
					<AccordionDetails>
						<Typography>
							444 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
							blandit leo lobortis eget.
						</Typography>
					</AccordionDetails>
				</AccordionSummary>
			</Accordion>
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography colors={colors.greenAccent[500]} variant="h5">
						Another Important Question 5
					</Typography>
					<AccordionDetails>
						<Typography>
							555 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
							blandit leo lobortis eget.
						</Typography>
					</AccordionDetails>
				</AccordionSummary>
			</Accordion>
		</Box>
	);
};

export default FAQ;
