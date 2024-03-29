import './Badge.css';

export default function Badge({ shape, color, text }) {
  return (
    <div className="badge-container">
      <div className={`badge badge-${shape} badge-${color}`}>
        <span>{text}</span>
      </div>
    </div>
  );
}
