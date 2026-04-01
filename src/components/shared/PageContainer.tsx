import { Container } from "@mui/material";
import { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
};

const PageContainer = ({ children }: PageContainerProps) => {
  return <Container sx={{ py: 4 }}>{children}</Container>;
};

export default PageContainer;