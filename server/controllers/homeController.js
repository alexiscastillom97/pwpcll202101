const index = (req, res) => {
    res.render('index', {
        title: 'ProjNotes',
    });
};

const greeting = (req, res) => {
    res.status(200).json({
        message: 'Hola Alexis Castillo',
    });
};

export default {
    index,
    greeting,
};