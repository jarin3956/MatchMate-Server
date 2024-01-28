const testData = require('../Model/testModel');


const getTestData = async (req,res) => {
    try {
        const testDataDocuments = await testData.find({});
        if (testDataDocuments) {
            console.log('Documents in testData collection:', testDataDocuments);
            res.status(200).json({ message: 'testData found', data: testDataDocuments });
        } else {
            res.status(404).json({ message: 'testData not found' });
        }
    } catch (error) {
        console.error('Error logging testData documents:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


module.exports = {getTestData}