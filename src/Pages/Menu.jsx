import React from 'react';
import Layout from '../Components/Layout/Layout';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Menulist} from '../Data/Data';

const Menu = () => {
  return (
    <Layout>
      <Box>
        {Menulist.map((menu) => (
            <Card sx={{maxWidth:'390px'}}>
              <CardActionArea>
                <CardMedia sx={{minHeight:"400px"}}
                 component={"img"} src={menu.image}
                  alt={menu.name} 
                  />
                <CardContent>
                  <Typography variant="h5" gutterBottom component={"div"}>
                    {menu.name}
                  </Typography>
                  <Typography variant="body2"> {menu.description}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
      </Box>
    </Layout>
  );
};

export default Menu
