export function Button1() {
  function handleClick() {
    alert("Clicou no Botão 1!");
  }

  return (
    <button id="button1" onClick={handleClick}>
      Clique aqui!
    </button>
  );
}
