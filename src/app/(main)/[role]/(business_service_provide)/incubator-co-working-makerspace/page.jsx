import PageHeader from '@/components/PageHeader'
import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Facilities = () => {
  return (
    <PageHeader title="Incubators, Co working and maker spaces">
      <Box sx={{ marginY: 2 }}>
        <Typography variant="body1" gutterBottom>
          <Link
            href="https://entrepreneurshipfoundation.org/business-incubators-in-ct"
            target="_blank"
            rel="noopener"
          >
            https://entrepreneurshipfoundation.org/business-incubators-in-ct
          </Link>
        </Typography>
        <Typography variant="body2" gutterBottom>
          The Entrepreneurship Foundation supports a brick-and-mortar store, the
          Emporium, at 305 Fairfield Avenue in downtown Bridgeport as well as a
          Shopify store for Connecticut startups:
          <Link
            href="https://www.CTEntrepreneurs.us"
            target="_blank"
            rel="noopener"
          >
            www.CTEntrepreneurs.us
          </Link>
          . The Foundation collects customer payments and pays the sales tax on
          behalf of the vendors. The store retains 10% of the sales to cover
          payment processing and to defray operating costs, plus an additional
          10% for shipping and handling on products mailed from the store; or
          entrepreneurs may elect to do their own shipping.
        </Typography>
        <Typography variant="body2" gutterBottom>
          The Emporium will take professional photos of your products and post
          them online with descriptions; and provide approximately three square
          feet of display space in the physical store.
        </Typography>
        <Typography variant="body2">
          If you would like to place your products in the Emporium, please visit
          the store any Thursday, Friday or Saturday afternoon or visit
          <Link
            href="https://www.EntrepreneurshipFoundation.org/store"
            target="_blank"
            rel="noopener"
          >
            www.EntrepreneurshipFoundation.org/store
          </Link>
          .
        </Typography>
      </Box>
    </PageHeader>
  );
}

export default Facilities