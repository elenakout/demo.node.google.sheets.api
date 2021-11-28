const Sheet = require('../../config/sheet');

const doc = new Sheet();

// @desc      Get all notes
// @route     GET /api/v1/notes
// @access    Public
exports.getAllNotes = async (req, res) => {
  // /api/v1/notes?type=todo
  try {
    await doc.load();

    const data = await doc.getData();

    res.status(200).json({
      status: 'success',
      results: data.length,
      message: data,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

// @desc      Create note
// @route     POST /api/v1/notes
// @access    Public
exports.createNote = async (req, res) => {
  try {
    await doc.load();

    await doc.addRow(req.body);
    const data = await doc.getData();

    res.status(200).json({
      status: 'success',
      result: data.length,
      message: data,
    });

  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

// @desc      Get one note
// @route     GET /api/v1/notes/:id
// @access    Public
exports.getNote = async (req, res) => {
  try {
    const id = req.params.id * 1;

    await doc.load();

    const note = await doc.getOneNote(id);

    res.status(200).json({
      status: 'success',
      data: note,
    });


  } catch (error) {
    res.status(400).json({
      status: 'fail',
      messagge: error,
    });
  }
};

// @desc      Update note
// @route     PATCH /api/v1/notes/:id
// @access    Public
exports.updateNote = async (req, res) => {
  try {
    const id = req.params.id * 1;

    await doc.load();

    await doc.updateNote(id, req.body);

    const data = await doc.getData();

    res.status(200).json({
      status: 'success',
      data: data,
    });


  } catch (error) {
    res.status(400).json({
      status: 'fail',
      messagge: error,
    });
  }
};

// @desc      Delete note
// @route     DELETE /api/v1/notes/:id
// @access    Public
exports.deleteNote = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet ready',
  });
};
