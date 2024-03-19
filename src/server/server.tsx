import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

interface Article {
  id: string;
  title: string;
  content: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
}

const articles: Article[] = [];
const products: Product[] = [];

app.post('/api/articles', (req: Request, res: Response) => {
  const { title, content } = req.body;
  
    const newArticle: Article = { id: (articles.length + 1).toString(), title, content };
    articles.push(newArticle);
    res.status(201).send({ message: "Article added successfully" });
    
    if (!res.status(201)) {
      res.status(403).send({ message: "Forbidden" });
    }
});

app.post('/api/products', (req: Request, res: Response) => {
  const { secretKey, name, description } = req.body;
  if (secretKey === "YOUR_SECRET_KEY") {
    const newProduct: Product = { id: products.length + 1, name, description };
    products.push(newProduct);
    res.status(201).send({ message: "Product added successfully" });
  } else {
    res.status(403).send({ message: "Forbidden" });
  }
});

app.get('/api/products', (req: Request, res: Response) => {
  res.status(200).json(products);
});

app.get('/api/articles', (req: Request, res: Response) => {
  res.status(200).json(articles);
});

app.get('/api/articles/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  // Załóżmy, że używasz jakiegoś rodzaju magazynu danych; tutaj użyjemy przykładowego sposobu wyszukiwania
  const article = articles.find(article => article.id === id);

  if (article) {
    res.status(200).json(article);
  } else {
    res.status(404).send('Article not found');
  }
});

app.delete('/api/articles/:id', (req, res) => {
  const { id } = req.params;

  const index = articles.findIndex(article => article.id === id);

  if (index > -1) {
    articles.splice(index, 1); 
    res.status(200).send('Article deleted successfully');
  } else {
    res.status(404).send('Article not found');
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))