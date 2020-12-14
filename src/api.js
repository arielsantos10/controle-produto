import axios from 'axios';

export default axios.create({
    baseURL: 'http://209.126.0.127:6001',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'Accept-Encoding': 'gzip, deflate',
      'Accept-Language': 'pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3'
    },
});