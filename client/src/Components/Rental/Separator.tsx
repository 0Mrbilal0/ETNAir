function Separator({ color = "black", height = 1 }) {
    return (
      <hr
        style={{
          backgroundColor: color,
          height: height,
          border: "none"
        }}
      />
    );
}

export default Separator;