import { Router } from "express";
import { User } from "models/user";
import { JsonSerializer } from "typescript-json-serializer";


const router = Router();
const serializer = new JsonSerializer();

const user: User = {
  id: '1',
  email: 'joabe',
  name: 'joabe@joabe.com'

}

router.get('/', (req, res) => {
  res.send('Hello, World!');
});

router.get('/users', (req, res) => {
  const serialized = serializer.serialize(user);
  res.json(serialized);
});

export default router;
