
    let quantidade_A = 0;
    let quantidade_B = 0;
    let quantidade_C = 0;
    let quantidade_D = 0;
    let quantidade_E = 0;

    function Guardar(select) {
      if (select.value === "A") {
        quantidade_A++;
      } else if (select.value === "B") {
        quantidade_B++;
      } else if (select.value === "C") {
        quantidade_C++;
      } else if (select.value === "D") {
        quantidade_D++;
      } else if (select.value === "E") {
        quantidade_E++;
      }
    }

    function lerSelects() {
      // Zera antes de contar de novo
      quantidade_A = 0;
      quantidade_B = 0;
      quantidade_C = 0;
      quantidade_D = 0;
      quantidade_E = 0;

      const selects = document.querySelectorAll('select');
      selects.forEach(select => {
        Guardar(select);
      });

      document.getElementById("resultado").innerHTML = `
        <strong>Resultados:</strong><br>
       <strong> A (Exatas): ${quantidade_A}</strong><br>
        <strong>B (Criativo): ${quantidade_B}<br></strong>
        <strong>C (Social): ${quantidade_C}<br></strong>
        <strong>D (Natureza): ${quantidade_D}<br></strong>
        <strong>E (Liderança): ${quantidade_E}</strong>
      `;
    }
