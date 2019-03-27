db.allDocs({ include_docs: true })
  .then(function(result) {
    return Promise.all(
      result.rows.map(function(row) {
        return db.remove(row.doc);
      })
    );
  })
  .then(function(arrayOfResults) {
    // All docs have really been removed() now!
  });
