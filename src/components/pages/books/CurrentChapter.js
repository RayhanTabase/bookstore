function CurrentChapter() {
  const randomChapter = Math.floor(Math.random() * 201);
  return (
    <div className="currentChapter">
      <h4>Current Chapter</h4>
      <p>
        <span className="chapter">
          Chapter
        </span>
        <span>
          {randomChapter}
        </span>
      </p>
      <button type="button">Update Progress</button>
    </div>
  );
}

export default CurrentChapter;
