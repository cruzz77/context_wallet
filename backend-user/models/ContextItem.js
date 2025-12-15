const mongoose = require('mongoose');

const contextItemSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        title: {
            type: String,
            required: [true, 'Please add a title'],
        },
        description: {
            type: String,
        },
        type: {
            type: String,
            required: [true, 'Please select a type'],
            enum: ['person', 'link', 'promise', 'note', 'meeting'],
        },
        tags: {
            type: [String],
        },
        relatedPeople: {
            type: [String], // Array of names or emails
        },
        eventDate: {
            type: Date,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('ContextItem', contextItemSchema);
