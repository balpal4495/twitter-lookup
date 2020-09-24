require('dotenv').config()
import app from './app';

// Start server
const port = 8000;
app.listen(port, () => console.log(`API running on port ${port}...`));