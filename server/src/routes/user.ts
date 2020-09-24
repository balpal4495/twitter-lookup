import { Router } from 'express';
import { FullUser } from 'twitter-d';
import Twitter from 'twitter-lite';
import { ACCESS_TOKEN, API_KEY, ACCESS_TOKEN_SECRET, API_SECRET_KEY } from '../constants';


const router = Router();
router.get('/search/:text', async (req, res) => {

  try {
    const { text } = req.params
    const client = new Twitter({
      consumer_key: API_KEY,
      consumer_secret: API_SECRET_KEY,
      access_token_key: ACCESS_TOKEN,
      access_token_secret: ACCESS_TOKEN_SECRET
    });

    const users = await client.get("users/search", {
      q: text
    });

    const data = users.map((user: FullUser) => {
      return {
        user_id: user.id,
        screen_name: user.screen_name
      }
    })

    return res.status(200).send({ users: data });

  } catch (error) {
    console.log('error', error);
  }

});

export default router;
