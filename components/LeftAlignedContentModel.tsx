import Image from "next/image";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import GoBackButton from "./GoBackButton";
interface LeftAlignedContentModelProps {
  title: string;
  body: string;
  imageUrl: any;
  addedComponent: React.ReactNode;
  showSignUpBtn?: boolean;
  showGoBackBtn?: boolean;
}

const LeftAlignedContentModel = ({
  title,
  body,
  imageUrl,
  addedComponent,
  showSignUpBtn,
  showGoBackBtn,
}: LeftAlignedContentModelProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {body}
          </Typography>
          {addedComponent && <Box>{addedComponent}</Box>}
          {showGoBackBtn && <GoBackButton />}
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Image
            src={imageUrl}
            alt={title}
            // width={500}
            // height={500}
            id="animateimg"
            placeholder="blur"
            // blurDataURL="/logo.png"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LeftAlignedContentModel;
