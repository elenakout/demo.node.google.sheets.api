# Notes App - Server

This project is a demo that uses `google-sheets` as a database. It's a simple notes app which implements the basic CRUD functions. The server is built with Node and Express and the client is build with Vuejs.

## Features - MVP

- Display all notes
- Display one note by id
- Update note by id
- Delete note by id
- Filtering `future`
- Data Validation `future`

## Data model

- Title: String [required]
- Content: String [required]
- Type: String [note/todo/feature] [required]
- Project: String [optional]
- CreatedAt: Date [default: now]
