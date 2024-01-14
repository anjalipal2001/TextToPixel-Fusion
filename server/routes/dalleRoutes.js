// import express from 'express';
// import * as dotenv from 'dotenv';
// // import {  OpenAIApi, Configuration } from 'openai';
// import * as OpenAI from 'openai';
// dotenv.config();

// const router = express.Router();

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// // const openai = new OpenAIApi(configuration);

// router.route('/').get((req, res) => {
//   res.status(200).json({ message: 'Hello from DALL-E!' });
// });

// router.route('/').post(async (req, res) => {
//   try {
//     const { prompt } = req.body;

//     const aiResponse = await openai.images.generate({
//       prompt,
//       n: 1,
//       size: '1024x1024',
//       response_format: 'b64_json',
//     });

//     const image = aiResponse.data.data[0].b64_json;
//     res.status(200).json({ photo: image });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error?.response.data.error.message || 'Something went wrong');
//   }
// });

// export default router;

import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY 
});
router.route('/').get((req,res) => {
    res.send('Hello from DALL-E!')
}) 

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;
        const aiResponse = await openai.images.generate({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json',
        });
        
        // console.log("aiResponse :  ",aiResponse)
        const image = aiResponse.data[0].b64_json;
        res.status(200).json({photo: image});
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error?.response.data.error.message)
    }
})

export default router;


// import express from 'express';
// import * as dotenv from 'dotenv';
// //import { Configuration , OpenAIApi} from 'openai';
// import { Configuration , OpenAIApi } from 'openai';

// import Post from '../mongodb/models/post.js';

// dotenv.config();

// const router = express.Router();

// const configuration = new Configuration({
//     apiKey: 'your Api key',
// })

// const openai = new OpenAIApi(configuration);
// router.route('/').get((req , res) => {
//     res.send('Hello from DALL-E')
// });

// router.route('/').post(async (req , res) => {
//   try {
//     const { prompt } = req.body;

//     const aiResponse = await openai.createImage({
//         prompt,
//         n: 1,
//         size:'1024x1024',
//         response_format:'b64_json',
//     });
//      const image = aiResponse.data.data[0].b64_json;

//      res.status(200).json({ photo : image});
//   } catch (error) {
//     console.log(error);
//     res.status(500).send(error?.response.data.error.message)
//   }
// })
// export default router;


// import express from 'express';
// import * as dotenv from 'dotenv';
// import OpenAI from 'openai';
// dotenv.config();

// const router = express.Router();

// const openai = new OpenAI({
//   key: process.env.OPENAI_API_KEY,
//   // Add other configuration options if needed
// });

// router.route('/').get((req, res) => {
//   res.status(200).json({ message: 'Hello from DALL-E!' });
// });

// router.route('/').post(async (req, res) => {
//   try {
//     const { prompt } = req.body;

//     const aiResponse = await openai.Completion.create({
//       engine: 'text-davinci-002', // Adjust the engine as needed
//       prompt,
//       max_tokens: 150,
//     });

//     const generatedText = aiResponse.choices[0].text;
//     res.status(200).json({ generatedText });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error?.response?.data?.error?.message || 'Something went wrong');
//   }
// });

// export default router;



