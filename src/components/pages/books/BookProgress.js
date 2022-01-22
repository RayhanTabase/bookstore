import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function BookProgress() {
  const completion = Math.floor(Math.random() * 101);
  return (
    <div className="bookProgress">
      <div className="completionBar">
        <CircularProgressbar
          value={completion}
          styles={buildStyles({
            pathColor: '#0290ff',
            backgroundColor: '#3e98c7',
          })}
        />
      </div>
      <p className="completionText">
        <span className="rate">
          {completion}
          %
        </span>
        <span className="completedPlaceHolder">
          Completed
        </span>
      </p>
    </div>
  );
}

export default BookProgress;
