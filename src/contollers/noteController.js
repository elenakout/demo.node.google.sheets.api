const Sheet = require('../../config/sheet');

const doc = new Sheet();

// @desc      Get all notes
// @route     GET /api/v1/notes
// @access    Public
exports.getAllNotes = async (req, res, next) => {
  // /api/v1/notes?type=todo
  try {
    await doc.load();

    const data = await doc.getData();

    res.status(200).json({
      status: 'success',
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
exports.createNote = (req, res, next) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet ready',
  });
};

// @desc      Get one note
// @route     GET /api/v1/notes/:id
// @access    Public
exports.getNote = (req, res, next) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet ready',
  });
};

// @desc      Update note
// @route     PUT /api/v1/notes/:id
// @access    Public
exports.updateNote = (req, res, next) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet ready',
  });
};

// @desc      Delete note
// @route     DELETE /api/v1/notes/:id
// @access    Public
exports.deleteNote = (req, res, next) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet ready',
  });
};
