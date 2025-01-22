const express = require('express');
const dotenv = require('dotenv');
const taskRouter = require('./src/routes/index');

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api', taskRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});