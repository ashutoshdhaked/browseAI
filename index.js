const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());
const apiKey = process.env.api_key;

app.get('/products', async (req, res) => {
    try {
        const robotId = '9ff2dd21-1583-4c06-b364-5505f6722628';        
        const url = `https://api.browse.ai/v2/robots/${robotId}/tasks?page=1`; 
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
              }
        });
        return res.status(200).json(response.data);
      } catch (error) {
        console.error('Error fetching data from Browse AI:', error);
        return res.status(500).json({message : 'internal server error !!'});
      }
});

app.get('/screenshot', async (req, res) => {
    try {
        const robotId = 'd89206e2-55ef-4bda-b8ed-3ea520f085e3';        
        const url = `https://api.browse.ai/v2/robots/${robotId}/tasks?page=1`; 
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
              }
        });
        return res.status(200).json(response.data);
      } catch (error) {
        console.error('Error fetching data from Browse AI:', error);
        return res.status(500).json({message : 'internal server error !!'});
      }
});

app.get('/htmldata', async (req, res) => {
    try {
        const robotId = '9c62a575-ae6c-4df7-b2bb-68e91b843bdd';        
        const url = `https://api.browse.ai/v2/robots/${robotId}/tasks?page=1`; 
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
              }
        });
        return res.status(200).json(response.data);
      } catch (error) {
        console.error('Error fetching data from Browse AI:', error);
        return res.status(500).json({message : 'internal server error !!'});
      }
});

app.get('/stockdata', async (req, res) => {
    try {
        const robotId = '8df80a09-da77-411d-987a-c7aef9f4ecbf';        
        const url = `https://api.browse.ai/v2/robots/${robotId}/tasks?page=1`; 
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
              }
        });
        return res.status(200).json(response.data);
      } catch (error) {
        console.error('Error fetching data from Browse AI:', error);
        return res.status(500).json({message : 'internal server error !!'});
      }
});

app.listen(8090, () => {
  console.log('Server started on port 8090');
});
