import Image from "next/image";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import GoBackButton from "./GoBackButton";
interface RightAlignedContentModelProps {
  title: string;
  body: string;
  imageUrl: any;
  addedComponent: React.ReactNode;
  showSignUpBtn?: boolean;
  showGoBackBtn?: boolean;
}

const RightAlignedContentModel = ({
  title,
  body,
  imageUrl,
  addedComponent,
  showSignUpBtn,
  showGoBackBtn,
}: RightAlignedContentModelProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid size={{ xs: 12, sm: 6 }}>
          <Image
            src={imageUrl}
            alt={title}
            // width={500}
            // height={500}
            id="animateimg2"
            placeholder="blur"
            // blurDataURL="/logo.png"
          />
        </Grid>
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
      </Grid>
    </Box>
  );
};

export default RightAlignedContentModel;
