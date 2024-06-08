import mongoose from 'mongoose'


const NewsEventsSchema = mongoose.Schema({
    name: String,
    description: String,
    date: Date,
    image: String,
    images: [String],
})
const NewsEvents = mongoose.model('NewsEvents', NewsEventsSchema);
export default NewsEvents;



