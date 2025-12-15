const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes (Placeholders for now)
app.get('/', (req, res) => {
    res.send('Context Wallet API is running...');
});

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/context', require('./routes/contextRoutes'));

app.use(require('./middlewares/errorMiddleware').errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
