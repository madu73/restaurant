import React from 'react';
import Layout from '../Components/Layout/Layout';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my: 15,
        textAlign:"center",
        p:2,
        "&  h4":{
          fontWeight:"bold",
          my:2,
          fontSize:'2rem'
        },
        "& p":{
          textAlign:'justify',
        },
        "@media (max-width:600px)": {
          mt:0,
          "& h4 ":{
            fontSize: '1.5rem',
          }
        }
        
      }}>
        <Typography variant='h4'>Welcome To My Restaurant</Typography>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
           Doloribus mollitia aut totam blanditiis fugit omnis aperiam eveniet dolores,
            nihil nostrum officiis! Cumque odio reprehenderit possimus voluptate facere,
             accusamus assumenda, unde culpa quasi aliquid adipisci ipsum nam, 
             quae laudantium aperiam ipsam. Aliquam minus dolores nemo sequi laudantium saepe, omnis praesentium earum id accusantium? Eius laboriosam cupiditate enim, omnis quis, deleniti dolorum harum temporibus natus provident id ducimus obcaecati minima ipsa ratione eaque suscipit? Quae ut expedita esse a, ex quaerat laudantium magnam cupiditate placeat itaque, ducimus animi sit reiciendis iure quia. Sapiente corporis qui ipsam,
           molestias cumque voluptatem praesentium alias delectus?</p>
           <br/>
           <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus voluptatum numquam repudiandae 
            maspernatur non quasi enim velit tempore inventore nulla tenetur modi, laborum error assumenda quidem voluptates provident quaerat eveniet maxime exercitationem eum, optio obcaecati voluptatibus cum? Accusantium doloribus quo veniam, non pariatur dolore sed minus harum reiciendis accusamus? In quisquam nam esse distinctio veritatis autem consequuntur aliquid fugiat aspernatur doloribus! Consequuntur molestias, quod laborum, fugiat nam unde nemo voluptatibus modi officiis asperiores est, expedita accusantium repellendus illum molestiae ea nisi quos. Ducimus provident eaque ipsam sit obcaecati aspernatur! Doloremque cumque numquam, ratione 
            totam molestiae tempora corporis expedita aut praesentium?
           </p>
      </Box>
    </Layout>
  );
};

export default About
