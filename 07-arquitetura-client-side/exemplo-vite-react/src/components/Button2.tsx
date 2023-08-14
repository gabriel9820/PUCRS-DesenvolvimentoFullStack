export function Button2() {
  function handleClick(event: React.MouseEvent) {
    alert(`Clicou em: ${event.currentTarget.id}`);
    event.stopPropagation();
  }

  return (
    <button id="button2" onClick={handleClick}>
      Clique aqui!
    </button>
  );
}
