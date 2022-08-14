import react from "react";

export default function PickColor({ name, title }) {
  const [color, setColor] = react.useState();

  const submitHandler = (e) => {
    e.preventDefault();
    setColor(color);
  };

  return (
    <div>
      <form>
				<div>
					<p>{title}</p>
        <input
          name={name}
          type="color"
          value={color}
          onChange={(e) => {
            setColor(e.currentTarget.value);
          }}
        />
				</div>
      </form>
    </div>
  );
}
