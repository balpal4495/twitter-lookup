import Twitter from 'twitter-lite';
import { Router } from 'express';
import { ACCESS_TOKEN, API_KEY, ACCESS_TOKEN_SECRET, API_SECRET_KEY } from '../constants';


const router = Router();
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const client = new Twitter({
      consumer_key: API_KEY,
      consumer_secret: API_SECRET_KEY,
      access_token_key: ACCESS_TOKEN,
      access_token_secret: ACCESS_TOKEN_SECRET
    });

    const data = await client.get("statuses/user_timeline", {
      user_id: userId
    });


    return res.status(200).send(data);

  } catch (error) {
    console.log('error', error);
  }
});

export default router;
