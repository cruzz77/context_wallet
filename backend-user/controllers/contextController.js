const ContextItem = require('../models/ContextItem');

// @desc    Get all context items for current user
// @route   GET /api/context
// @access  Private
const getContexts = async (req, res) => {
    const contexts = await ContextItem.find({ user: req.user.id }).sort({
        createdAt: -1,
    });
    res.status(200).json(contexts);
};

// @desc    Create a new context item
// @route   POST /api/context
// @access  Private
const createContext = async (req, res) => {
    if (!req.body.title || !req.body.type) {
        res.status(400).json({ message: 'Please add a title and type' });
        return;
    }

    try {
        const context = await ContextItem.create({
            user: req.user.id,
            title: req.body.title,
            description: req.body.description,
            type: req.body.type,
            tags: req.body.tags,
            relatedPeople: req.body.relatedPeople,
            eventDate: req.body.eventDate,
        });

        res.status(201).json(context);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Get single context item
// @route   GET /api/context/:id
// @access  Private
const getContextById = async (req, res) => {
    try {
        const context = await ContextItem.findById(req.params.id);

        if (!context) {
            res.status(404).json({ message: 'Context item not found' });
            return;
        }

        // Make sure user owns the contact
        if (context.user.toString() !== req.user.id) {
            res.status(401).json({ message: 'User not authorized' });
            return;
        }

        res.status(200).json(context);
    } catch (error) {
        res.status(400).json({ message: 'Invalid ID' });
    }
};

// @desc    Update context item
// @route   PUT /api/context/:id
// @access  Private
const updateContext = async (req, res) => {
    try {
        const context = await ContextItem.findById(req.params.id);

        if (!context) {
            res.status(404).json({ message: 'Context item not found' });
            return;
        }

        if (context.user.toString() !== req.user.id) {
            res.status(401).json({ message: 'User not authorized' });
            return;
        }

        const updatedContext = await ContextItem.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json(updatedContext);
    } catch (error) {
        res.status(400).json({ message: 'Invalid ID' });
    }
};

// @desc    Delete context item
// @route   DELETE /api/context/:id
// @access  Private
const deleteContext = async (req, res) => {
    try {
        const context = await ContextItem.findById(req.params.id);

        if (!context) {
            res.status(404).json({ message: 'Context item not found' });
            return;
        }

        if (context.user.toString() !== req.user.id) {
            res.status(401).json({ message: 'User not authorized' });
            return;
        }

        await context.deleteOne();

        res.status(200).json({ id: req.params.id });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'Invalid ID' });
    }
};

// @desc    Search context items
// @route   GET /api/context/search?q=keyword
// @access  Private
const searchContext = async (req, res) => {
    const query = req.query.q;

    if (!query) {
        res.status(400).json({ message: 'Please provide a search query' });
        return;
    }

    try {
        // Simple regex search on title, description, or tags
        // Finding items belonging to the user AND matching query
        const results = await ContextItem.find({
            user: req.user.id,
            $or: [
                { title: { $regex: query, $options: 'i' } },
                { description: { $regex: query, $options: 'i' } },
                { tags: { $regex: query, $options: 'i' } },
                { relatedPeople: { $regex: query, $options: 'i' } },
            ],
        }).sort({ createdAt: -1 });

        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createContext,
    getContexts,
    getContextById,
    updateContext,
    deleteContext,
    searchContext,
};
