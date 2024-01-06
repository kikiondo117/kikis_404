export function CopyButton({ text, number }: { text: string; number: string }) {
  return (
    <p>
      {text}:<span className="text-teal-300 mx-4">{number}</span>
      <button
        onClick={() => {
          navigator.clipboard
            .writeText(number.split(" ").join(""))
            .then(() => {
              alert("¡Texto copiado!");
            })
            .catch(() => {
              alert("Un error al copiar :(");
            });
        }}
        className="border-solid border-2 rounded-md p-1"
      >
        Copiar
      </button>
    </p>
  );
}
