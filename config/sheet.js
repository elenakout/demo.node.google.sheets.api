const { GoogleSpreadsheet } = require('google-spreadsheet');
const dotenv = require('dotenv');

dotenv.config();

module.exports = class Sheet {
  constructor() {
    this.doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET);
  }

  async load() {
    await this.doc.useServiceAccountAuth(require('./cred.json'));
    await this.doc.loadInfo();
  }

  noteSheet() {
    const sheet = this.doc.sheetsByIndex[0];
    return sheet;
  }

  async readRows() {
    // const sheet = this.doc.sheetsByIndex[0];
    // return await sheet.getRows();
    return await this.noteSheet().getRows();
  }

  async getData() {
    // const sheet = this.doc.sheetsByIndex[0];

    // const rows = await sheet.getRows();
    const rows = await this.readRows();

    const data = [];

    for (const index in rows) {
      const note = {
        id: index,
        title: rows[index].title,
        content: rows[index].content,
        category: rows[index].category,
        modified: rows[index].modified,
        created_at: rows[index].created_at,
      };

      data.push(note);
    }
    return data;
  }

  async addRow(row) {
    // const sheet = this.doc.sheetsByIndex[0];
    // await sheet.addRow(row);
    await this.noteSheet().addRow(row);
  }

  async getOneNote(idx) {
    // const sheet = this.doc.sheetsByIndex[0];
    // const rows = await sheet.getRows();
    const rows = await this.readRows();

    const note = {
      id: idx,
      title: rows[idx].title,
      content: rows[idx].content,
      category: rows[idx].category,
      modified: rows[idx].modified,
      created_at: rows[idx].created_at,
    };

    return note;
  }

  async updateNote(idx, data) {
    // const sheet = this.doc.sheetsByIndex[0];
    // const rows = await sheet.getRows();
    const rows = await this.readRows();


    rows[idx].title = data.title; // update a value
    rows[idx].content = data.content;
    rows[idx].category = data.category;
    rows[idx].modified = data.modified;
    rows[idx].created_at = data.created_at;
    await rows[idx].save(); // save updates
  }

  async deleteNote(idx) {
    // const sheet = this.doc.sheetsByIndex[0];
    // const rows = await sheet.getRows();
    const rows = await this.readRows();

    await rows[idx].delete(); // delete a row
  }

};
