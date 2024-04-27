const mongodb = require('../DB/Connection');

/*const getData = async (req, res, next) => {
    const result = await mongodb.getDb().db().collection('user').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
        console.log(lists[0]);
        console.log('Inside getData');
    });
};*/

const getData = async (req, res, next) => {
    try {
        const result = await mongodb.getDb().db().collection('user').find();
        const lists = await result.toArray();
        
        if (lists.length === 0) {
            console.log('No documents found');
            res.status(404).json({ message: 'No documents found' });
            return;
        }

        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Error fetching data', error: error });
    }
};

module.exports = { getData };