import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';
const newsApi = process.env.NEWS_API;

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const data = await axios.get(
      `${newsApi}&category=${req.query.category}`
    );
    res.json({ name: data.data.articles });
  } catch (err) {
    console.log(err);
    // res.sendStatus(500);
  }
}